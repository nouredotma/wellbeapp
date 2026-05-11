import { Link, useLocation, useParams } from "react-router-dom";

const sidebarItems = [
    // Define sidebar menu items here when needed
];

export function AdminSidebar() {
    const location = useLocation();
    const { id: establishmentId } = useParams();  
    const pathname = location.pathname || "";

    const navItems = [
        { name: "Agenda", href: `/owner/${establishmentId}` },
        { name: "Clients", href: "/client" },
        { name: "Admin", href: `/admin/${establishmentId}` },
    ];

    return (
        <div className="w-64 border-r bg-white">
            <div className="flex h-14 items-center border-b px-4">
                <span className="font-semibold">WELLBE</span>
            </div>
            <div className="p-4">
                <nav className="space-y-2">
                    {sidebarItems.map((item) => (
                        <Link
                            key={item.href}
                            to={item.href}
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

// Define navItems outside so it can be used in TopNav too
export function TopNav() {
    const location = useLocation();
    const pathname = location.pathname || "";

    const navItems = [
        { name: "Agenda", href: `/owner/:id` }, // Use a dynamic placeholder if needed
        { name: "Clients", href: "/client" },
        { name: "Admin", href: `/admin/:id` },
    ];

    return (
        <div className="border-b bg-white">
            <nav className="flex h-14 items-center px-4">
                <div className="flex gap-6 text-sm font-medium">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            to={item.href}
                            className={`transition-colors hover:text-primary ${pathname.startsWith(item.href) ? "text-primary" : "text-muted-foreground"}`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </nav>
        </div>
    );
}
