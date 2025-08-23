import { Card, CardContent, CardHeader, CardTitle, Input, Label } from "@/components";
import { useBudgetStore } from "@/store";

export const BasicDetails = () => {

const { budget, updatedBudget } = useBudgetStore(state => state);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Detalles de presupuesto</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4">
        <div className="w-fit">
          <Label htmlFor="budget-number" className="mb-0.5">Número de presupuesto</Label>
          <Input 
            id="budget-number" 
            type="text" 
            value={budget.budgetNumber}
            onChange={(e) => updatedBudget({ budgetNumber: e.target.value })}
          />
        </div>
        <div className="w-fit">
          <Label htmlFor="budget-date" className="mb-0.5">Fecha</Label>
          <Input 
            id="budget-date" 
            type="date" 
            value={budget.date}
            className="text-slate-200" 
            onChange={(e) => updatedBudget({ date: e.target.value })}
          />
        </div>
      </CardContent>
    </Card>
  )
}
