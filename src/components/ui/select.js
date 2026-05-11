// src/components/ui/select.js
import React from "react";

export const Select = ({ children, className, ...props }) => {
    return (
        <select
            className={`w-full h-12 border border-gray-300 rounded-md px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 ${className}`}
            {...props}
        >
            {children}
        </select>
    );
};
