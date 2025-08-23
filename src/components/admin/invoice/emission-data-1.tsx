"use client";

import { useState } from "react";

import { Input, Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue, Label, Checkbox, Card, CardContent, CardHeader, CardTitle, } from "@/components";

import { onicContactDetails } from "@/utils";

export const EmissionData1 = () => {

    const [foreignCurrency, setForeignCurrency] = useState(false);
    const [cancelForeignCurrency, setCancelForeignCurrency] = useState(false);
    const [conceptSelected, setConceptSelected] = useState<{ code: string, title: string, isService: boolean }>({} as { code: string, title: string, isService: boolean });

    return (
        <Card>
            <CardHeader>
                <CardTitle>Datos de emisión (1 de 4)</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="fc" className="mb-1">Fecha</Label>
                    <Input id="fc" name="fechaEmisionComprobante" type="date" />

                    <div className="gap-2 mt-5">
                        <div className="flex items-center gap-x-2" >
                            <Checkbox id="monedaextranjera" checked={foreignCurrency} onCheckedChange={() => setForeignCurrency(!foreignCurrency)} />
                            <Label htmlFor="monedaextranjera">Moneda extranjera</Label>
                        </div>

                        {foreignCurrency && (
                            <div className="fadeIn mt-3 bg-slate-50 p-2">
                                <div className="flex items-center gap-x-2 mt-3">
                                    <Checkbox id="cancelacionmonedaextranjera" checked={cancelForeignCurrency} onCheckedChange={() => setCancelForeignCurrency(!cancelForeignCurrency)} />
                                    <Label htmlFor="cancelacionmonedaextranjera">El pago se realiza en la misma moneda</Label>
                                </div>
                                <Label htmlFor="moneda" className="mb-1 mt-3">Moneda</Label>
                                <Select name="moneda">
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Seleccionar" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="DOL">Dólar estadounidense (USD)</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>

                                <Label htmlFor="tipoCambio" className="mb-1 mt-3">Tipo de cambio</Label>
                                {/* TODO: get tipoCambio */}
                                <Input id="tipoCambio" type="text" placeholder="1291.00" />
                            </div>
                        )
                        }
                    </div>

                    <hr className="my-4" />

                    <h4 className="text-xs mt-5">Actividades asociadas <span className="text-xs"> Obligatorio según régimen específico (vgr. Remito Electrónico Cárnico, etc.)</span> </h4>

                    <table>
                        <thead>
                            <tr>
                                <th>N°</th>
                                <th>Actividad</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>
                                    <Select name="actiAsociadaId">
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Seleccionar" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="#" disabled>Seleccionar</SelectItem>
                                                {onicContactDetails.activities.map((concept) => (
                                                    <SelectItem key={concept.code} value={concept.code}>{concept.title}</SelectItem>
                                                ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="space-y-2 w-full">
                    <Label className="mb-1">Conceptos a incluir</Label>
                    <Select
                        value={conceptSelected.code}
                        onValueChange={(value) => {
                            const concept = onicContactDetails.conceptsToInclude.find(c => c.code === value);
                            if (concept) setConceptSelected(concept);
                        }}
                        name="idConcepto"
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Seleccionar" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="#" disabled>Seleccionar</SelectItem>
                                {onicContactDetails.conceptsToInclude.map((concept) => (
                                    <SelectItem
                                        key={concept.code}
                                        value={concept.code}
                                    >
                                        {concept.title}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>

                    {
                        conceptSelected.isService && (
                            <div className="fadeIn mt-3 bg-slate-50 p-2">
                                <h4>Período facturado</h4>
                                <div>
                                    <Label htmlFor="periodoFacturadoDesde" className="mb-1">Desde</Label>
                                    <Input id="periodoFacturadoDesde" type="date" defaultValue={new Date().toISOString().split("T")[0]} />
                                </div>
                                <div>
                                    <Label htmlFor="periodoFacturadoHasta" className="mb-1">Hasta</Label>
                                    <Input id="periodoFacturadoHasta" type="date" defaultValue={new Date().toISOString().split("T")[0]} />
                                </div>
                                <div className="mt-3">
                                    <Label htmlFor="vencimientoPago" className="mb-1">Vto para el pago</Label>
                                    <Input id="vencimientoPago" type="date" defaultValue={new Date().toISOString().split("T")[0]} />
                                </div>
                            </div>

                        )
                    }

                    <h4 className="text-xs mt-5">Referencia comercial <span className="text-xs">(opcional)</span> </h4>

                    <Label htmlFor="refComEmisor" className="mb-1">Referencia #</Label>
                    <Input id="refComEmisor" type="text" />
                </div>
            </CardContent>
        </Card>
    )
}
