'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Mail, Lock, Eye, EyeOff, Palette, Users, Cloud, ShieldCheck } from 'lucide-react';

import { Button } from '@/components';
import { login, registerUser } from '@/actions';
import clsx from 'clsx';

type FormInputs = {
    name: string;
    email: string;
    password: string;
};

export const RegisterForm = () => {

    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();

    const onSubmit: SubmitHandler<FormInputs> = async (data) => {

        const { name, email, password } = data;

        //Server actions
        const { message, ok } = await registerUser(name, email, password);

        if (!ok) {
            toast.error(message, { position: "bottom-right" });
            return;
        };

        toast.success(message, { position: "bottom-right" });

        await login(email.toLowerCase(), password);
        window.location.replace("/")
    };

    return (
        <div className="relative flex w-full items-center justify-center overflow-hidden p-4">
            <div className="z-10 w-full">
                <div className="bg-primary overflow-hidden rounded-[40px] shadow-2xl">
                    <div className="grid min-h-[700px] lg:grid-cols-2">

                        {/* Left Side */}
                        <div className="flex flex-col justify-center p-12">
                            <div className="mx-auto w-full max-w-md">
                                <div className="mb-8 text-center">
                                    <img src="/imgs/common/logo.webp" alt="cubit-logo" className='w-28' />
                                </div>

                                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="mb-2 block text-sm font-medium uppercase"
                                        >
                                            Nombre y apellido
                                        </label>
                                        <div className="relative">
                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                <Mail className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                {...register("name", {
                                                    required: true,
                                                    minLength: 2
                                                })}
                                                className={clsx(
                                                    "border-slate-600 bg-background block w-full rounded-sm border py-3 pr-3 pl-10 text-sm",
                                                    {
                                                        "border-rose-500 focus:border-rose-500": errors.name,
                                                    }
                                                )}
                                                placeholder="Juan Pérez"
                                            />
                                            {errors.name?.type === "minLength" && (
                                                <span className="text-rose-500 p-0">El nombre y apellido deben tener al menos 2 letras</span>
                                            )}
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="mb-2 block text-sm font-medium uppercase"
                                        >
                                            Email
                                        </label>
                                        <div className="relative">
                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                <Mail className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                {...register("email", {
                                                    required: true,
                                                    pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
                                                })}
                                                className={clsx(
                                                    "border-slate-600 bg-background block w-full rounded-sm border py-3 pr-3 pl-10 text-sm",
                                                    {
                                                        "border-rose-500 focus:border-rose-500": errors.email,
                                                    }
                                                )}
                                                placeholder="correo@ejemplo.com"
                                            />
                                            {errors.email?.type === "pattern" && (
                                                <span className="text-rose-500 p-0">El email debe ser válido</span>
                                            )}
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="password"
                                            className="mb-2 block text-sm font-medium uppercase"
                                        >
                                            Contraseña
                                        </label>
                                        <div className="relative">
                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                <Lock className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type={showPassword ? 'text' : 'password'}
                                                {...register("password", {
                                                    required: true,
                                                    minLength: 6
                                                })}
                                                className={clsx(
                                                    "border-slate-600 bg-background block w-full rounded-sm border py-3 pr-3 pl-10 text-sm",
                                                    {
                                                        "border-rose-500 focus:border-rose-500": errors.password,
                                                    }
                                                )}
                                                placeholder="********"
                                            />
                                            {errors.password?.type === "minLength" && (
                                                <span className="text-rose-500 p-0">La contraseña debe tener al menos 6 caracteres</span>
                                            )}
                                            <button
                                                type="button"
                                                className="absolute inset-y-0 right-0 flex items-center pr-3"
                                                onClick={() => setShowPassword(!showPassword)}
                                            >
                                                {showPassword ? (
                                                    <EyeOff className="h-5 w-5 text-gray-400" />
                                                ) : (
                                                    <Eye className="h-5 w-5 text-gray-400" />
                                                )}
                                            </button>
                                        </div>
                                    </div>

                                    <Button variant='default' className='w-full'>
                                        Registrarme
                                    </Button>
                                </form>

                                <div className="text-muted-foreground mt-8 text-center text-sm">
                                    ¿Ya tienes una cuenta?{' '}
                                    <Link href="/auth/login" className="text-tertiary hover:text-tertiary/80">
                                        Ingresar
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Left Side */}
                        <div className="brand-side relative m-4 rounded-3xl bg-[url('/imgs/common/register-img.jpg')] bg-center bg-cover p-12 text-white">
                            <div className='backdrop-blur-xs'>
                                <div className="mb-12 text-lg font-semibold uppercase">
                                    Insumos tecnológicos
                                </div>
                                <h1 className="mb-4 text-6xl font-medium">
                                    Comprar, mejorar y crecer
                                </h1>
                                <p className="mb-12 text-xl opacity-80">
                                    La plataforma para tus necesidades tecnológicas laborales y de pasatiempos.
                                </p>

                                <div className="space-y-6">
                                    {[
                                        {
                                            icon: <Palette size={16} />,
                                            title: 'Variedad de productos',
                                            desc: 'Amplia gama de productos para elegir',
                                        },
                                        {
                                            icon: <Users size={16} />,
                                            title: 'Venta rápida',
                                            desc: 'Compra productos al instante',
                                        },
                                        {
                                            icon: <Cloud size={16} />,
                                            title: 'Interacción con el cliente',
                                            desc: 'Disponibilidad 24/7 para tus consultas',
                                        },
                                        {
                                            icon: <ShieldCheck size={16} />,
                                            title: 'Descuentos exclusivos',
                                            desc: 'Descuentos especiales para nuestros clientes',
                                        },
                                    ].map(({ icon, title, desc }, i) => (
                                        <div
                                            key={i}
                                            className="feature-item animate-fadeInUp flex items-center"
                                            style={{ animationDelay: `${0.2 * (i + 1)}s` }}
                                        >
                                            <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 text-white backdrop-blur-sm">
                                                {icon}
                                            </div>
                                            <div>
                                                <div className="font-semibold">{title}</div>
                                                <div className="text-sm opacity-70">{desc}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};