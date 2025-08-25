import Link from 'next/link';
import { Globe, Mail, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
      <section className="mx-auto container px-3 mt-10 lg:mt-35">
        <div
          className="relative isolate w-full overflow-hidden rounded-2xl py-20"
          style={{
            background:
              'linear-gradient(100.5deg,rgba(57,18,241,.4) 29.55%,rgba(164,129,255,.4) 93.8%),radial-gradient(38.35% 93.72% at 18.31% 6.28%,rgba(170,135,252,.8) 0,rgba(61,27,205,.8) 100%)',
          }}
        >
          <img
            alt="bg"
            loading="lazy"
            width="1840"
            height="694"
            className="absolute top-0"
            src="/assets/grid.svg"
          />
          <div className="relative isolate overflow-hidden px-4 py-12 sm:px-24">
            <p className="w-fit rounded-xl bg-white px-4 py-1 text-center text-base leading-7 font-semibold text-black uppercase lg:text-left">
              ¡Contactanos!
            </p>
            <h2 className="mt-3 max-w-md text-4xl font-semibold text-white md:text-6xl">
              Estos son nuestros medios <span className="text-primary-2"> de contacto</span>?
            </h2>
            <p className="my-auto mt-3 max-w-2xl text-base text-gray-300 md:text-lg">
                Estamos para ayudarte y darte una respuesta lo más pronta posible.
            </p>
            <div className="mt-8 flex w-full flex-col justify-between gap-4 text-lg md:flex-row">
              <a
                className="flex items-center gap-2 text-white"
                href="mailto:cubit.tecnologias@gmail.com"
              >
                <Mail className="h-7 w-7 text-red-500" />
                cubit.tecnologias@gmail.com
              </a>
              <a className="flex items-center gap-2 text-white" href="#">
                <Phone className="h-7 w-7 text-green-500" />
                +54 9 261-3625959
              </a>
              <Link prefetch={false} className="flex items-center gap-2 text-white" href="/">
                <Globe className="h-7 w-7 text-blue-500" />
                cubit.com
              </Link>
            </div>
            <ul className="mt-8 ml-4 list-disc text-sm text-gray-300 md:text-base">
              <li>Envíe su consulta e indique sus requisitos.</li>
              <li>
                Recibirá una llamada de nuestros expertos según su consulta para ayudarle con su necesidad.
              </li>
            </ul>
          </div>
        </div>
      </section>
  );
}
