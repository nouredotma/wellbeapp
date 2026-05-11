// const renderServiceModal = () => {
//     if (!isServiceModalOpen) return null;

//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//             <div className="bg-white rounded-lg p-6 w-full max-w-md">
//                 <h2 className="text-xl font-bold mb-4">
//                     {selectedService
//                         ? "Modifier le service"
//                         : "Ajouter un service"}
//                 </h2>
//                 <form onSubmit={handleSaveService} className="space-y-4">
//                     <div>
//                         <label className="block text-sm font-medium mb-1">
//                             Nom du service
//                         </label>
//                         <input
//                             type="text"
//                             value={serviceFormData.name}
//                             onChange={(e) =>
//                                 setServiceFormData({
//                                     ...serviceFormData,
//                                     name: e.target.value,
//                                 })
//                             }
//                             className="w-full p-2 border rounded"
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium mb-1">
//                             Description
//                         </label>
//                         <textarea
//                             value={serviceFormData.description}
//                             onChange={(e) =>
//                                 setServiceFormData({
//                                     ...serviceFormData,
//                                     description: e.target.value,
//                                 })
//                             }
//                             className="w-full p-2 border rounded"
//                             rows={3}
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium mb-1">
//                             Prix (MAD)
//                         </label>
//                         <input
//                             type="number"
//                             value={serviceFormData.price}
//                             onChange={(e) =>
//                                 setServiceFormData({
//                                     ...serviceFormData,
//                                     price: e.target.value,
//                                 })
//                             }
//                             className="w-full p-2 border rounded"
//                             min="0"
//                             step="0.01"
//                             required
//                         />
//                     </div>
//                     <div className="flex justify-end gap-2 mt-4">
//                         <button
//                             type="button"
//                             onClick={() => setIsServiceModalOpen(false)}
//                             className="px-4 py-2 text-gray-600 hover:text-gray-800"
//                         >
//                             Annuler
//                         </button>
//                         <button
//                             type="submit"
//                             className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//                         >
//                             {selectedService ? "Modifier" : "Ajouter"}
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

const Service = () => {

    const servicesList = [];

    return (
        <div className="mt-6 bg-gray-100 p-4 rounded">
        <h3 className="text-lg font-bold">Gestion des services</h3>
        <div className="flex gap-4 mt-2">
            <button
                // onClick={handleAddService}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Ajouter Service
            </button>
        </div>
        <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border p-2">Nom</th>
                        <th className="border p-2">Description</th>
                        <th className="border p-2">Prix</th>
                        <th className="border p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {servicesList.length > 0 ? (
                        servicesList.map((service) => (
                            <tr
                                key={service.id}
                                className="text-center"
                            >
                                <td className="border p-2">
                                    {service.product_name}
                                </td>
                                <td className="border p-2">
                                    {service.product_description}
                                </td>
                                <td className="border p-2">
                                    {service.product_price}MAD
                                </td>
                                <td className="border p-2">
                                    <button
                                        // onClick={() =>
                                        //     // handleModifyService(service)
                                        // }
                                        className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                                    >
                                        Modifier
                                    </button>
                                    <button
                                        // onClick={() =>
                                        //     handleDeleteService(
                                        //         service.id
                                        //     )
                                        // }
                                        className="bg-red-500 text-white px-2 py-1 rounded"
                                    >
                                        Supprimer
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan={4}
                                className="border p-2 text-center"
                            >
                                Aucun service trouvé
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    </div>
    )
}
export default Service;