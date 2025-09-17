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
        <main className="w-full container mx-auto">
            <div className="flex flex-col justify-center">
                {children}
            </div>
        </main>
    );
}