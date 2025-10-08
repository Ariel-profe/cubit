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

type StrengthLevel = "empty" | "weak" | "medium" | "strong" | "very-strong";

// Password strength calculation based on common rules
const calculateStrength = (password: string): { score: number; level: StrengthLevel } => {
  if (!password) return { score: 0, level: "empty" };
  
  let score = 0;
  
  // Length check
  if (password.length > 5) score += 1;
  if (password.length > 8) score += 1;
  
  // Character variety checks
  if (/[A-Z]/.test(password)) score += 1;
  if (/[a-z]/.test(password)) score += 1;
  if (/[0-9]/.test(password)) score += 1;
  if (/[^A-Za-z0-9]/.test(password)) score += 1;
  
  // Determine level based on score
  let level: StrengthLevel = "empty";
  if (score === 0) level = "empty";
  else if (score <= 2) level = "weak";
  else if (score <= 4) level = "medium";
  else if (score <= 5) level = "strong";
  else level = "very-strong";
  
  return { score, level };
};

// Colors for different strength levels
const strengthColors = {
  empty: "bg-gray-200",
  weak: "bg-red-500",
  medium: "bg-orange-500",
  strong: "bg-green-500",
  "very-strong": "bg-emerald-500",
};

// Text labels for different strength levels
const strengthLabels = {
  empty: "Vacía",
  weak: "Débil",
  medium: "Media",
  strong: "Fuerte",
  "very-strong": "Muy fuerte",
};

export const RegisterForm = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [strength, setStrength] = useState<StrengthLevel>("empty");
    const [passwordValue, setPasswordValue] = useState("");

    const { register, handleSubmit, formState: { errors }, setError, clearErrors } = useForm<FormInputs>();

    const onSubmit: SubmitHandler<FormInputs> = async (data) => {
        const { name, email, password } = data;

        // Prevent submission if password strength is below medium
        const { level } = calculateStrength(password);
        if (level === "weak" || level === "empty") {
            setError("password", { type: "manual", message: "La contraseña debe ser al menos de fuerza media (incluye alguna mayúscula, minúscula, número y carácter especial)." });
            return;
        }

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

    // Handle password input change
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPasswordValue(value);
        const { level } = calculateStrength(value);
        setStrength(level);

        // Clear manual error if strength is sufficient
        if (level !== "weak" && level !== "empty") {
            clearErrors("password");
        }
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
                                                value={passwordValue}
                                                onChange={handlePasswordChange}
                                                className={clsx(
                                                    "border-slate-600 bg-background block w-full rounded-sm border py-3 pr-3 pl-10 text-sm",
                                                    {
                                                        "border-rose-500 focus:border-rose-500": errors.password,
                                                    }
                                                )}
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
                                        {/* Password strength indicator */}
                                        <div className="mt-2 flex items-center gap-2 w-full">
                                            <div className={clsx("h-1 w-24 rounded flex-1", strengthColors[strength])}></div>
                                            <span className="text-xs font-medium">{strengthLabels[strength]}</span>
                                        </div>
                                        {errors.password?.type === "minLength" && (
                                            <span className="text-rose-500 p-0">La contraseña debe tener al menos 6 caracteres</span>
                                        )}
                                        {errors.password?.type === "manual" && (
                                            <span className="text-rose-500 p-0">{errors.password.message}</span>
                                        )}
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