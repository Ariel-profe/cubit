import { LoginForm } from '@/components';
import { titleFont } from '@/config/fonts';

export default function LoginPage() {
  return (
    <div className="flex flex-col pt-20 sm:pt-32">

      <h1 className={`${titleFont.className} text-4xl mb-5`}>Iniciar sesión</h1>

      <LoginForm />
    </div>
  );
}