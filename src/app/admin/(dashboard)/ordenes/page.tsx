export const revalidate = 0; // Disable revalidation for this page

import Link from 'next/link';
import { redirect } from 'next/navigation';
import { IoMailOutline, IoMailOpenOutline } from 'react-icons/io5';

import { getPaginatedOrders } from '@/actions';
import { AdminBreadcrumb, ContentLayout } from '@/components';

export default async function OrdersAdminPage() {

  const { ok, orders = [] } = await getPaginatedOrders();

  if (!ok) {
    redirect("/");
  };

  return (
    <ContentLayout title="Órdenes">
       <AdminBreadcrumb title1='Panel' href1='/admin/dashboard' title2='Órdenes' />
       
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
                CUIT
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-4 py-2 text-left">
                Teléfono
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
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap capitalize">
                    {order.OrderAddress?.cuit || 'No especificado'}
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap capitalize">
                    {order.OrderAddress?.phone || 'No especificado'}
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
    </ContentLayout>
  );
}