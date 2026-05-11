import { ClientSideBar } from "./client-sidebar";
import { TopNav } from "./top-nav";

export default function AdminLayout({ children }) {
    return (
        <div className="flex h-screen bg-white">
            <ClientSideBar />
            <div className="flex flex-1 flex-col">
                <TopNav />
                <main className="flex-1 overflow-auto bg-gray-50/50">
                    {children}
                </main>
            </div>
        </div>
    );
}
