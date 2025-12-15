"use client";

import { IoAddOutline, IoTrashOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { IoCloseCircleOutline } from "react-icons/io5";

import { IBudget, IBudgetItem } from "@/interfaces/budget.interface";
import { createBudget, deleteBudgetImage } from "@/actions";
import { amnContactDetails } from "@/utils";
import { Button, Card, CardContent, CardHeader, CardTitle, Input, Label } from "@/components";
import { createInvoice } from "@/actions/invoice/create-invoice";

interface FormInputs {
    CantReg: number; // Cantidad de registros. EJ: 1
    PtoVta: number; // Punto de venta configurado en ARCA Ej: 1
    CbteTipo: number; // 6 = Factura B
    Concepto: number; // 1 = Productos
    DocTipo: number; // 99 = Consumidor Final
    DocNro: number; // 0 para Consumidor Final
    CbteDesde: number; // Número de comprobante (debe ser el próximo libre)
    CbteHasta: number;
    CbteFch: string; // Fecha del comprobante (YYYYMMDD) EJ: 20231015
    ImpTotal: number; // Importe Total de la factura EJ: 10000
    ImpTotConc: number; // Importe Neto no Gravado
    ImpNeto: number; // Importe Neto Gravado
    ImpOpEx: number; // Importe Exento
    ImpIVA: number; // Importe IVA
    ImpTrib: number; // Importe Tributos
    MonId: string; // "PES" Moneda
    MonCotiz: number; // Cotización

    Iva: [
        {
            Id: number; // 5 = 21%
            BaseImp: number; // Base Imponible
            Importe: number; // Importe del IVA
        }
    ]
};

export const ArcaInvoiceForm = () => {

    const { register, setValue, getValues, watch, handleSubmit, formState: { errors } } = useForm<FormInputs>({
        defaultValues: {
            CantReg: 1,
            PtoVta: 1,
            CbteTipo: 6,
            Concepto: 1,
            DocTipo: 99,
            DocNro: 0,
            CbteDesde: 0,
            CbteHasta: 0,
            CbteFch: '',
            ImpTotal: 0,
            ImpTotConc: 0,
            ImpNeto: 0,
            ImpOpEx: 0,
            ImpIVA: 0,
            ImpTrib: 0,
            MonId: 'PES',
            MonCotiz: 1,
            Iva: [
                {
                    Id: 5,
                    BaseImp: 100,
                    Importe: 21
                }
            ]
        }
    });

    // const addItem = () => {
    //     const items = getValues('BudgetItem') || [];
    //     const newId = items.length > 0 ? Math.max(...items.map(item => Number(item.id) || 0)) + 1 : 1;
    //     setValue('BudgetItem', [
    //         ...items,
    //         {
    //             id: newId,
    //             description: '',
    //             image: new DataTransfer().files, // Initialize as empty FileList
    //             quantity: 1,
    //             price: '0',
    //         }
    //     ]);
    // };

    // const removeItem = (index: number) => {
    //     const items = getValues('BudgetItem') || [];
    //     setValue('BudgetItem', items.filter((_, i) => i !== index));
    // };

    // watch('BudgetItem');

    const onSubmit = async (data: FormInputs) => {
        const formData = new FormData();

        formData.append('CantReg', data.CantReg.toString());
        formData.append('PtoVta', data.PtoVta.toString());
        formData.append('CbteTipo', data.CbteTipo.toString());
        formData.append('Concepto', data.Concepto.toString());
        formData.append('DocTipo', data.DocTipo.toString());
        formData.append('DocNro', data.DocNro.toString());
        formData.append('CbteDesde', data.CbteDesde.toString());
        formData.append('CbteHasta', data.CbteHasta.toString());
        formData.append('CbteFch', data.CbteFch);
        formData.append('ImpTotal', data.ImpTotal.toString());
        formData.append('ImpTotConc', data.ImpTotConc.toString());
        formData.append('ImpNeto', data.ImpNeto.toString());
        formData.append('ImpOpEx', data.ImpOpEx.toString());
        formData.append('ImpIVA', data.ImpIVA.toString());
        formData.append('ImpTrib', data.ImpTrib.toString());
        formData.append('MonId', data.MonId);
        formData.append('MonCotiz', data.MonCotiz.toString());
        data.Iva.forEach((ivaItem, index) => {
            formData.append(`Iva[${index}][Id]`, ivaItem.Id.toString());
            formData.append(`Iva[${index}][BaseImp]`, ivaItem.BaseImp.toString());
            formData.append(`Iva[${index}][Importe]`, ivaItem.Importe.toString());
        });

        // const {ok, message} = await createInvoice(formData);

        // if (!ok) {
        //     toast.error(message);
        //     return;
        // }

        // toast.success(message);
        const response = await createInvoice(  );
        console.log({response});
    };

    // const handleDeleteBudgetImage = async (image: string) => {
    //     const { ok, message } = await deleteBudgetImage(image);

    //     if (!ok) {
    //         toast.error(message);
    //         return;
    //     };

    //     toast.success("Imagen eliminada correctamente");
    // };

    return (
        <form className="space-y-6 fadeIn" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-end">
                <Button
                    className="w-fit mt-2 bg-secondary text-slate-200 hover:bg-secondary/80 disabled:cursor-not-allowed"
                >
                    Crear
                </Button>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Detalles de presupuesto</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-4">
                    <div className="w-fit">
                        <Label className="mb-0.5">Cantidad de registros</Label>
                        <Input
                            {...register("CantReg", { required: true })}
                        />
                        {errors.CantReg && <span className="text-red-600 text-sm">{errors.CantReg.message}</span>}
                    </div>
                    <div className="w-fit">
                        <Label className="mb-0.5">Punto de venta</Label>
                        <Input
                            {...register("PtoVta", { required: true })}
                        />
                        {errors.PtoVta && <span className="text-red-600 text-sm">{errors.PtoVta.message}</span>}
                    </div>
                    <div className="w-fit">
                        <Label className="mb-0.5">Tipo de comprobante</Label>
                        <Input
                            {...register("CbteTipo", { required: true })}
                        />
                        {errors.CbteTipo && <span className="text-red-600 text-sm">{errors.CbteTipo.message}</span>}
                    </div>
                    <div className="w-fit">
                        <Label className="mb-0.5">Concepto a incluir</Label>
                        <Input
                            {...register("Concepto", { required: true })}
                        />
                        {errors.Concepto && <span className="text-red-600 text-sm">{errors.Concepto.message}</span>}
                    </div>
                    <div className="w-fit">
                        <Label className="mb-0.5">Condicion frente al IVA</Label>
                        <Input
                            {...register("DocTipo", { required: true })}
                        />
                        {errors.DocTipo && <span className="text-red-600 text-sm">{errors.DocTipo.message}</span>}
                    </div>
                    <div className="w-fit">
                        <Label className="mb-0.5">Numero de documento</Label>
                        <Input
                            {...register("DocNro", { required: true })}
                        />
                        {errors.DocNro && <span className="text-red-600 text-sm">{errors.DocNro.message}</span>}
                    </div>
                    <p>Comprobantes asociados</p>
                    <div className="w-fit">
                        <Label className="mb-0.5">Numero de comprobantes (debe ser el proximo libre)</Label>
                        <Input
                            {...register("CbteDesde", { required: true })}
                        />
                        {errors.CbteDesde && <span className="text-red-600 text-sm">{errors.CbteDesde.message}</span>}
                    </div>
                    <div className="w-fit">
                        <Label className="mb-0.5">Comprobante hasta</Label>
                        <Input
                            {...register("CbteHasta", { required: true })}
                        />
                        {errors.CbteHasta && <span className="text-red-600 text-sm">{errors.CbteHasta.message}</span>}
                    </div>
                    <div className="w-fit">
                        <Label className="mb-0.5">Fecha del comprobante</Label>
                        <Input
                            type="date"
                            {...register("CbteFch", { required: true })}
                        />
                        {errors.CbteFch && <span className="text-red-600 text-sm">{errors.CbteFch.message}</span>}
                    </div>

                    <p> Importe </p>
                    <div className="w-fit">
                        <Label className="mb-0.5">Importe total</Label>
                        <Input
                            {...register("ImpTotal", { required: true })}
                        />
                        {errors.ImpTotal && <span className="text-red-600 text-sm">{errors.ImpTotal.message}</span>}
                    </div>
                    <div className="w-fit">
                        <Label className="mb-0.5">Importe Neto no Gravado</Label>
                        <Input
                            {...register("ImpTotConc", { required: true })}
                        />
                        {errors.ImpTotConc && <span className="text-red-600 text-sm">{errors.ImpTotConc.message}</span>}
                    </div>
                    <div className="w-fit">
                        <Label className="mb-0.5">Importe Neto Gravado</Label>
                        <Input
                            {...register("ImpNeto", { required: true })}
                        />
                        {errors.ImpNeto && <span className="text-red-600 text-sm">{errors.ImpNeto.message}</span>}
                    </div>
                    <div className="w-fit">
                        <Label className="mb-0.5">Importe Exento</Label>
                        <Input
                            {...register("ImpOpEx", { required: true })}
                        />
                        {errors.ImpOpEx && <span className="text-red-600 text-sm">{errors.ImpOpEx.message}</span>}
                    </div>
                    <div className="w-fit">
                        <Label className="mb-0.5">Importe IVA</Label>
                        <Input
                            {...register("ImpIVA", { required: true })}
                        />
                        {errors.ImpIVA && <span className="text-red-600 text-sm">{errors.ImpIVA.message}</span>}
                    </div>
                    <div className="w-fit">
                        <Label className="mb-0.5">Importe Tributos</Label>
                        <Input
                            {...register("ImpTrib", { required: true })}
                        />
                        {errors.ImpTrib && <span className="text-red-600 text-sm">{errors.ImpTrib.message}</span>}
                    </div>
                    <div className="w-fit">
                        <Label className="mb-0.5">Moneda</Label>
                        <Input
                            {...register("MonId", { required: true })}
                        />
                        {errors.MonId && <span className="text-red-600 text-sm">{errors.MonId.message}</span>}
                    </div>
                    <div className="w-fit">
                        <Label className="mb-0.5">Cotizacion</Label>
                        <Input
                            {...register("MonCotiz", { required: true })}
                        />
                        {errors.MonCotiz && <span className="text-red-600 text-sm">{errors.MonCotiz.message}</span>}
                    </div>
                    <div>
                        <Label className="mb-0.5">IVA</Label>
                        <div className="grid grid-cols-3 gap-2">
                            <div>
                                <Label className="mb-0.5">Id</Label>
                                <Input
                                    {...register("Iva.0.Id", { required: true })}
                                />
                                {errors.Iva?.[0]?.Id && <span className="text-red-600 text-sm">{errors.Iva?.[0]?.Id.message}</span>}
                            </div>
                            <div>
                                <Label className="mb-0.5">Base Imponible</Label>
                                <Input
                                    {...register("Iva.0.BaseImp", { required: true })}
                                />
                                {errors.Iva?.[0]?.BaseImp && <span className="text-red-600 text-sm">{errors.Iva?.[0]?.BaseImp.message}</span>}
                            </div>
                            <div>
                                <Label className="mb-0.5">Importe</Label>
                                <Input
                                    {...register("Iva.0.Importe", { required: true })}
                                />
                                {errors.Iva?.[0]?.Importe && <span className="text-red-600 text-sm">{errors.Iva?.[0]?.Importe.message}</span>}
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </form >
    )
}
