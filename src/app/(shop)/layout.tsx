import { Footer, Sidebar, Navbar } from "@/components";
import { User } from "@/lib/auth";
import { getServerSession } from "@/lib/get-server-session";

export default async function ShopLayout({
    children
}: {
    children: React.ReactNode;
}) {

    const session = await getServerSession();
    const user = session?.user;

    return (
        <main className="grid min-h-[100dvh] grid-rows-[auto_1fr_auto]">
            <Navbar />
            <Sidebar user={user ? user : null} />
            {children}
            <Footer />
        </main>
    );
}