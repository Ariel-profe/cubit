import { getDepartments, getUserAddress } from '@/actions';
import { auth } from '@/auth.config';
import { AddressForm, Title } from '@/components';

export default async function AddressPage() {

  const departments = await getDepartments();

  const session = await auth();

  if(!session?.user){
    return (
      <h3 className='text-5xl'>Error 500 - No hay sesión de usuario</h3>
    )
  };

  const userAddress = await getUserAddress(session.user.id) ?? undefined;

  return (
    <section className="flex flex-col sm:justify-center sm:items-center container mx-auto px-3 mt-10 lg:mt-20">

      <div className="w-full flex flex-col justify-center text-left">

        <Title title="Información personal" subtitle="Coloca tus datos para generar el pedido" className='text-2xl md:text-4xl' />
        
        <AddressForm departments={departments} userStoredAddress={userAddress} />
      </div>
    </section>
  );
}