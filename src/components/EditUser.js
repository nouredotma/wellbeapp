import React, { useState } from 'react';
import Modal from 'react-modal';
import Swal from 'sweetalert2';
import { updateUser } from '../services/userService';


Modal.setAppElement('#root');

const EditUser = ({ isOpen, onClose, user, refreshUserInfo }) => {
    const [formData, setFormData] = useState({
        user_email: user?.user_email || '',
        user_name: user?.user_name || '',
        user_first_name: user?.user_first_name || '',
        user_numero: user?.user_phone || '',
        user_whatsapp_uid: user?.user_whatsapp_uid || '',
        role_id: 1
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            await updateUser(user.user_uuid, formData);
    
            await Swal.fire({
                title: "Informations mises à jour",
                text: "Vos informations ont été modifiées avec succès !",
                icon: "success",
                confirmButtonText: "D'accord",
                confirmButtonColor: "#002A5E"
            });
    
            refreshUserInfo();  // Reload data in parent after update
            onClose();
        } catch (error) {
            console.error("❌ Failed to update user:", error);
    
            Swal.fire({
                title: "Erreur",
                text: "Une erreur s'est produite lors de la mise à jour de vos informations.",
                icon: "error",
                confirmButtonText: "Fermer"
            });
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto mt-24"
            overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
        >
            <h2 className="text-xl font-semibold mb-4">Modifier mes informations</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {[
                    { label: "Nom", name: "user_name" },
                    { label: "Prénom", name: "user_first_name" },
                    { label: "Email", name: "user_email", type: "email" },
                    { label: "Numéro de téléphone", name: "user_numero" },
                    { label: "WhatsApp UID", name: "user_whatsapp_uid" }
                ].map(({ label, name, type = "text" }) => (
                    <div key={name}>
                        <label className="block text-sm font-medium">{label}</label>
                        <input
                            type={type}
                            name={name}
                            value={formData[name]}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-lg"
                        />
                    </div>
                ))}
                <div className="flex justify-end space-x-2">
                    <button type="button" onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">Annuler</button>
                    <button type="submit" className="bg-[#002A5E] text-white px-4 py-2 rounded">Enregistrer</button>
                </div>
            </form>
        </Modal>
    );
};

export default EditUser;
