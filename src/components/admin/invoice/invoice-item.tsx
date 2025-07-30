import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { formatCurrency } from "@/utils";
import { IoTrashOutline } from "react-icons/io5";

interface Props {
    item: {
        id: number;
        name: string;
        description: string;
        quantity: number;
        rate: number;
        price: number;
    };
    index: number;
    canRemove?: boolean;
};

export const InvoiceItem = ({ item, index, canRemove }: Props) => {

    const updateItem = (index: number, field: string, value: string | number) => {
        // Aquí se puede implementar la lógica para actualizar el item
        console.log(`Actualizar item ${index} campo ${field} con valor ${value}`);
    };

    const removeItem = (index: number) => {
        // Aquí se puede implementar la lógica para eliminar el item
        console.log(`Eliminar item en el índice ${index}`);
    };

    return (
        <div className="grid grid-cols-12 gap-4 p-2 border rounded">
            <div className="col-span-5">
                <Label className="mb-1">Descripción</Label>
                <Input 
                    value={item.description}
                    onChange={(e) => updateItem(index, 'description', e.target.value)}
                />
            </div>
            <div className="col-span-2">
                <Label className="mb-1">Cantidad</Label>
                <Input 
                    min={1}
                    type="number"
                />
            </div>
            <div className="col-span-2">
                <Label className="mb-1">Tasas($)</Label>
                <Input 
                    type="number"
                    min={0}
                    step={0.01}
                />
            </div>
            <div className="col-span-2">
                <Label className="mb-1">Precio($)</Label>
                <div className="h-9 px-3 py-2 bg-gray-100 rounded flex items-center">
                    {formatCurrency(0.00)}
                </div>
            </div>
            <div className="col-span-1 flex items-center mt-4">
                <Button 
                    variant="destructive"
                    size="icon"
                    onClick={() => removeItem(index)}
                    disabled={!canRemove}
                >
                    <IoTrashOutline />
                </Button>
            </div>
        </div>
    )
};
