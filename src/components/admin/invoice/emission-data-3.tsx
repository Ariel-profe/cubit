import { IoAddOutline } from "react-icons/io5";

import { Card, CardContent, CardHeader, CardTitle, Button, InvoiceItem } from "@/components";

const items = [
  {
    id: 1,
    code: "",
    description: "",
    quantity: 1,
    measureUnit: "Unidad",
    price: 0,
    bonusPercentage: 0,
    subtotal: 0,
  }
];

export const EmissionData3 = () => {

  const addItem = () => {
    // Lógica para agregar un nuevo producto a la lista
    console.log("Agregar nuevo producto");
  };

  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <CardTitle>Datos de la operación (3 de 4)</CardTitle>
        <Button
          size="sm"
          className="mt-2"
          onClick={addItem}        
        >
          <IoAddOutline className="w-4 h-4" />
          Agregar producto
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {
          items.map((item, index) => (
            <InvoiceItem 
              key={item.id} 
              item={item} 
              index={index}
              canRemove={items.length > 1}
            />
          ))
        }
      </CardContent>
    </Card>
  )
}
