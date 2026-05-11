/* eslint-disable jsx-a11y/anchor-is-valid */
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../../styles/App.css";

export const SideBar = ({
    showPersonnel,
    showServices,
    selectedDate,
    handleDateChange
}) => {
    return (
        <aside className="bg-white border-r shadow-md p-6 transition-all duration-300 w-64 h-[100vh] flex flex-col">
            <div className="mb-8">
                {!showPersonnel && !showServices && (
                    <div className="calendar-container rounded-lg shadow-sm overflow-hidden">
                        <ReactCalendar
                            value={selectedDate}
                            onChange={handleDateChange}
                            locale="fr-FR"
                            className="custom-calendar"
                            nextLabel="›"
                            prevLabel="‹"
                            next2Label={null}
                            prev2Label={null}
                        />
                    </div>
                )}
            </div>
            <div className="space-y-6">
                <h3 className="text-xl font-bold text-[#002A5E] mb-4 border-b pb-2">
                    Gestion
                </h3>
                <div className="flex flex-col space-y-3">
                    {/* You can add sidebar links here if needed */}
                </div>
            </div>
        </aside>
    )
}
