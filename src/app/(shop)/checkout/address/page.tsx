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
        <Title
          from="top"
          split="word"
          blur={3}
          delay={0.2}
          duration={1.2}
        >
          Dirección e información de envío
        </Title>
        <p className="text-sm text-slate-400 mb-5">Completa tus datos para continuar con el pedido</p>
        
        <AddressForm 
          departments={departments} 
          userStoredAddress={userAddress}
          newUser={false}
        />
      </div>
    </section>
  );
}