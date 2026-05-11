import { Calendar, LayoutDashboard, Settings } from "lucide-react";
import { Link, useLocation, useParams } from "react-router-dom";

export function AdminSidebar() {
    const location = useLocation();
    const { id: establishmentId } = useParams();  // Get the dynamic establishment ID

    const sidebarItems = [
        {
            title: "Gestion des prestations",
            icon: LayoutDashboard,
            href: `/admin/${establishmentId}`,  // Dynamic path
        },
        {
            title: "Gestion des personnels",
            icon: Calendar,
            href: `/admin/${establishmentId}/personnel`,  // Dynamic path
        },
        {
            title: "Gestion des Horaires",
            icon: Settings,
            href: `/admin/${establishmentId}/horaire`,  // Dynamic path
        },
        // {
        //     title: "Paiement en ligne",
        //     icon: CreditCard,
        //     href: `/admin/${establishmentId}/payment`,  // Dynamic path
        // },
    ];

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
                            to={item.href}  // Use React Router `to`
                            className={`
                                flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-gray-100 
                                ${location.pathname === item.href ? "bg-gray-100" : "text-gray-500"}
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
