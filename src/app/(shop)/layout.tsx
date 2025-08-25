import { Footer, Sidebar, Navbar } from "@/components";

export default function ShopLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="grid min-h-[100dvh] grid-rows-[auto_auto_1fr_auto]">
            <Navbar />
            <Sidebar />
            {children}
            <Footer />
        </main>
    );
}