
export default function AuthLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="w-full max-w-[550px] mt-10 mx-auto">
            <div className="flex flex-col justify-center">
                <img src="/imgs/common/logo.webp" alt="cubit-logo" className="h-12 self-center" />
                {children}
            </div>
        </main>
    );
}