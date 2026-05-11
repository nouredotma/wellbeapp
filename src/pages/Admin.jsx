import { Outlet, useLocation, useParams } from "react-router-dom";
import AdminDashboard from "../components/AdminDashboard";
import AdminLayout from "../components/Adminlayout";

export default function AdminPage() {
    const { id } = useParams();
    const location = useLocation();

    const isExactAdminPage = location.pathname === `/admin/${id}`;

    return (
        <AdminLayout>
            {isExactAdminPage && (
                <AdminDashboard establishmentId={id} />
            )}

            {/* Nested routes will render here */}
            <Outlet />
        </AdminLayout>
    );
}
