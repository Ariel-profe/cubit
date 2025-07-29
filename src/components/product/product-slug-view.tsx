import { ProductDetails } from "./product-details";
import { ProductSlideshow } from "./product-slideshow";
import { ProductMobileSlideshow } from "./product-mobile-slideshow";
import { StockLabel } from "./stock-label";
import { Title } from "@/components/ui/title";
import { AddToCart } from "./add-to-cart";

interface Props {
    product: any;
}

export const ProductSlugView = ({ product }: Props) => {       
    
    return (
        <section className="shadow-lg rounded-lg mt-10 container mx-auto px-3">
            <div className="grid md:grid-cols-2 w-full lg:gap-5">

                {/* Mobile Slideshow */}
                <div className="col-span-1">
                <ProductMobileSlideshow  
                    title={product.title}
                    images={product.images}
                    className="block md:hidden"
                />

                {/* Desktop Slideshow */}
                    <ProductSlideshow 
                        title={product.title}
                        images={product.images}
                        className="hidden md:block"
                    />
                </div>

                {/* Product Details */}
                <div className="col-span-1 pb-2">
                    <Title title={product.title} className="text-2xl lg:text-3xl capitalize" />

                   <StockLabel slug={product.slug} category={product.category }/>
                    <p className="text-2xl font-semibold mb-4">
                       Precio: ${product.price}
                    </p>

                    <p className="text-lg underline underline-offset-4 mb-2 capitalize">
                        Especificaciones:
                    </p>

                    {/* Reviews */}
                    {/* <div className="flex items-center mb-4">
                        <span
                            className="bg-green-500 text-white text-sm font-semibold px-2.5 py-0.5 rounded"
                            >4.5 ★</span
                        >
                        <span className="text-sm text-gray-500 ml-2">1,234 reviews</span>
                    </div> */}

                    <ProductDetails product={product} />

                    <h3 className="m-2">Cantidad</h3>

                    <AddToCart product={product} />
                </div>
            </div>
        </section>
    )
}
