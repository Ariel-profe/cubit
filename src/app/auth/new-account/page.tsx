import { titleFont } from '@/config/fonts';
import { RegisterForm } from '@/components/auth/register-form';

export default function RegisterPage() {
  return (
    <div className="flex flex-col pt-20 sm:pt-32">

      <h1 className={`${titleFont.className} text-4xl mb-5`}>Crear mi cuenta</h1>

      <RegisterForm />
    </div>
  );
}