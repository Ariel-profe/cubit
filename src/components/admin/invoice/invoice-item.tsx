import { useForm } from "react-hook-form";
import { IoTrashOutline } from "react-icons/io5";

import { Select, SelectContent, SelectTrigger, SelectValue, Button, Input, Label, SelectItem } from "@/components";
import { formatCurrency, measureUnits } from "@/utils";

interface Props {
    item: {
        id: number;
        code?: string;
        description: string;
        quantity: number;
        measureUnit?: string;
        price: number;
        bonusPercentage?: number;
        subtotal?: number;
    };
    index: number;
    canRemove?: boolean;
};

export const InvoiceItem = ({ item, index, canRemove }: Props) => {

    const {register, handleSubmit, } = useForm({
        defaultValues: {
            detalleCodigoArticulo: item.code || "",
            detalleDescripcion: item.description,
            detalleCantidad: item.quantity,
            detalleMedida: item.measureUnit || "Unidad",
            detallePrecio: item.price,
            detalleBonificacion: item.bonusPercentage || 0,
            detalleSubtotal: item.subtotal || 0,
        }
    });

    const updateItem = (index: number, field: string, value: string | number) => {
        // Aquí se puede implementar la lógica para actualizar el item
        
        
    };

    const removeItem = (index: number) => {
        // Aquí se puede implementar la lógica para eliminar el item
        console.log(`Eliminar item en el índice ${index}`);
    };

    const onSubmit = (data: any) => {
        // Aquí se puede implementar la lógica para manejar el envío del formulario
        console.log("Datos del item:", data);
    };

    return (
        <form className="grid grid-cols-12 gap-4 p-4 border rounded" onSubmit={handleSubmit(onSubmit)}>
            <div className="col-span-1">
                <Label className="mb-1">Código</Label>
                <Input {...register("detalleCodigoArticulo")}/>
            </div>
            <div className="col-span-5">
                <Label className="mb-1">Descripción</Label>
                <Input {...register("detalleDescripcion")}/>
            </div>
            <div className="col-span-1">
                <Label className="mb-1">Cantidad</Label>
                <Input type="number" min={1} step={1} {...register("detalleCantidad", {min: 1})}/>
            </div>
            <div className="col-span-1">
                <Label className="mb-1">U. medida</Label>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="U. medida" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="#" disabled>Seleccionar</SelectItem>
                      {
                        measureUnits.map((unit) => (
                            <SelectItem 
                                key={unit.value} 
                                value={unit.value} 
                                onClick={() => updateItem(index, 'measureUnit', unit.value)}
                            >
                                {unit.label}
                            </SelectItem>
                        ))
                      }
                    </SelectContent>
                </Select>
            </div>
            <div className="col-span-1">
                <Label className="mb-1">Precio unitario</Label>
                <Input 
                    name="detallePrecio"
                    type="number"
                    min={0}
                    step={0.01}
                    value={item.price}
                    onChange={(e) => updateItem(index, 'price', parseFloat(e.target.value))}
                />
            </div>
            <div className="col-span-1">
                <Label className="mb-1">% Bonificación</Label>
                <Input 
                    type="number"
                    min={0}
                    step={0.01}
                    value={item.bonusPercentage}
                    onChange={(e) => updateItem(index, 'bonusPercentage', parseFloat(e.target.value))}
                />
            </div>
            <div className="col-span-1">
                <Label className="mb-1">Subtotal</Label>
                <Input 
                    type="number"
                    min={0}
                    step={0.01}
                    value={item.subtotal}
                    onChange={(e) => updateItem(index, 'subtotal', parseFloat(e.target.value))}
                />
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
        </form>
    )
};
