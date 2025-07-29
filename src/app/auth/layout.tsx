import { redirect } from "next/navigation";
import { auth } from "@/auth.config";
import Link from "next/link";

export default async function AuthLayout({
    children
}: {
    children: React.ReactNode;
}) {

    const session = await auth();

    if(session?.user){
        redirect("/")
    };   

    return (
        <main className="w-full max-w-[450px] md:max-w-[550px] mt-10 mx-auto">
            <div className="flex flex-col justify-center">
                <Link href="/" className="h-12 self-center cursor-pointer">
                    <img src="/imgs/common/logo.webp" alt="cubit-logo" className="h-12"  />
                </Link>
                {children}
            </div>
        </main>
    );
}