"use client";

import Link from 'next/link';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { IoPencilSharp } from 'react-icons/io5';

import { HandleDelete } from '@/components/admin/handle-delete';
import { ProductImage } from '@/components/product/product-image';
import { categoriesDictionary } from '@/utils';

interface Props {
    products: any[];
};

export const ProductsTable = ({ products }: Props) => {

    const columns: GridColDef[] = [
        {
            field: 'image', headerName: 'Imagen', width: 100,
            renderCell: ({ row }: GridRenderCellParams) => {
                return (
                    <a href={`/productos/auriculares/${row.slug}`} target='_blank' rel='noreferrer'>
                        <ProductImage src={row.image} alt={row.title} className='w-14 h-14 object-contain' />
                    </a>
                )
            }
        },
        { field: 'title', headerName: 'Nombre', width: 300 },
        { field: 'brand', headerName: 'Marca', width: 200 },
        { field: 'code', headerName: 'Código', width: 200 },
        { field: 'price', headerName: 'Precio', width: 100 },
        { field: 'stock', headerName: 'Stock', width: 100 },
        {
            field: 'edit',
            headerName: 'Editar',
            renderCell: ({ row }: GridRenderCellParams) => {
                return (
                    <Link href={`/admin/productos/${categoriesDictionary[row.category]}/${row.slug}`} className="hover:underline text-blue-600 hover:text-blue-800 flex items-center h-full justify-center">
                        <IoPencilSharp size={20} />
                    </Link>
                )
            }
        },
        {
            field: 'delete',
            headerName: 'Eliminar',
            renderCell: ({ row }: GridRenderCellParams) => {
                return (
                    <HandleDelete id={row.id} model={row.category} />
                )
            }
        },
    ];

    const rows = products.map(item => ({
        id: item.id,
        title: item.title,
        slug: item.slug,
        brand: item.brand,
        category: item.category,
        code: item.code,
        image: item.images[0],
        price: item.price,
        stock: item.inStock,
    }));

    console.log({ products });


    return (
        <div className="grid fadeIn mt-10">
            <div className='container h-[650px] w-full'>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    showToolbar
                />
            </div>
        </div>
    )
}
