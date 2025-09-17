export const revalidate = 0; // Disable revalidation for this page

import { getPaginatedBudgets } from '@/actions';
import { AdminBreadcrumb, BudgetTable, Button } from '@/components';
import Link from 'next/link';

interface Props {
  searchParams: Promise<{ page?: string }>
};

export default async function BudgetAdminPage({ searchParams }: Props) {

  const page = (await searchParams).page ? parseInt((await searchParams).page!) : 1;

  const { budgets } = await getPaginatedBudgets({ page });  

  return (
    <section className="flex flex-col container mx-auto px-3 mt-10 lg:mt-20 overflow-hidden">
      <AdminBreadcrumb title1="Administración" href1="/admin/dashboard" title2="Presupuestos" href2="/admin/presupuestos" />

      <div className='mt-5 flex justify-end'>
        <Button>
          <Link href="/admin/presupuestos/new">Crear Presupuesto</Link>
        </Button>
      </div>

      {
        budgets.length === 0
          ? (
            <div className='flex justify-center items-center h-[calc(100vh_-_300px)]'>
              <p>No hay presupuestos disponibles</p>
            </div>
          )
          : <BudgetTable budgets={budgets} />
      }
    </section>
  );
}