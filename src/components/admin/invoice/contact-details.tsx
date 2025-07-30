import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cubitContactDetails } from "@/utils";

export const ContactDetails = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Empresa & Cliente</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <h3 className="font-medium">Información de la Empresa</h3>
                <div>
                  <Label htmlFor="companyName" className="mb-1">Nombre</Label>
                  <Input id="companyName" defaultValue={cubitContactDetails.companyName} />
                </div>
                <div>
                  <Label htmlFor="companyEmail" className="mb-1">Email</Label>
                  <Input id="companyEmail" defaultValue={cubitContactDetails.companyEmail} type="email" />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Información del Cliente</h3>
                <div>
                  <Label htmlFor="clientName" className="mb-1">Nombre del Cliente</Label>
                  <Input id="clientName" />
                </div>
                <div>
                  <Label htmlFor="clientEmail" className="mb-1">Email del Cliente</Label>
                  <Input id="clientEmail" type="email" />
                </div>
              </div>
            </CardContent>
        </Card>
    )
}
