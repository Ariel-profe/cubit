export const revalidate = 0; // Disable revalidation for this page

import { redirect } from 'next/navigation';

import { getPaginatedUsers } from '@/actions';
import { AdminBreadcrumb, ContentLayout, UsersTable } from '@/components';

export default async function UsersAdminPage() {

  const { ok, users = [] } = await getPaginatedUsers();

  if (!ok) {
    redirect("/auth/login");
  };

  return (
    <ContentLayout title='Usuarios'>
      <AdminBreadcrumb title1='Panel' href1='/admin/dashboard' title2='Usuarios' />

      <UsersTable users={users} />
    </ContentLayout>
  );
}