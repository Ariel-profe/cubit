export const revalidate = 0; // Disable revalidation for this page

import Link from 'next/link';
import { redirect } from 'next/navigation';

import { getPaginatedUsers } from '@/actions';
import { AdminBreadcrumb, Button, ContentLayout, Title, UsersTable } from '@/components';

export default async function UsersAdminPage() {

  const { ok, users = [] } = await getPaginatedUsers();

  if (!ok) {
    redirect("/auth/sign-in");
  };

  return (
    <ContentLayout title='Usuarios'>
      <AdminBreadcrumb title1='Panel' href1='/admin/dashboard' title2='Usuarios' />
      <Title
        from="top"
        split="word"
        blur={3}
        delay={0.2}
        duration={1.2}
      >
        Gestión de usuarios
      </Title>

      <div className='mt-5 flex justify-end'>
        <Button>
          <Link href="/admin/usuarios/new">Crear usuario</Link>
        </Button>
      </div>

      <UsersTable users={users} />
    </ContentLayout>
  );
}