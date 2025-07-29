"use client";

import { useActionState, useEffect } from "react";
import Link from "next/link";
import { useFormStatus } from "react-dom";
import { IoAlertCircleOutline } from "react-icons/io5";

import { authenticate } from "@/actions";
import { Loading, Button } from '@/components';

export const LoginForm = () => {

    const [state, dispatch] = useActionState(authenticate, undefined);

    useEffect(() => {
        if (state === "Success")
            //Redireccionar
            window.location.replace("/")
    }, [state]);

    return (
        <form action={dispatch} className="flex flex-col">

            <label htmlFor="email">Correo electrónico</label>
            <input
                className="px-5 py-2 border bg-gray-200 rounded mb-5 text-slate-800"
                type="email"
                name="email"
            />


            <label htmlFor="password">Contraseña</label>
            <input
                className="px-5 py-2 border bg-gray-200 rounded mb-5 text-slate-800"
                type="password"
                name="password"
            />

            <div
                className="flex items-center space-x-1"
                aria-live="polite"
                aria-atomic="true"
            >
                {
                    state === 'CredentialsSignin' && (
                        <div className="flex items-center space-x-1 mb-1">
                            <IoAlertCircleOutline className="h-5 w-5 text-rose-400" />
                            <p className="text-sm text-rose-400">Correo o contraseña inválidos</p>
                        </div>
                    )
                }
            </div>

            <LoginButton />

            {/* divisor line */}
            <hr className="mt-4 text-slate-800" />
            <div className="flex items-center justify-center self-end text-sm mt-2 gap-x-1">
                <span>¿Es tu primera vez?</span>
                <Link
                    href="/auth/new-account"
                    className="btn-secondary text-center text-quaternary md:hover:text-quaternary/70 transition-colors">
                    Crear una nueva cuenta
                </Link>
            </div>
        </form>
    )
};

function LoginButton() {
    const { pending } = useFormStatus();

    return (
        <>
            {
                pending ? (
                    <Loading />
                ) : (
                    <Button variant='default' disabled={pending}>
                        Ingresar
                    </Button>
                )
            }
        </>

    )
}
