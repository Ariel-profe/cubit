import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { Label } from "@/components/ui/label";
import { onicContactDetails } from "@/utils";

export const TypeOfReceipt = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Puntos de Ventas y Tipos de Comprobantes habilitados para impresión</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div className="space-y-2">
                    <Label className="mb-1">Punto de Ventas a utilizar</Label>
                    <Select name="puntoDeVenta">
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Seleccionar" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value={onicContactDetails.pointOfSale.value}>{onicContactDetails.pointOfSale.label}</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">


                    <Label className="mb-1">Tipo de Comprobante</Label>
                    <Select name="universoComprobante">
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Seleccionar" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                {onicContactDetails.typeOfReceipt.map((type) => (
                                    <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </CardContent>
        </Card>
    )
}
