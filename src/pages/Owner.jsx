import { Outlet, useLocation, useParams } from "react-router-dom";
import Layout from "../components/Layout/owner/Layout";
import Calendar from "./Calendary";
export default function Owner() {
    const { id } = useParams();
    const location = useLocation();

    const isExactOwnerPage = location.pathname === `/owner/${id}`;

    return (
        <Layout>
            {isExactOwnerPage && (
                <Calendar/>
            )}

            <Outlet />
        </Layout>
    );
}
