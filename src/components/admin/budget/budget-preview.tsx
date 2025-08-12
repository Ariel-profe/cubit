"use client";

import { useState } from "react";
import { IoDownloadOutline } from "react-icons/io5";

import { useBudgetStore } from "@/store";
import { BudgetFooter, Button, Title, CardFooter, Card, CardContent, CardHeader, CardTitle } from '@/components';
import { formatCurrency, formatDate, generatePDF } from "@/utils";

interface Props {
  onBack: () => void;
};

export const BudgetPreview = ({ onBack }: Props) => {

  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const {budget} = useBudgetStore(state => state);

  const handleDownloadPDF = () => {
    const url = generatePDF(budget);
    setPdfUrl(url);
  };

  return (
    <section className="flex flex-col container mx-auto px-3 mt-10 lg:mt-20 bg-slate-950">
      <Title title="Vista previa del presupuesto" subtitle="Revise los detalles antes de descargar." />

      <div className="flex items-center justify-end gap-2 mt-2">
        <Button variant="outline" onClick={onBack}>
          Volver a la edición
        </Button>
        <Button onClick={handleDownloadPDF}>
          <IoDownloadOutline />
          Descargar PDF
        </Button>
      </div>

      {
        pdfUrl && (
          <div className="mt-4 border rounded overflow-hidden">
            <iframe src={pdfUrl} width="100%" height="600px" />
          </div>
        )
      }

      <Card className="mt-5 fadeIn">
        <div className="flex justify-center items-center">
          <img src="/imgs/invoice/amn-logo.png" alt="amn-logo" />
        </div>
        <CardHeader>
          <CardTitle className="text-sm">AMN tiene el agrado de dirigirse a usted con motivo de hacerle llegar esta cotización y así ofrecerle los artículos solicitados.</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Budget Header */}
          <p className="text-right w-full">
            Mendoza, {formatDate(budget.date)}
          </p>

          {/* From/To  */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <h4 className="text-lg font-semibold">
             De: 
            <span className="font-normal ml-1">
             {budget.companyName} | {" "}
             {budget.companyEmail}
            </span>
            </h4>

            <h4 className="text-lg font-semibold">
             Para: 
            <span className="font-normal ml-1">
             {budget.clientName} | {" "}
             {budget.clientEmail}
            </span>
            </h4>
          </div>

        <div className="overflow-scroll">
            {/* Invoice items */}
            <table className="min-w-full my-4">
              <thead>
                <tr className="border-b-2">
                  <th className="text-left">Descripción</th>
                  <th className="text-left">Imagen</th>
                  <th>Cantidad</th>
                  <th className="text-right">Precio</th>
                  <th className="text-right">Cuotas</th>
                  <th className="text-right">Precio de cuotas</th>
                </tr>
              </thead>

              <tbody>
                {
                  budget.items.map(item => (
                    <tr key={item.id} className="border-b py-2 text-sm lg:text-base">
                      <td>{item.description}</td>
                      <td>
                        <img 
                          src={item.image} 
                          alt={item.description} 
                          className="w-16 h-16 lg:w-32 lg:h-32 aspect-square object-cover" 

                        />
                      </td>
                      <td className="text-center">{item.quantity}</td>
                      <td className="text-right">
                        {typeof item.price === 'number' ? formatCurrency(item.price) : "$0.00"}
                      </td>
                      <td className="text-center">
                        {item.fee ?? ""}
                      </td>
                      <td className="text-right">
                        {typeof item.feePrice === 'number' ? formatCurrency(item.feePrice) : "$0.00"}
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
           </div>

          {/* Totals */}
          {/* <div className="flex justify-end">
            <div className="w-64 space-y-2">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>$10000</span>
              </div>
              <div className="flex justify-between">
                <span>Impuestos (10%)</span>
                <span>$10</span>
              </div>
              <div className="flex justify-between font-bold text-lg border-t pt-2 text-secondary">
                <span>Total:</span>
                <span>$10010</span>
              </div>
            </div>
          </div> */}
        </CardContent>
        <CardFooter>
          <BudgetFooter />
        </CardFooter>
      </Card>
    </section >
  )
}
