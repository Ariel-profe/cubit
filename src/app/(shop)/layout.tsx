import { Footer, Sidebar, TopMenu } from "@/components";

export default function ShopLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="grid min-h-[100dvh] grid-rows-[auto_auto_1fr_auto]">
            <TopMenu />
            <Sidebar />
            {children}
            <Footer />
        </main>
    );
}