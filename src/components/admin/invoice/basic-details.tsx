import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const BasicDetails = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Detalles de la factura</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <Label htmlFor="invoiceNumber" className="mb-1">Número de factura</Label>
                    <Input id="invoiceNumber" />
                </div>

                <div>
                    <Label htmlFor="invoiceDate" className="mb-1">Fecha</Label>
                    <Input id="invoiceDate" type="date" />
                </div>
            </CardContent>
        </Card>
    )
}
