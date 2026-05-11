import { LayoutDashboard, Star } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const sidebarItems = [
    {
        title: "Fichier Client",
        icon: LayoutDashboard,
        href: "/client",
    },
    {
        title: "Avis Clients",
        icon: Star, 
        href: "/rating",
    },

];

export function ClientSideBar() {
    const location = useLocation();
    const pathname = location.pathname || ""; // Ensure pathname is always a string

    return (
        <div className="w-64 border-r bg-white">
            <div className="flex h-14 items-center border-b px-4">
                <span className="font-semibold">W E L L B E</span>
            </div>
            <div className="p-4">
                <nav className="space-y-2">
                    {sidebarItems.map((item) => (
                        <Link
                            key={item.href}
                            to={item.href} // Changed href to to (React Router syntax)
                            className={`
                flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-gray-100 
                ${pathname === item.href ? "bg-gray-100" : "text-gray-500"}
              `}
                        >
                            <item.icon className="h-4 w-4" />
                            {item.title}
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    );
}
