import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export const TaxAndTotals = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Impuestos y Totales</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="taxRate" className="mb-1">Tasa de Impuesto (%)</Label>
          <Input id="taxRate" type="number" min={0} max={100} step={0.01} />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>$100.00</span>
          </div>
          <div className="flex justify-between">
            <span>Impuestos (10%)</span>
            <span>$10.00</span>
          </div>
          <div className="flex justify-between font-bold text-lg border-t pt-2 text-secondary">
            <span>Total</span>
            <span>$110.00</span>
          </div>

        </div>
      </CardContent>

    </Card>
  )
}
