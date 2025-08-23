"use client";

import { useState } from "react";

import { Input, Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue, Label, Checkbox, Card, CardContent, CardHeader, CardTitle, } from "@/components";

import { receiverData } from "@/utils";

export const EmissionData2 = () => {

    const [ivaCondition, setivaCondition] = useState<{ value: string; label: string }>({ value: "", label: "" });
    const [saleCondition, setsaleCondition] = useState<{ value: string; label: string }>({ value: "", label: "" });

    return (
        <Card>
            <CardHeader>
                <CardTitle>Datos del receptor (2 de 4)</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <div>
                        <Select
                            value={ivaCondition.value}
                            onValueChange={(value) => {
                                const condition = receiverData.ivaCondition.find(c => c.value === value);
                                if (condition) setivaCondition(condition);
                            }}
                            name="idIVAReceptor"
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Condicion frente al IVA" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="#" disabled>Seleccionar</SelectItem>
                                    {
                                        receiverData.ivaCondition.map((item) => (
                                            <SelectItem key={item.value} value={item.value}>
                                                {item.label}
                                            </SelectItem>
                                        ))
                                    }
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="mt-3 flex items-center gap-x-2">
                        <Select name="idTipoDocReceptor">
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Tipo y Nro. de documento" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="#" disabled>Seleccionar</SelectItem>
                                    {
                                        ivaCondition.value === "5"
                                            ? (
                                                receiverData.typeOfDocument.endConsumer.map((item) => (
                                                    <SelectItem key={item.value} value={item.value}>
                                                        {item.label}
                                                    </SelectItem>
                                                ))
                                            ) :
                                            ivaCondition.value === "8" || ivaCondition.value === "9"
                                                ? (
                                                    receiverData.typeOfDocument.foreignSupplierOrClient.map((item) => (
                                                        <SelectItem key={item.value} value={item.value}>
                                                            {item.label}
                                                        </SelectItem>
                                                    ))
                                                ) : (
                                                    <SelectItem value="80">
                                                        CUIT
                                                    </SelectItem>
                                                )
                                    }
                                </SelectGroup>
                            </SelectContent>
                        </Select>

                        <Input
                            type="text"
                            placeholder="Número de documento"
                            className="w-full"
                            name="nroDocReceptor"
                        />
                    </div>

                    <div className="mt-3 space-y-2">
                        <Input
                            type="text"
                            placeholder="A. y Nombre o Razón Social"
                            className="w-full"
                            name="razonSocialReceptor"
                            // TODO: implement fetching data from API
                        />

                        <Select name="domicilioReceptorCombo">
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Domicilio comercial" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="#" disabled>Seleccionar</SelectItem>
                                    {
                                        ["Bolivia 863", "60 Granaderos 15"].map((item) => (
                                            <SelectItem key={item} value={item}>
                                                {item}
                                            </SelectItem>
                                        ))
                                    }
                                </SelectGroup>
                            </SelectContent>
                        </Select>

                        <Input 
                            type="email"
                            placeholder="Email del receptor"
                            className="w-full"
                        />

                    </div>

                    <hr className="my-4" />

                    <div className="mt-3">
                        <h4 className="text-xs">Comprobantes asociados</h4>

                        <div className="flex items-center gap-x-2 mt-3">
                            <div>
                                <Label htmlFor="cuit" className="mb-1">Tipo de comprobante</Label>
                                <Input id="cuit" type="text" defaultValue="Remito R" />
                            </div>
                            <div>
                                <Label htmlFor="cuit" className="mb-1">Pto. Vta.</Label>
                                <Input id="cuit" type="text" />
                            </div>
                            <div>
                                <Label htmlFor="cuit" className="mb-1">Comprobante</Label>
                                <Input id="cuit" type="text" />
                            </div>
                            <div>
                                <Label htmlFor="cuit" className="mb-1">Fecha de emisión (opc)</Label>
                                <Input id="cuit" type="date" />
                            </div>

                        </div>
                    </div>
                </div>

                <div className="space-y-2 w-full">
                    <h4 className="text-xs">Condiciones de venta</h4>

                    {
                        receiverData.saleCondition.map((item) => (
                            <div key={item.value}>
                                <div className="flex items-center" key={item.value}>
                                    <Checkbox
                                        key={item.value}
                                        id={`saleCondition-${item.value}`}
                                        value={item.value}
                                        name={item.name}
                                        className="mb-2"
                                        checked={saleCondition.value === item.value}
                                        onCheckedChange={(checked) => {
                                            if (checked) {
                                                setsaleCondition({ value: item.value, label: item.label });
                                            } else {
                                                setsaleCondition({ value: "", label: "" });
                                            }
                                        }}
                                    >
                                        {item.label}
                                    </Checkbox>
                                    <Label htmlFor={`saleCondition-${item.value}`} className="ml-2">
                                        {item.label}
                                    </Label>
                                </div>
                                {
                                    saleCondition.value === "69" && saleCondition.value === item.value && (
                                        <div className="flex items-center gap-x-2 fadeIn">
                                            <Select
                                                value={saleCondition.value}
                                                onValueChange={(value) => {
                                                    const condition = receiverData.debitCard.find(c => c.value === value);
                                                    if (condition) setsaleCondition(condition);
                                                }}
                                            >
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Seleccionar tarjeta de débito" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectItem value="#" disabled>Seleccionar</SelectItem>
                                                        {
                                                            receiverData.debitCard.map((item) => (
                                                                <SelectItem key={item.value} value={item.value}>
                                                                    {item.label}
                                                                </SelectItem>
                                                            ))
                                                        }
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                            <Input
                                                type="number"
                                                min={0}
                                                placeholder="Número de tarjeta"
                                                className="w-full"
                                            />
                                        </div>
                                    )
                                }
                                {
                                    saleCondition.value === "68" && saleCondition.value === item.value && (
                                        <div className="flex items-center gap-x-2 fadeIn">
                                            <Select
                                                value={saleCondition.value}
                                                onValueChange={(value) => {
                                                    const condition = receiverData.creditCard.find(c => c.value === value);
                                                    if (condition) setsaleCondition(condition);
                                                }}
                                            >
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Seleccionar tarjeta de crédito" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectItem value="#" disabled>Seleccionar</SelectItem>
                                                        {
                                                            receiverData.creditCard.map((item) => (
                                                                <SelectItem key={item.value} value={item.value}>
                                                                    {item.label}
                                                                </SelectItem>
                                                            ))
                                                        }
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                            <Input
                                                type="number"
                                                min={0}
                                                placeholder="Número de tarjeta"
                                                className="w-full"
                                            />
                                        </div>
                                    )
                                }
                            </div>
                        ))
                    }
                </div>
            </CardContent>
        </Card>
    )
}
