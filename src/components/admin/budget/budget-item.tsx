import { IoTrashOutline } from "react-icons/io5";

import { Button, Input, Label } from "@/components";
import { IBudgetItem } from "@/interfaces/budget.interface";
import { useBudgetStore } from "@/store";

interface Props {
    item: IBudgetItem;
    index: number;
    canRemove: boolean;
};

export const BudgetItem = ({ item, index, canRemove }: Props) => {

  const {updateItem, removeItem } = useBudgetStore(state => state);

  const handleNumberChange = (value: string, field: keyof IBudgetItem) => {
    if(value === ""){
        updateItem(index, field, "");
    }else {
        const numValue = Number.parseInt(value);
        if(!isNaN(numValue) && numValue >= 0){
            updateItem(index, field, numValue);
        }
    }
  };

 const handleQuantityBlur = () => {
   if (item.quantity === "" || item.quantity === 0) {
       updateItem(index, "quantity", 1);
   }
 };

 const handleNumberBlur = (field: keyof IBudgetItem) => {
   if (item[field] === "" || isNaN(Number(item[field]))) {
       updateItem(index, field, 0);
   }
 };

    return (
        <fieldset className="border border-slate-800 p-2 rounded fadeIn">
            <legend className="text-xs text-slate-400">Opcion {index + 1}:</legend>
            <div className="grid lg:grid-cols-12 gap-4 lg:gap-2 p-2">
                <div className="lg:col-span-6">
                    <Label htmlFor={`description-${index}`} className="mb-0.5">
                        Descripción
                    </Label>
                    <Input 
                        id={`description-${index}`}
                        value={item.description}
                        onChange={ e => updateItem(index, "description", e.target.value )}
                    />
                </div>
                <div className="lg:col-span-2">
                    <Label htmlFor={`image-${index}`} className="mb-0.5">
                        Imagen
                    </Label>
                    <Input 
                        id={`image-${index}`}
                        type="file"
                        className="cursor-pointer"
                        onChange={e => {
                            const file = e.target.files?.[0] ?? null;
                            if (file) {
                                const imageUrl = URL.createObjectURL(file);
                                updateItem(index, "image", imageUrl);
                            } else {
                                updateItem(index, "image", null);
                            }
                        }}
                    />
                </div>
                <div className="col-span-1">
                    <Label htmlFor={`quantity-${index}`} className="mb-0.5">
                        Cantidad
                    </Label>
                    <Input 
                        id={`quantity-${index}`}
                        type="number"
                        min={1}
                        value={item.quantity}
                        onChange={ e => handleNumberChange(e.target.value, "quantity") }
                        onBlur={handleQuantityBlur}
                    />
                </div>
                <div className="col-span-2">
                    <Label htmlFor={`price-${index}`} className="mb-0.5">
                        Precio
                    </Label>
                    {/* <Input 
                        id={`price-${index}`}
                        type="number"
                        step={0.01}
                        min={0}
                        value={item.price}
                        onChange={ e => handleNumberChange(e.target.value, "price") }
                        onBlur={() => handleNumberBlur("price")}
                        className="bg-slate-800"
                    /> */}
                    <Input 
                        id={`price-${index}`}
                        value={item.price}
                        onChange={ e => updateItem(index, "price", e.target.value )}
                    />
                </div>
                <div className="col-span-1 flex items-end">
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
        </fieldset>
    )
}
