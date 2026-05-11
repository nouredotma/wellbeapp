export const Button = ({
    children,
    variant = "default",
    className,
    ...props
}) => {
    const baseStyles =
        "px-4 py-2 rounded-lg font-medium transition-all duration-300 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-50";

    const variants = {
        default:
            "bg-[#002366] hover:bg-[#001a4d] focus:ring-[#002366]",
        outline:
            "border border-[#002366] text-[#002366] hover:bg-[#002366]/5 focus:ring-[#002366]",
        secondary:
            "bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-500",
        danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
        success:
            "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};
