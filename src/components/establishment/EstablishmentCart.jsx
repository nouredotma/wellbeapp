import React from "react";
import { Link } from "react-router-dom";

export const EstablishmentCart = ({
    establishment,
    selectedEstablishment,
    setSelectedEstablishment,
}) => {
    const defaultImage =
        "https://community.softr.io/uploads/db9110/original/2X/7/74e6e7e382d0ff5d7773ca9a87e6f6f8817a68a6.jpeg"; // Default image placeholder

    return (
        <li className="bg-white shadow-md rounded-lg p-4 flex transition duration-200 hover:border hover:border-black">
            <img
                src={defaultImage}
                alt={establishment?.name || "Establishment"}
                className="w-32 h-32 rounded-md object-cover"
            />
            <div className="ml-4 flex-1">
                <h3 className="text-lg font-semibold">
                    {establishment.establishment_label}
                </h3>
                <p className="text-gray-700">
                    {establishment.establishment_description}
                </p>
                <p className="text-gray-600">
                    {establishment.Location?.location_city || "Ville inconnue"} -{" "}
                    {establishment.Location?.location_code_postal || ""} -{" "}
                    {establishment.Location?.location_country || ""}{" "}
                </p>
                <p className="text-yellow-500">
                    ⭐ {establishment.rating || 0} - {establishment.price || 0} MAD
                </p>
                <p className="text-gray-500">
                    Avis
                </p>
                <Link
                    to={`/establishment/${establishment.establishment_uuid}`}
                    className="mt-2 border-2 border-[#002366] bg-[#002366] text-white hover:bg-white hover:text-[#002366] px-4 py-2 rounded inline-block"
                >
                    Prendre RDV
                </Link>
            </div>
        </li>
    );
};
