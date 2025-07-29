"use client";

import Link from "next/link";
import { SubmitHandler, useForm } from 'react-hook-form';
import clsx from "clsx";

import { login, registerUser } from "@/actions";
import { Button } from "@/components";
import { toast } from "react-toastify";

type FormInputs = {
    name: string;
    email: string;
    password: string;
};

export const RegisterForm = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();

    const onSubmit: SubmitHandler<FormInputs> = async (data) => {

        const { name, email, password } = data;

        //Server actions
        const { message, ok } = await registerUser(name, email, password);

        if (!ok) {
            toast.error(message, {position: "bottom-right"});
            return;
        };


        toast.success(message, {position: "bottom-right"});

        await login(email.toLowerCase(), password);
        window.location.replace("/")
    };

    return (
        <>
            <form className="flex flex-col relative" onSubmit={handleSubmit(onSubmit)} >

                <div className="flex flex-col gap-y-1 mb-5">
                    <label htmlFor="name">Nombre y apellido</label>
                    <input
                        className={clsx(
                            "px-5 py-2 border bg-slate-300 rounded text-slate-800",
                            {
                                "border-rose-500 focus:border-rose-500": errors.name,
                            }
                        )}
                        type="text"

                        {...register("name", {
                            required: true,
                            minLength: 2
                        })}
                    />
                    {errors.name?.type === "minLength" && (
                        <span className="text-rose-500 p-0">El nombre y apellido deben tener al menos 2 letras</span>
                    )}
                </div>

                <div className="flex flex-col gap-y-1 mb-5">
                    <label htmlFor="email">Correo electrónico</label>
                    <input
                        className={clsx(
                            "px-5 py-2 border bg-slate-300 rounded text-slate-800",
                            {
                                "border-rose-500 focus:border-rose-500": errors.email,
                            }
                        )}
                        type="email"
                        {...register("email", {
                            required: true,
                            pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
                        })}
                    />
                    {errors.email?.type === "pattern" && (
                        <span className="text-rose-500 p-0">El email debe ser válido</span>
                    )}
                </div>

                <div className="flex flex-col gap-y-1 mb-5">
                    <label htmlFor="password">Contraseña</label>
                    <input
                        className={clsx(
                            "px-5 py-2 border bg-slate-300 rounded text-slate-800",
                            {
                                "border-rose-500 focus:border-rose-500": errors.password,
                            }
                        )}
                        type="password"
                        autoFocus
                        {...register("password", {
                            required: true,
                            minLength: 6
                        })}
                    />
                    {errors.password?.type === "minLength" && (
                        <span className="text-rose-500 p-0">La contraseña debe tener al menos 6 caracteres</span>
                    )}
                </div>

                <Button variant='default'>
                    Registrarme
                </Button>

            </form>
            {/* divisor line */}
            <hr className="mt-2 text-slate-800" />
            <div className="flex items-center justify-center self-end text-sm mt-2 gap-x-1">
                <span>¿Ya tienes una cuenta?</span>
                <Link
                    href="/auth/login"
                    className="btn-secondary text-center text-quaternary md:hover:text-quaternary/70 transition-colors">
                    Ingresar
                </Link>
            </div>
        </>
    )
}
