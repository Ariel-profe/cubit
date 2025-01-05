"use client";

import { ReactNode } from "react";
import { SiGoogle } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

export const AuthForm = () => {
  return (
    <div className="max-w-5xl mx-auto p-10 bg-s3/20 rounded-2xl">
        <Heading />

        <Email />
        <Or />
        <SocialOptions />
        <Terms />
    </div>
  );
};

const Heading = () => (
    <div className="mb-9 mt-6 space-y-1.5 text-center text-lg lg:text-xl">
      <h1 className="text-xl lg:text-4xl font-semibold">Iniciar sesión</h1>
      <p className="text-slate-400">
        Aún no tenes cuenta?{" "}
        <Link href="/registro" className="text-s4">
          Registrate.
        </Link>
      </p>
    </div>
);

const SocialOptions = () => (
  <div>
    <div className="mb-3 flex gap-3">
      <SplashButton className="flex w-full justify-center py-3">
        <SiGoogle />
      </SplashButton>
      <SplashButton className="flex w-full justify-center py-3">
        <FaFacebookF />
      </SplashButton>
    </div>
  </div>
);

const Or = () => {
  return (
    <div className="my-6 flex items-center gap-3">
      <div className="h-[1px] w-full bg-slate-700" />
      <span className="text-slate-400 w-full text-center">O con tus redes sociales</span>
      <div className="h-[1px] w-full bg-slate-700" />
    </div>
  );
};

const Email = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="mb-3">
        <label htmlFor="email-input" className="mb-1.5 block text-slate-400">
          Email
        </label>
        <input
          id="email-input"
          type="email"
          placeholder="tu.email@email.com"
          className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 placeholder-slate-500 ring-1 ring-transparent transition-shadow focus:outline-0 focus:ring-blue-700"
        />
      </div>
      <div className="mb-6">
        <div className="mb-1.5 flex items-end justify-between">
          <label htmlFor="password-input" className="block text-slate-400">
            Contraseña
          </label>
          <Link href="#" className="text-sm text-p2">
            Te olvidaste?
          </Link>
        </div>
        <input
          id="password-input"
          type="password"
          placeholder="••••••••••••"
          className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 placeholder-slate-500 ring-1 ring-transparent transition-shadow focus:outline-0 focus:ring-blue-700 placeholder:tracking-tight"
        />
      </div>
      <SplashButton type="submit" className="w-full">
        Iniciar sesión
      </SplashButton>
    </form>
  );
};

const Terms = () => (
  <p className="mt-9 text-slate-400 text-center">
    Iniciando sesion aceptas nuestros {" "}
    <a href="#" className="text-p2">
      Terminos & Condiciones
    </a>{" "}
    and nuestra{" "}
    <a href="#" className="text-p2">
      Politica de privacidad.
    </a>
  </p>
);

const SplashButton = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <button
      className={twMerge(
        "rounded-md bg-p2 px-4 py-2 text-lg text-slate-50 ring-2 ring-blue-500/50 ring-offset-2 ring-offset-slate-950 transition-all hover:scale-[1.02] hover:ring-transparent active:scale-[0.98] active:ring-p2/70",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

type ButtonProps = {
  children: ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;