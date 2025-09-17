export const revalidate = 0; // Disable revalidation for this page

import { redirect } from 'next/navigation';

import { getPaginatedOrders } from '@/actions';
import { AdminBreadcrumb, ContentLayout, OrdersTable } from '@/components';

export default async function OrdersAdminPage() {

  const { ok, orders = [] } = await getPaginatedOrders();

  if (!ok) {
    redirect("/");
  };

  return (
    <ContentLayout title="Órdenes">
       <AdminBreadcrumb title1='Panel' href1='/admin/dashboard' title2='Órdenes' />
      {
        orders.length === 0
          ? (
            <div className='flex justify-center items-center h-[40vh]'>
              <p>No hay órdenes disponibles</p>
            </div>
          )
          : <OrdersTable orders={orders} />
      }
    </ContentLayout>
  );
}