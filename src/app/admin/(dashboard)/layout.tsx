import AdminPanelLayout from "@/components/admin/dashboard/admin-panel-layout";

export default function AdminPage({
    children,
}: {
    children: React.ReactNode;
}) {
    return (<AdminPanelLayout>{children}</AdminPanelLayout>);
}