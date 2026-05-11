import React from "react";

export default function Input({ className, ...props }) {
    return (
        <input
            className={`w-full h-10 mb-0 rounded-md border border-gray-300 pl-4 pr-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300 ${className}`}
            {...props}
        />
    );
}
