import { Title } from "@/components/ui/title";

export const Hero = () => {
  return (
    <section className="">
    <div className="flex flex-col md:flex-row items-center justify-between mt-10 md:mt-0">
        <div className="flex flex-col items-center justify-center md:items-start gap-1 w-full md:w-1/3 max-w-md">
          
            <Title
                title="COMPRÁ RÁPIDO Y SEGURO"
                subtitle=" En Cubit tenemos los mejores productos technológicos para tu hogar y oficina."
                className="font-bold text-5xl md:text-6xl lg:text-7xl text-center"
            />
        </div>

        <div className="absolute -z-10 inset-0 grayscale-50 blur-md md:relative md:grayscale-0 md:blur-none w-full md:w-2/3 md:h-[700px] overflow-hidden">
            <img
                src="/imgs/common/hero.png"
                className="object-contain w-full h-full"
                alt="hero"
            />
        </div>
    </div>
</section>

  )
}
