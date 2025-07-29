import { auth } from "@/auth.config"
import { Title } from "@/components"
import { redirect } from "next/navigation";

export default async function ProfilePage() {

    const session = await auth();

    if (!session?.user) {
        // redirect("/auth/login?returnTo=/profile")
        redirect("/")
    };

    return (
        <section className="container mx-auto px-3 mt-10 lg:mt-20">
            <Title title="Perfil" />

            <pre>
                {
                    JSON.stringify(session.user, null, 2)
                }
            </pre>
        </section>
    )
}