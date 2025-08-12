import { IoAddOutline } from "react-icons/io5";

import { Card, CardContent, CardHeader, CardTitle, Button, BudgetItem } from "@/components";
import { useBudgetStore } from "@/store";

export const ItemList = () => {

  const { budget, addItem } = useBudgetStore(state => state);

  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <CardTitle>Lista de Items</CardTitle>
        <Button onClick={addItem} size="sm">
          <IoAddOutline />
          Agregar Item
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="flex flex-col gap-2">
          {budget.items.map((item, index) => (
            <BudgetItem
              key={item.id}
              item={item}
              index={index}
              canRemove={budget.items.length > 1}
            />
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
