export const revalidate = 0; // Disable revalidation for this page

import Link from 'next/link';
import { IoPencilSharp } from 'react-icons/io5';

import { getPaginatedProductsWithImages } from '@/actions';
import { Pagination, ProductImage, Title, DeleteProduct, AdminBreadcrumb } from '@/components';
import { formatCurrency, categoriesDictionary } from '@/utils';

interface Props {
  searchParams: Promise<{ page?: string }>
};

interface IProduct {
  id: string;
  title: string;
  slug: string;
  type: string;
  price: number;
  inStock: number;
  ProductImage: { url: string }[];
  category: string;
};

export default async function CoolerPadsAdminPage({ searchParams }: Props) {

  const page = (await searchParams).page ? parseInt((await searchParams).page!) : 1;

  const { products, currentPage, totalPages } = await getPaginatedProductsWithImages({ page, model: "coolerpad" });

  return (
    <section className="flex flex-col container mx-auto px-3 mt-10 lg:mt-20 overflow-hidden">
      <AdminBreadcrumb title1="Administración" href1="/admin" title2="Productos" href2="/admin/productos" />
      <Title title="Cooler Pads" subtitle='Administración de base de datos' />

      <div className='flex justify-end mb-5'>
        <Link href="/admin/productos/cooler-pads/new" className="text-slate-200 fon-bold bg-secondary p-2 rounded md:hover:text-white md:hover:bg-secondary/80 transition-colors">Crear producto</Link>
      </div>

      <div className="md:my-10 overflow-scroll">
        <table className="min-w-full">
          <thead className="bg-gray-200 border-b">
            <tr>
              <th scope="col" className="text-sm font-medium text-gray-900 px-4 py-2 text-left">
                Imagen
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-4 py-2 text-left">
                Título
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-4 py-2 text-left">
                Tipo
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-4 py-2 text-left">
                Precio
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-4 py-2 text-left">
                Stock
              </th>
              <th scope="col" className="text-sm font-medium text-blue-600 px-4 py-2 text-left">
                Editar
              </th>
              <th scope="col" className="text-sm font-medium text-red-600 px-4 py-2 text-left">
                Eliminar
              </th>
            </tr>
          </thead>
          <tbody>

            {
              products.map((product: IProduct) => (
                <tr key={product.id} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                  <td className="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap capitalize">
                    <Link href={`/productos/${categoriesDictionary[product.category]}/${product.slug}`}>
                      <ProductImage
                        alt={`Imagen de ${product.title}`}
                        src={product.ProductImage[0]?.url}
                        className='w-16 h-16 object-contain aspect-square'
                      />
                    </Link>
                  </td>
                  <td className="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap capitalize">
                    {product.title}
                  </td>
                  <td className="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap capitalize">
                    {product.type}
                  </td>
                  <td className="text-sm text-gray-900 font-bold px-4 py-2 whitespace-nowrap capitalize">
                    {formatCurrency(product.price)}
                  </td>
                  <td className="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                    {product.inStock}
                  </td>
                  <td className="px-4">
                    <Link href={`/admin/productos/${categoriesDictionary[product.category]}/${product.slug}`} className="hover:underline text-blue-600 hover:text-blue-800 ">
                      <IoPencilSharp size={20} />
                    </Link>
                  </td>
                  <td className="px-4">
                    <DeleteProduct productId={product.id} model='coolerpad' />
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>

      </div>
      <Pagination totalPages={totalPages} />
    </section>
  );
}