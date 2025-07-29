export const revalidate = 0; // Disable revalidation for this page

import Link from 'next/link';
import { IoMailOutline, IoMailOpenOutline } from 'react-icons/io5';

import { Title } from '@/components';
import { getOrdersByUser } from '@/actions';
import { redirect } from 'next/navigation';

export default async function OrdersPage() {

  const { ok, orders = [] } = await getOrdersByUser();

  if (!ok) {
    redirect("/auth/login");
  };

  return (
    <section className="flex flex-col container mx-auto px-3 mt-10 lg:mt-20 overflow-hidden">
      <Title title="Órdenes" subtitle='Aquí están tus pedidos solicitados' />

      <div className="md:my-10 overflow-scroll">
        <table className="min-w-full">
          <thead className="bg-gray-200 border-b">
            <tr>
              <th scope="col" className="text-sm font-medium text-gray-900 px-4 py-2 text-left">
                #ID
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-4 py-2 text-left">
                Nombre completo
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-4 py-2 text-left">
                Estado
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-4 py-2 text-left">
                Opciones
              </th>
            </tr>
          </thead>
          <tbody>

            {
              orders.map(order => (
                <tr key={order.id} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id.split('-').at(-1)}</td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap capitalize">
                    {order.OrderAddress?.firstName} {order.OrderAddress?.lastName}
                  </td>
                  <td className="flex items-center text-sm  text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {order.isSentByEmail
                      ? (
                        <>
                          <IoMailOpenOutline className="text-green-800" />
                          <span className='mx-2 text-green-800'>Enviada</span>
                        </>
                      ) : (
                        <>
                          <IoMailOutline className="text-red-600" />
                          <span className='mx-2 text-red-600'>No enviada</span>
                        </>
                      )
                    }
                  </td>
                  <td className="text-sm text-blue-600 font-light px-6 ">
                    <Link href={`/orders/${order.id}`} className="hover:underline">
                      Ver orden
                    </Link>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
        {/* TODO: Implementar paginacion */}
      </div>
    </section>
  );
}