import { LaptopScroll, Tag, TransitionPanel } from "@/components";
import { TextFocus } from "@/components/about/text-focus";

const items = [
  {
    title: 'Visión',
    subtitle: 'Excelencia en tecnología',
    content:
      'Nos esforzamos por ser líderes en el mercado, ofreciendo productos y servicios de la más alta calidad.',
  },
  {
    title: 'Misión',
    subtitle: 'Llevar inspiración e innovación a todos los rincones del mundo',
    content:
      'Nos dedicamos a ofrecer soluciones tecnológicas que inspiren y transformen la vida de las personas, llevando innovación a cada hogar y negocio.',
  },
  {
    title: 'Valores',
    subtitle: 'Reglas de oro en el servicio',
    content:
      'La innovación, la calidad y la satisfacción del cliente son nuestros pilares fundamentales. Nos esforzamos por superar las expectativas y brindar un servicio excepcional en todo momento.',
  },
];

const AboutPage = () => {
  return (
    <section className="container mx-auto px-3 mt-10 lg:mt-20">

        <TextFocus
          sentence="Cubit Tecnología"
          manualMode={false}
          blurAmount={5}
          borderColor="blue"
          animationDuration={2}
          pauseBetweenAnimations={1}
        />

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Tag title={"Conocenos"} />
            <p className="text-justify max-w-xl mt-2">
              En Cubit, nos enorgullece nuestra capacidad para adaptarnos a las
              necesidades de nuestros clientes y ofrecer soluciones personalizadas
              que realmente marcan la diferencia.
            </p>
          </div>

          <TransitionPanel items={items} />
        </div>

      

      <LaptopScroll />
    </section>
  )
}

export default AboutPage