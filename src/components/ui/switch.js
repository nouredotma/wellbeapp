import * as SwitchPrimitive from "@radix-ui/react-switch";
import * as React from "react";

export default function Switch({ checked, onCheckedChange, id }) {
    return (
        <SwitchPrimitive.Root
            id={id}
            checked={checked}
            onCheckedChange={onCheckedChange}
            className="relative w-12 h-6 bg-gray-300 rounded-full p-1 data-[state=checked]:bg-blue-500 transition"
        >
            <SwitchPrimitive.Thumb className="block w-5 h-5 bg-white rounded-full shadow-md transform transition-transform data-[state=checked]:translate-x-6" />
        </SwitchPrimitive.Root>
    );
}
