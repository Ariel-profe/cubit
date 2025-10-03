export const revalidate = 0; // Disable revalidation for this page

import Link from 'next/link';

import { getPaginatedProductsWithImages } from '@/actions';
import { Title, AdminBreadcrumb, Button, ProductsTable } from '@/components';

interface Props {
  searchParams: Promise<{ page?: string }>
};

export default async function VideoCardsAdminPage({ searchParams }: Props) {

  const page = (await searchParams).page ? parseInt((await searchParams).page!) : 1;

  const { products } = await getPaginatedProductsWithImages({ page, model: "videoCard" });

  return (
    <section className="flex flex-col container mx-auto px-3 mt-10 lg:mt-20 overflow-hidden">
      <AdminBreadcrumb title1="Administración" href1="/admin" title2="Productos" href2="/admin/productos" />
      <Title
        from="top"
        split="word"
        blur={3}
        delay={0.2}
        duration={1.2}
      >
        Gestión de placas de video
      </Title>

      <div className='mt-5 flex justify-end'>
        <Button>
          <Link href="/admin/productos/placas-de-video/new">Crear producto</Link>
        </Button>
      </div>

      {
        products.length === 0
          ? (
            <div className='flex justify-center items-center h-[calc(100vh_-_300px)]'>
              <p>No hay productos disponibles</p>
            </div>
          )
          : <ProductsTable products={products} />
      }
    </section>
  );
}