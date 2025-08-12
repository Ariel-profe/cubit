import { Card, CardContent, CardHeader, CardTitle, Input, Label } from "@/components";
import { useBudgetStore } from "@/store";

export const ContactDetails = () => {

  const { budget, updatedBudget } = useBudgetStore(state => state);  

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
            <Input
              id="companyName"
              value={budget.companyName}
              onChange={(e) => updatedBudget({ companyName: e.target.value })} 
            />
          </div>
          <div>
            <Label htmlFor="companyEmail" className="mb-1">Email</Label>
            <Input
              id="companyEmail"
              value={budget.companyEmail}
              type="email" onChange={(e) => updatedBudget({ companyEmail: e.target.value })} 
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-medium">Información del Cliente</h3>
          <div>
            <Label htmlFor="clientName" className="mb-1">Nombre</Label>
            <Input
              id="clientName"
              value={budget.clientName}
              onChange={(e) => updatedBudget({ clientName: e.target.value })} 
            />
          </div>
          <div>
            <Label htmlFor="clientEmail" className="mb-1">Email</Label>
            <Input
              id="clientEmail"
              type="email"
              value={budget.clientEmail} onChange={(e) => updatedBudget({ clientEmail: e.target.value })} 
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
};
