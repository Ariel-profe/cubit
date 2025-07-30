import { IoDownloadOutline } from "react-icons/io5";

import { Button, Title } from "@/components";
import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/utils";

const items = [
  { id: 1, description: "Servicio de consultoría", quantity: 2, rate: 150, total: 300 },
  { id: 2, description: "Desarrollo de software", quantity: 1, rate: 500, total: 500 },
]

export const InvoicePreview = () => {
  return (
    <section className="flex flex-col container mx-auto px-3 mt-10 lg:mt-20 bg-slate-900">
      <Title title="Vista previa de la factura" subtitle="Revise los detalles de la factura antes de descargar." />

      <div className="flex items-center justify-end gap-2 mt-2">
        <Button variant="outline">
          Volver a la factura
        </Button>
        <Button>
          <IoDownloadOutline />
          Descargar PDF
        </Button>
      </div>

      <Card className="mt-5">
        <div className="flex justify-center items-center">
          <img src="/imgs/invoice/onic-logo.png" alt="onic-logo" />
        </div>
        <CardContent className="p-4">
          {/* Invoice Header */}
          <div className="flex justify-between items-center mb-2">
            <div>
              <h2 className="text-3xl font-bold mb-2">Factura</h2>
              <p>#123456</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Fecha: 01/01/2023</p>
            </div>
          </div>

          {/* From/To  */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <h3 className="text-lg font-semibold">De:</h3>
              <p>AMN Consultora Informatica</p>
              <p>amn@consultora.com</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Para:</h3>
              <p>Pedro Perez</p>
              <p>pedro@empresa.com</p>
            </div>
          </div>

          {/* Invoice items */}
          <table className="w-full my-6">
            <thead>
              <tr className="border-b-2">
                <th className="text-left">Descripción</th>
                <th>Cantidad</th>
                <th className="text-right">Impuestos</th>
                <th className="text-right">Total</th>
              </tr>
            </thead>
            <tbody>
              {
                items.map(item => (
                  <tr key={item.id} className="border-b">
                    <td className="py-2">{item.description}</td>
                    <td className="py-2 text-center">{item.quantity}</td>
                    <td className="py-2 text-right">
                      {
                        typeof item.rate === 'number'
                          ? formatCurrency(item.rate)
                          : "$" + 0.00
                      }
                    </td>
                    <td className="py-2 text-right">
                      {
                        typeof item.total === 'number'
                          ? formatCurrency(item.total)
                          : "$" + 0.00
                      }
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>

          {/* Totals */}
          <div className="flex justify-end">
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

          </div>
        </CardContent>
      </Card>
    </section >
  )
}
