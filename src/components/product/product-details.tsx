import { ProductDetailsItem } from "./product-details-item";

interface Props {
    product: any;
}

export const ProductDetails = ({ product }: Props) => {
    return (
        <ul className="grid grid-cols-2 lg:grid-cols-3 gap-5 w-full">
            {
                product.category === "notebooks" && (
                    <>
                        <ProductDetailsItem title="tipo" value={product.type} />
                        <ProductDetailsItem title="sistema operativo" value={product.os} />
                        <ProductDetailsItem title="procesador" value={product.processor} />
                        <ProductDetailsItem title="memoria ram" value={product.memoryRam} />
                        <ProductDetailsItem title="tarjeta gráfica" value={product.graphicCard} />
                        <ProductDetailsItem title="pantalla" value={product.screen} />
                        <ProductDetailsItem title="Bluetooth" value={product.bluetooth} />
                        <ProductDetailsItem title="lector de tarjetas" value={product.cardReader} />
                        <ProductDetailsItem title="display port" value={product.displayPort} />
                        <ProductDetailsItem title="hdmi" value={product.hdmi} />
                        <ProductDetailsItem title="teclado" value={product.keypad} />
                        <ProductDetailsItem title="teclado numérico" value={product.numKeypad} />
                        <ProductDetailsItem title="lan" value={product.lan} />
                        <ProductDetailsItem title="modelo" value={product.model} />
                        <ProductDetailsItem title="almacenamiento 1" value={product.storage1} />
                        <ProductDetailsItem title="almacenamiento 2" value={product.storage2} />
                        <ProductDetailsItem title="id/upcean" value={product.upcEan} />
                        <ProductDetailsItem title="usb" value={product.usb} />
                        <ProductDetailsItem title="vga" value={product.vga} />
                        <ProductDetailsItem title="webcam" value={product.webCam} />
                        <ProductDetailsItem title="peso" value={product.weight + "gr"} />
                        <ProductDetailsItem title="wifi" value={product.wiFi} />
                        <ProductDetailsItem title="garantía" value={product.warranty} />
                    </>
                )
            }
        </ul>
    )
}
