import AdminPanelLayout from "@/components/admin/dashboard/admin-panel-layout";
import { getServerSession } from "@/lib/get-server-session";
import { forbidden, unauthorized } from "next/navigation";

export default async function AdminPage({
    children,
}: {
    children: React.ReactNode;
}) {

    const session = await getServerSession();
    const user = session?.user;

    if (!user) unauthorized();
    if (user?.role !== "admin") forbidden();

    return (<AdminPanelLayout>{children}</AdminPanelLayout>);
}