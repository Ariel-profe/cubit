import {Hero} from "@/components/homepage/hero";
import {Features} from "@/components/homepage/features";
import {Discounts} from "@/components/homepage/discounts";
import {Banner} from "@/components/homepage/banner";
import {ProductCarousel} from "@/components/products/product-carousel";
import {IProduct} from "@/interface";

const products: IProduct[] = [
  {
    id: 1,
    title: "notebook asus i3 8gb",
    slug: "notebook_asus_i3_8gb",
    category: "notebooks",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
    imgUrl: "/images/notebook.webp",
  },
  {
    id: 2,
    title: "notebook pentium i5 16gb",
    slug: "notebook_pentium_i5_16gb",
    category: "notebooks",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
    imgUrl: "/images/notebook.webp",
  },
  {
    id: 3,
    title: "notebook hp i3 8gb",
    slug: "notebook_hp_i3_8gb",
    category: "notebooks",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
    imgUrl: "/images/notebook.webp",
  },
  {
    id: 4,
    title: "notebook lenovo gamer i9 36gb",
    slug: "notebook_lenovo_gamer_i9_36gb",
    category: "notebooks",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
    imgUrl: "/images/notebook.webp",
  },
  {
    id: 5,
    title: "notebook lenovo i3 8gb",
    slug: "notebook_lenovo_i3_8gb",
    category: "notebooks",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
    imgUrl: "/images/notebook.webp",
  },
  {
    id: 6,
    title: "notebook hp i7 16gb",
    slug: "notebook_asus_i7_16gb",
    category: "notebooks",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
    imgUrl: "/images/notebook.webp",
  }
];

export default function Home() {
  return (
    <section className="">
      <Hero />
      <Features />
      <Discounts />
      <ProductCarousel products={products} />
      <Banner />
    </section>
  );
}
