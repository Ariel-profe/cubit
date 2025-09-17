import { StepsAnimated, Tag, TransitionPanel } from "@/components";

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

const ServicesPage = () => {
  return (
    <section className="container mx-auto px-3 mt-10 lg:mt-20">
      <StepsAnimated />
    </section>
  )
}

export default ServicesPage