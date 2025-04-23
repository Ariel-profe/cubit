import { Button } from "@/components/ui/button";
import { Title } from "@/components/ui/title";
import { ProductDetails } from "./product-details";
import { QuantitySelector } from "./quantity-selector";
import { ProductSlideshow } from "./product-slideshow";
import { ProductMobileSlideshow } from "./product-mobile-slideshow";

interface Props {
    product: any;
}

export const ProductSlugView = ({ product }: Props) => {
    return (
        <div className="mx-auto shadow-lg rounded-lg overflow-hidden mt-10 lg:my-20">
            <div className="grid md:grid-cols-2 w-full lg:gap-10">

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
                <div className="col-span-1 px-1">
                    <Title title={product.title} className="text-2xl lg:text-3xl" />

                    <p className="text-2xl font-semibold text-slate-400 mb-4">
                       Precio: ${product.price}
                    </p>

                    <p className="text-lg underline underline-offset-4 text-slate-300 mb-2 capitalize">
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
                    <QuantitySelector quantity={1} />
                    
                    <Button title="Añadir al carrito" />
                </div>
            </div>
        </div>
    )
}
