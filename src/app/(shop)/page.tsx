import { CallToAction, LogoTicker, Features, ProductShowcase, Testimonials, ContainerScroll, DemoOne, Hero } from "@/components";

export default function Home() {
  return (
    <section className="overflow-hidden">
      <DemoOne>
        <Hero />
        <LogoTicker />
        <ProductShowcase />
        <Features />
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl section-title">
                Lleva el producto que estás<br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  BUSCANDO
                </span>
              </h1>
            </>
          }
        >
          <img
            src={`/imgs/common/flyer.png`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-top w-full"
            draggable={false}
          />
        </ContainerScroll>
        <Testimonials />
        <CallToAction />
      </DemoOne>
    </section>
  );
}
