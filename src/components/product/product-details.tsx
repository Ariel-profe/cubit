import { ProductDetailsItem } from "./product-details-item";

interface Props {
    product: any;
}

export const ProductDetails = ({ product }: Props) => {
    return (
        <ul className="grid grid-cols-2 lg:grid-cols-2 gap-2">
            {
                product.category === "backpack" && (
                    <>
                        <ProductDetailsItem title="marca" value={product.brand} />
                        <ProductDetailsItem title="modelo" value={product.model} />
                        <ProductDetailsItem title="materiales" value={product.materials} />
                        <ProductDetailsItem title="color" value={product.color} />
                        <ProductDetailsItem title="compartimentos" value={product.compartments} />
                        <ProductDetailsItem title="bolsillos laterales" value={product.lateralPockets} />
                        <ProductDetailsItem title="bolsillos superiores" value={product.superiorPockets} />
                        <ProductDetailsItem title="bolsillos frontales" value={product.frontPockets} />
                        <ProductDetailsItem title="compartimento para notebook" value={product.notebookCompartment} />
                        <ProductDetailsItem title="tamaño de notebook" value={product.notebookSize} />

                    </>
                )
            }
            {
                product.category === "caddy" && (
                    <>
                        <ProductDetailsItem title="marca" value={product.brand} />
                        <ProductDetailsItem title="espesor" value={product.thickness} />
                        <ProductDetailsItem title="compatibilidad" value={product.compatibility} />
                        <ProductDetailsItem title="incluye" value={product.includes} />
                    </>
                )
            }
            {
                product.category === "carry" && (
                    <>
                        <ProductDetailsItem title="marca" value={product.brand} />
                        <ProductDetailsItem title="tipo" value={product.type} />
                        <ProductDetailsItem title="conexión" value={product.connectionType} />
                        <ProductDetailsItem title="tamaño" value={product.size} />
                        <ProductDetailsItem title="material" value={product.material} />
                    </>
                )
            }
            {
                product.category === "coolerpad" && (
                    <>
                        <ProductDetailsItem title="marca" value={product.brand} />
                        <ProductDetailsItem title="niveles de altura" value={product.heightLevel} />
                        <ProductDetailsItem title="fan" value={product.fan} />
                        <ProductDetailsItem title="puertos usb" value={product.usbPorts} />
                        <ProductDetailsItem title="rgb" value={product.rgbLighting} />
                    </>
                )
            }
            {
                product.category === "hdd" && (
                    <>
                        <ProductDetailsItem title="marca" value={product.brand} />
                        <ProductDetailsItem title="modelo" value={product.model} />
                        <ProductDetailsItem title="formato" value={product.format} />
                        <ProductDetailsItem title="capacidad" value={product.capacity} />
                        <ProductDetailsItem title="rpm" value={product.rpm} />
                        <ProductDetailsItem title="espesor" value={product.thickness} />
                    </>
                )
            }
            {
                product.category === "ssd" && (
                    <>
                        <ProductDetailsItem title="marca" value={product.brand} />
                        <ProductDetailsItem title="tipo" value={product.type} />
                        <ProductDetailsItem title="modelo" value={product.model} />
                        <ProductDetailsItem title="formato" value={product.format} />
                        <ProductDetailsItem title="capacidad" value={product.capacity} />
                    </>
                )
            }
            {
                product.category === "docking" && (
                    <>
                        <ProductDetailsItem title="marca" value={product.brand} />
                        <ProductDetailsItem title="compatibilidad" value={product.compatibility} />
                        <ProductDetailsItem title="tipo de conexión" value={product.connectionType} />
                        <ProductDetailsItem title="versión usb" value={product.usbVersion} />
                    </>
                )
            }
            {
                product.category === "source" && (
                    <>
                        <ProductDetailsItem title="marca" value={product.brand} />
                        <ProductDetailsItem title="pin" value={product.pin} />
                        <ProductDetailsItem title="amperaje" value={product.amperage} />
                        <ProductDetailsItem title="watts" value={product.watts} />
                        <ProductDetailsItem title="voltaje" value={product.volts} />
                        <ProductDetailsItem title="compatibilidad" value={product.brandsUse} />
                    </>
                )
            }
            {
                product.category === "cover" && (
                    <>
                        <ProductDetailsItem title="marca" value={product.brand} />
                        <ProductDetailsItem title="estampa" value={product.stamp} />
                        <ProductDetailsItem title="materiales" value={product.materials} />
                        <ProductDetailsItem title="color" value={product.colors} />
                        <ProductDetailsItem title="tamaño de notebook" value={product.notebookSize} />
                        <ProductDetailsItem title="otros" value={product.otherFeatures} />
                    </>
                )
            }
            {
                product.category === "mouse" && (
                    <>
                        <ProductDetailsItem title="marca" value={product.brand} />
                        <ProductDetailsItem title="dpi" value={product.dpi} />
                        <ProductDetailsItem title="rgb" value={product.rgbLighting} />
                        <ProductDetailsItem title="botones" value={product.buttons} />
                        <ProductDetailsItem title="color" value={product.colors} />
                        <ProductDetailsItem title="tipo de conexión" value={product.connectionType} />
                    </>
                )
            }
            {
                product.category === "pad" && (
                    <>
                        <ProductDetailsItem title="marca" value={product.brand} />
                        <ProductDetailsItem title="medida" value={product.extent} />
                        <ProductDetailsItem title="tamaño" value={product.size} />
                        <ProductDetailsItem title="rgb" value={product.rgbLighting} />
                        <ProductDetailsItem title="material" value={product.materials} />
                        <ProductDetailsItem title="estampa" value={product.colorStamp} />
                    </>
                )
            }
            {
                product.category === "ram" && (
                    <>
                        <ProductDetailsItem title="marca" value={product.brand} />
                        <ProductDetailsItem title="tipo" value={product.type} />
                        <ProductDetailsItem title="capacidad" value={product.capacity} />
                        <ProductDetailsItem title="velocidad" value={product.speed} />
                    </>
                )
            }
            {
                product.category === "networkCard" && (
                    <>
                        <ProductDetailsItem title="marca" value={product.brand} />
                        <ProductDetailsItem title="tipo de conexión" value={product.connectionType} />
                        <ProductDetailsItem title="conexión usb" value={product.usbConnection} />
                        <ProductDetailsItem title="velocidad máx. de conexión" value={product.speed} />
                    </>
                )
            }
            {
                product.category === "support" && (
                    <>
                        <ProductDetailsItem title="marca" value={product.brand} />
                        <ProductDetailsItem title="modelo" value={product.model} />
                        <ProductDetailsItem title="máx. soporte" value={product.maxSupport} />
                        <ProductDetailsItem title="material" value={product.materials} />
                    </>
                )
            }
            {
                product.category === "videoCard" && (
                    <>
                        <ProductDetailsItem title="marca" value={product.brand} />
                        <ProductDetailsItem title="conexión" value={product.connectionType} />
                        <ProductDetailsItem title="conector" value={product.connectorType} />
                        <ProductDetailsItem title="resolución" value={product.resolution} />
                    </>
                )
            }
            {
                product.category === "headphone" && (
                    <>
                        <ProductDetailsItem title="marca" value={product.brand} />
                        <ProductDetailsItem title="tipo" value={product.type} />
                        <ProductDetailsItem title="conexión" value={product.connectionType} />
                        <ProductDetailsItem title="sensibilidad" value={product.sensitivity} />
                        <ProductDetailsItem title="frecuencia" value={product.frequencyRange} />
                        <ProductDetailsItem title="micrófono" value={product.microphone} />
                        <ProductDetailsItem title="luz led" value={product.ledLighting} />
                        <ProductDetailsItem title="gamer" value={product.gamer} />
                        <ProductDetailsItem title="color" value={product.colors} />
                    </>
                )
            }
            {
                product.category === "notebook" && (
                    <>
                        <ProductDetailsItem title="tipo" value={product.type} />
                        <ProductDetailsItem title="sist operativo" value={product.os} />
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
