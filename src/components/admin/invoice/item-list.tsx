import { IoAddOutline } from "react-icons/io5";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { InvoiceItem } from "@/components";

const items = [
  {
    id: 1,
    name: "Producto 1",
    description: "Descripción del producto 1",
    quantity: 2,
    rate: 500,
    price: 100,
  },
  {
    id: 2,
    name: "Producto 2",
    description: "Descripción del producto 2",
    quantity: 1,
    rate: 500,
    price: 200,
  }
];

export const ItemList = () => {

  const addItem = () => {
    // Lógica para agregar un nuevo producto a la lista
    console.log("Agregar nuevo producto");
  };

  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <CardTitle>Lista de productos</CardTitle>
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
