import type { Metadata } from "next";
import { unauthorized } from "next/navigation";
import { EmailForm, EmailVerificationAlert, LogoutEverywhereButton, PasswordForm, ProfileDetailsForm, ProfileInformation } from "@/components";
import { getServerSession } from "@/lib/get-server-session";

export const metadata: Metadata = {
    title: "Profile",
};

export default async function ProfilePage() {
    
    const session = await getServerSession();
    const user = session?.user;

    if(!user) unauthorized();

    return (
        <section className="container mx-auto px-3 mt-24 lg:mt-32">
            <div className="space-y-6">
                <div className="space-y-2">
                    <h1 className="text-2xl font-semibold">Perfil de usuario</h1>
                    <p className="text-muted-foreground">
                        ¡Bienvenido de nuevo! Aquí está la visión general de tu cuenta.
                    </p>
                </div>
                {
                    !user.emailVerified && <EmailVerificationAlert />
                }
                <ProfileInformation user={user} />
            </div>

            <div className="space-y-6 mt-10">
                <div className="space-y-2">
                    <h1 className="text-2xl font-semibold">Configuración de la cuenta</h1>
                    <p className="text-muted-foreground">
                        Actualiza los detalles de tu cuenta, correo electrónico y contraseña.
                    </p>
                </div>
                <div className="flex flex-col gap-6 lg:flex-row">
                    <div className="flex-1">
                        <ProfileDetailsForm />
                    </div>
                    <div className="flex-1 space-y-6">
                        <EmailForm currentEmail="ariel@mail.com" />
                        <PasswordForm />
                        <LogoutEverywhereButton />
                    </div>
                </div>
            </div>
        </section>
    );
}