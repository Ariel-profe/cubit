import { redirect } from "next/navigation";

import { getDepartments, getUserAddress, getUserById } from "@/actions";
import { AddressForm, AdminBreadcrumb, Title } from "@/components";

interface Props {
  params: Promise<{ id: string }>
};

export default async function UserAdminPage({ params }: Props) {

  const id = (await params).id;
  const departments = await getDepartments();

  const {user, ok} = await getUserById(id);

  if (!ok && id !== 'new') {
    redirect("/admin/usuarios");
  };

  const title = id === 'new' ? "Crear usuario" : "Editar usuario";

  return (
    <section className="container mx-auto px-3 mt-10 lg:mt-20">
      <AdminBreadcrumb title1="Administración" href1="/admin" title2="Usuarios" href2="/admin/usuarios" title3={title}/>
       <Title
        from="top"
        split="word"
        blur={3}
        delay={0.2}
        duration={1.2}
      >
        {title}
      </Title>
      <AddressForm 
        departments={departments} 
        userStoredAddress={undefined} 
        newUser
      />
    </section>
  )
}
