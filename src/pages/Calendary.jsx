import frLocale from "@fullcalendar/core/locales/fr";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { apiClient } from "../services/apiService";
import { fetchEstablishmentById, fetchScheduleById } from "../services/appointmentService";

// Fetch user profile by UUID
const fetchUserProfileByUUID = async (userUUID) => {
    try {
        const response = await apiClient.get(`/users/${userUUID}`);
        return response.data || { user_first_name: "Client", user_name: "Inconnu" };
    } catch (error) {
        console.error(`❌ Failed to fetch user profile for ${userUUID}:`, error);
        return { user_first_name: "Client", user_name: "Inconnu" };  // Fallback
    }
};

const Calendary = () => {
    const { id } = useParams(); // Establishment UUID from URL
    const [events, setEvents] = useState([]);
    const [establishmentName, setEstablishmentName] = useState("");

    useEffect(() => {
        loadAppointments();
        loadEstablishmentInfo();
    }, [id]);

    const loadAppointments = async () => {
        try {
            const response = await apiClient.get(`/appointments`);
            const allAppointments = response.data || [];

            const establishmentAppointments = [];

            for (const appointment of allAppointments) {
                const schedule = await fetchScheduleById(appointment.schedule_uuid);
                if (schedule && schedule.establishment_uuid === id) {
                    const user = await fetchUserProfileByUUID(appointment.user_uuid);

                    establishmentAppointments.push({
                        id: appointment.appointment_id,
                        title: `RDV avec ${user.user_first_name} ${user.user_name}`,
                        start: new Date(appointment.appointment_date),
                        end: new Date(new Date(appointment.appointment_date).getTime() + 60 * 60 * 1000), // +1 hour
                    });
                }
            }

            setEvents(establishmentAppointments);
        } catch (error) {
            console.error("❌ Error loading appointments:", error);
        }
    };

    const loadEstablishmentInfo = async () => {
        const establishment = await fetchEstablishmentById(id);
        if (establishment) {
            setEstablishmentName(establishment.establishment_name);
        } else {
            setEstablishmentName("Établissement inconnu");
        }
    };

    const handleDateSelect = async (selectInfo) => {
        const { value: title } = await Swal.fire({
            title: "Nouveau rendez-vous",
            input: "text",
            inputLabel: "Titre du RDV",
            inputPlaceholder: "Saisissez le titre du RDV",
            showCancelButton: true,
            confirmButtonText: "Créer",
            cancelButtonText: "Annuler",
            inputValidator: (value) => {
                if (!value) {
                    return "Le titre est obligatoire !";
                }
            },
        });

        if (title) {
            const newEvent = {
                id: String(Date.now()),
                title,
                start: selectInfo.start,
                end: selectInfo.end,
            };

            setEvents((prevEvents) => [...prevEvents, newEvent]);

            // Optional: Save to backend if needed
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4 text-[#002A5E]">
                Agenda
            </h2>

            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="timeGridDay"
                locale={frLocale}
                events={events}
                selectable={true}
                editable={true}
                select={handleDateSelect}
                height="calc(100vh - 80px)"
                slotMinTime="09:00:00"
                slotMaxTime="20:00:00"
                headerToolbar={{
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay"
                }}
                buttonText={{
                    today: "Aujourd'hui",
                    month: "Mois",
                    week: "Semaine",
                    day: "Jour"
                }}
            />
        </div>
    );
};

export default Calendary;
