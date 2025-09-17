'use client';

import { useState, useActionState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import Link from 'next/link';
import { Mail, Lock, Eye, EyeOff, Loader2, Palette, Users, Cloud, ShieldCheck } from 'lucide-react';
import { IoAlertCircleOutline } from 'react-icons/io5';

import { authenticate } from "@/actions";
import { Button } from '@/components';

export const LoginForm = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [state, dispatch] = useActionState(authenticate, undefined);

    useEffect(() => {
        if (state === "Success")
            //Redireccionar
            window.location.replace("/")
    }, [state]);

    return (
        <div className="relative flex w-full items-center justify-center overflow-hidden p-4">
            <div className="z-10 w-full">
                <div className="bg-primary overflow-hidden rounded-[40px] shadow-2xl">
                    <div className="grid min-h-[700px] lg:grid-cols-2">
                        {/* Left Side */}
                        <div className="brand-side relative m-4 rounded-3xl bg-[url('/imgs/common/login-img.jpg')] bg-center bg-cover p-12 text-white">
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

                        {/* Right Side */}
                        <div className="flex flex-col justify-center p-12">
                            <div className="mx-auto w-full max-w-md">
                                <div className="mb-8 text-center">
                                    <img src="/imgs/common/logo.webp" alt="cubit-logo" className='w-28' />
                                </div>

                                <form action={dispatch} className="space-y-6">
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
                                                id="email"
                                                type="email"
                                                name='email'
                                                required
                                                className="border-slate-600 bg-background block w-full rounded-sm border py-3 pr-3 pl-10 text-sm"
                                                placeholder="correo@ejemplo.com"
                                            />
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
                                                id="password"
                                                type={showPassword ? 'text' : 'password'}
                                                name='password'
                                                required
                                                className="border-slate-600 bg-background block w-full rounded-sm border py-3 pr-12 pl-10 text-sm"
                                                placeholder="********"
                                            />
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

                                    <div className="flex items-center justify-between">
                                        <label className="text-muted-foreground flex items-center text-sm">
                                            <input
                                                type="checkbox"
                                                className="border-border text-primary h-4 w-4 rounded"
                                            />
                                            <span className="ml-2">Recordarme</span>
                                        </label>
                                        <a
                                            href="#"
                                            className="hover:text-slate-400 text-sm"
                                        >
                                            ¿Olvidaste tu contraseña?
                                        </a>
                                    </div>

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

                                    <div className="relative text-center text-sm text-slate-500 grid grid-cols-3 items-center">
                                        <hr className="border-slate-700" />
                                        <span className="relative px-2">O continúa con</span>
                                        <hr className="border-slate-700" />
                                    </div>

                                    <button
                                        type="button"
                                        className="border-slate-700 bg-background text-slate-200 hover:bg-background/80 flex items-center justify-center rounded-sm border px-4 py-2.5 text-sm shadow-sm w-full"
                                    >
                                        <img
                                            src="https://www.svgrepo.com/show/475656/google-color.svg"
                                            className="h-5 w-5"
                                            alt="Google"
                                        />
                                        <span className="ml-2">Google</span>
                                    </button>
                                </form>

                                <div className="text-muted-foreground mt-8 text-center text-sm">
                                    ¿No tienes una cuenta?{' '}
                                    <Link href="/auth/new-account" className="text-tertiary hover:text-tertiary/80">
                                        Registrate gratis
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

function LoginButton() {
    const { pending } = useFormStatus();

    return (
        <>
            {
                pending ? (
                    <div className="flex items-center">
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <span className="ml-2">Iniciando sesión...</span>
                    </div>
                ) : (
                    <Button variant='default' className='w-full' disabled={pending}>
                        Ingresar
                    </Button>
                )
            }
        </>

    )
}
