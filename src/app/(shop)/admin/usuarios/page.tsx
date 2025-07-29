export const revalidate = 0; // Disable revalidation for this page

import { redirect } from 'next/navigation';

import { getPaginatedUsers } from '@/actions';
import { Title, UsersTable } from '@/components';

export default async function UsersAdminPage() {

  const { ok, users = [] } = await getPaginatedUsers();

  if (!ok) {
    redirect("/auth/login");
  };

  return (
    <section className="flex flex-col container mx-auto px-3 mt-10 lg:mt-20 overflow-hidden">
      <Title title="Administración de usuarios" subtitle='Base de datos' />

      <div className="md:my-10 overflow-scroll">
       <UsersTable users={users} />
        {/* TODO: Implementar paginacion */}
      </div>
    </section>
  );
}