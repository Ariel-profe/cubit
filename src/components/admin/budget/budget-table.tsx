"use client";

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { IoCloudDownloadOutline, IoEyeOffOutline, IoPencilSharp } from 'react-icons/io5';

import { IBudget } from '@/interfaces/budget.interface';
import { DeleteProduct } from '@/components/admin/handle-delete';
import { generatePDF } from '@/utils';

interface Props {
    budgets: IBudget[];
};

export const BudgetTable = ({ budgets }: Props) => {

    const {data: sessionData} = useSession();

    const columns: GridColDef[] = [
        { field: 'budgetNumber', headerName: 'N.º presupuesto', width: 250 },
        { field: 'date', headerName: 'Fecha', width: 200 },
        { field: 'clientName', headerName: 'Cliente', width: 200 },
        { field: 'items', headerName: 'Artículos', width: 100 },
        {
            field: 'check',
            headerName: 'Ver',
            renderCell: ({ row }: GridRenderCellParams) => {
                return (
                    <a href={`/admin/presupuestos/${row.id}`} target="_blank" rel="noreferrer" className='text-blue-600 underline flex items-center h-full' >
                        <IoEyeOffOutline size={20} />
                    </a>
                )
            }
        },
        {
            field: 'download',
            headerName: 'Descargar',
            renderCell: ({ row }: GridRenderCellParams) => {
                return (
                   <button 
                    className='text-violet-600 hover:text-violet-800 flex items-center justify-center h-full cursor-pointer'
                    onClick={() => generatePDF(budgets.find(b => b.id === row.id) as IBudget, sessionData?.user?.name)}
                   >
                     <IoCloudDownloadOutline size={20} />
                   </button>
                )
            }
        },
        {
            field: 'edit',
            headerName: 'Editar',
            renderCell: ({ row }: GridRenderCellParams) => {
                return (
                    <Link href={`/admin/presupuestos/${row.id}`} className="hover:underline text-blue-600 hover:text-blue-800 flex items-center h-full justify-center">
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
                    <DeleteProduct productId={row.id} model='budget' />
                )
            }
        },
    ];

    const rows = budgets.map(item => ({
        id: item.id,
        budgetNumber: item.budgetNumber,
        date: item.date,
        clientName: item.clientName,
        items: item.BudgetItem.length,
    }));

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
