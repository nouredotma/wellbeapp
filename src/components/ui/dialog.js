import * as React from "react";

export function Dialog({ open, onOpenChange, children }) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                {children}
            </div>
        </div>
    );
}

export function DialogContent({ children }) {
    return <div className="p-4">{children}</div>;
}

export function DialogHeader({ children }) {
    return <div className="font-bold text-lg">{children}</div>;
}

export function DialogTitle({ children }) {
    return <h2 className="text-xl">{children}</h2>;
}

// ✅ Add missing exports:
export function DialogTrigger({ children, onClick }) {
    return (
        <button onClick={onClick} className="px-4 py-2 bg-gray-200 rounded">
            {children}
        </button>
    );
}

export function DialogDescription({ children }) {
    return <p className="text-gray-600">{children}</p>;
}

export function DialogFooter({ children }) {
    return <div className="flex justify-end gap-2 mt-4">{children}</div>;
}
