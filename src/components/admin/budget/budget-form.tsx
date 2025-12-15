"use client";

import { IoAddOutline, IoTrashOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { IoCloseCircleOutline } from "react-icons/io5";

import { IBudget, IBudgetItem } from "@/interfaces/budget.interface";
import { createBudget, deleteBudgetImage } from "@/actions";
import { amnContactDetails } from "@/utils";
import { Button, Card, CardContent, CardHeader, CardTitle, Input, Label } from "@/components";

interface Props {
  budget: Partial<IBudget> & { BudgetItem?: IBudgetItem[] } | undefined;
};

interface FormInputs {
  budgetNumber: string;
  date: Date | string;
  companyName: string;
  companyEmail: string;
  clientName: string;
  clientEmail: string;
  createdAt?: Date | string;
  BudgetItem: {
    id: number;
    description: string;
    image: FileList | string | undefined;
    quantity: number | string;
    price: string;
  }[];
};

export const BudgetForm = ({ budget }: Props) => {  

  const { register, setValue, getValues, watch, handleSubmit, formState: { isValid } } = useForm<FormInputs>({
    defaultValues: {
      budgetNumber: budget?.budgetNumber || `PPTO-${Date.now()}`,
      date: budget?.date || new Date().toISOString().split("T")[0],
      companyName: budget?.companyName || amnContactDetails.companyName,
      companyEmail: budget?.companyEmail || amnContactDetails.companyEmail,
      clientName: budget?.clientName || '',
      clientEmail: budget?.clientEmail || '',
      BudgetItem: budget?.BudgetItem
        ? budget.BudgetItem.map(item => ({
          id: item.id,
          description: item.description || '',
          image: undefined, // File input can't be pre-filled
          quantity: item.quantity || 1,
          price: item.price?.toString() || '0',
        }))
        : [{
          id: 1,
          description: '',
          image: undefined,
          quantity: 1,
          price: '0',
        }]
    }
  });

  const addItem = () => {
    const items = getValues('BudgetItem') || [];
    const newId = items.length > 0 ? Math.max(...items.map(item => Number(item.id) || 0)) + 1 : 1;
    setValue('BudgetItem', [
      ...items,
      {
        id: newId,
        description: '',
        image: new DataTransfer().files, // Initialize as empty FileList
        quantity: 1,
        price: '0',
      }
    ]);
  };

  const removeItem = (index: number) => {
    const items = getValues('BudgetItem') || [];
    setValue('BudgetItem', items.filter((_, i) => i !== index));
  };

  watch('BudgetItem');

  const onSubmit = async (data: FormInputs) => {
    const formData = new FormData();

    if (budget?.id) {
      formData.append('id', budget.id ?? '');
    }

    formData.append('budgetNumber', data.budgetNumber);
    formData.append('date', data.date.toString());
    formData.append('companyName', data.companyName);
    formData.append('companyEmail', data.companyEmail);
    formData.append('clientName', data.clientName);
    formData.append('clientEmail', data.clientEmail);

    data.BudgetItem.forEach((item, index) => {
      formData.append(`BudgetItem[${index}][description]`, item.description);
      formData.append(`BudgetItem[${index}][quantity]`, item.quantity.toString());
      formData.append(`BudgetItem[${index}][price]`, item.price.toString());

      if (item.image) {
        for (let i = 0; i < item.image.length; i++) {
          formData.append(`BudgetItem[${index}][image]`, item.image[i]);
        }
      }
    });

    const { ok, message } = await createBudget(formData);

    if (!ok) {
      toast.error(message.toString());
      return;
    };

    toast.success(message.toString());
    window.location.href = '/admin/presupuestos';
  };

  const handleDeleteBudgetImage = async (image: string) => {
    const { ok, message } = await deleteBudgetImage(image);

    if (!ok) {
      toast.error(message);
      return;
    };

    toast.success("Imagen eliminada correctamente");
  };

  return (
    <form className="space-y-6 fadeIn" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-end">
        <Button
          className="w-fit mt-2 bg-secondary text-slate-200 hover:bg-secondary/80 disabled:cursor-not-allowed"
          disabled={!isValid}
        >
          {budget?.id ? "Actualizar" : "Crear"}
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Detalles de presupuesto</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4">
          <div className="w-fit">
            <Label htmlFor="budget-number" className="mb-0.5">Número de presupuesto</Label>
            <Input
              {...register("budgetNumber", { required: true })}
            />
          </div>
          <div className="w-fit">
            <Label htmlFor="budget-date" className="mb-0.5">Fecha</Label>
            <Input
              id="budget-date"
              type="date"
              {...register("date", { required: true })}
            />
          </div>
        </CardContent>
      </Card>
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
                {...register("companyName", { required: true })}
              />
            </div>
            <div>
              <Label htmlFor="companyEmail" className="mb-1">Email</Label>
              <Input
                {...register("companyEmail", { required: true })}
                type="email"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Información del Cliente</h3>
            <div>
              <Label htmlFor="clientName" className="mb-1">Nombre</Label>
              <Input
                {...register("clientName", { required: true })}
              />
            </div>
            <div>
              <Label htmlFor="clientEmail" className="mb-1">Email</Label>
              <Input
                type="email"
                {...register("clientEmail", { 
                  required: true,
                  pattern: {value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Email inválido"} 
                })}
              />
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex items-center justify-between">
          <CardTitle>Lista de Items</CardTitle>
          <Button onClick={addItem} size="sm" type="button">
            <IoAddOutline />
            Agregar Item
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="flex flex-col gap-2">
            {watch("BudgetItem") && watch("BudgetItem").map((item, index) => (
              <fieldset className="border border-slate-800 p-2 rounded fadeIn" key={item.id ?? index}>
                <legend className="text-xs text-slate-400">Opción {index + 1}:</legend>
                <div className="grid lg:grid-cols-12 gap-4 lg:gap-2 p-2">
                  <div className="lg:col-span-6">
                    <Label htmlFor={`description-${index}`} className="mb-0.5">
                      Descripción
                    </Label>
                    <Input
                      {...register(`BudgetItem.${index}.description` as const, { required: true })}
                    />
                  </div>
                  <div className="lg:col-span-2">
                    {
                      budget?.BudgetItem && budget.BudgetItem[index] && budget.BudgetItem[index].image && typeof budget.BudgetItem[index].image === 'string'
                        ? (
                          <div className="relative group">
                            <img 
                              src={budget.BudgetItem[index].image} 
                              alt="imagen producto" 
                              className="h-32"
                            />
                            <button
                              className="absolute top-1 right-1 bg-white text-destructive rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                              type="button"
                              onClick={() => handleDeleteBudgetImage(budget.BudgetItem![index].image!)}
                            >
                              <IoCloseCircleOutline size={30} />
                            </button>
                          </div>
                        )
                        : (
                          <>
                            <Label htmlFor={`image-${index}`} className="mb-0.5">
                              Imagen (.webp)
                            </Label>
                            <input
                              id={`images-${index}`}
                              type="file"
                              className="file:bg-secondary file:px-2 file:py-1 file:rounded file:text-slate-200 file:hover:bg-secondary/80 file:hover:text-white file:cursor-pointer"
                              accept="image/png, image/jpeg, image/avif, image/webp, image/jpg"
                              {...register(`BudgetItem.${index}.image` as const, { required: true })}
                            />
                          </>
                        )
                    }
                  </div>
                  <div className="col-span-1">
                    <Label htmlFor={`quantity-${index}`} className="mb-0.5">
                      Cantidad
                    </Label>
                    <Input
                      id={`quantity-${index}`}
                      type="number"
                      min={1}
                      {...register(`BudgetItem.${index}.quantity` as const, { required: true })}
                    />
                  </div>
                  <div className="col-span-2">
                    <Label htmlFor={`price-${index}`} className="mb-0.5">
                      Precio
                    </Label>
                    <Input
                      {...register(`BudgetItem.${index}.price` as const, { required: true })}
                    />
                  </div>
                  <div className="col-span-1 flex items-end">
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => removeItem(index)}
                      disabled={watch("BudgetItem").length <= 1}
                    >
                      <IoTrashOutline />
                    </Button>
                  </div>
                </div>
              </fieldset>
            ))}
          </ul>
        </CardContent>
      </Card >
    </form >
  )
}
