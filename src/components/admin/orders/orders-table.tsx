"use client";

import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';

import { IOrder } from '@/interfaces/order.interface';
import Link from 'next/link';
import { Order } from '@prisma/client';

interface Props {
    orders: Order[];
};

export const OrdersTable = ({ orders }: Props) => {

    //TODO: Add an onChange function for delivered and other order props based on OnChangeUserRule table

    const columns: GridColDef[] = [
        { field: 'id', headerName: '#ID', width: 150 },
        { field: 'email', headerName: 'Email', width: 250 },
        { field: 'name', headerName: 'Cliente', width: 300 },
        {
            field: 'isSentByEmail',
            headerName: 'Estado',
            renderCell: ({ row }: GridRenderCellParams) => {
                return row.isSentByEmail
                    ? <span>Enviada</span>
                    : <span>No enviada</span>
            },
            width: 100
        },
        { field: 'itemsInOrder', headerName: 'nº Productos', align: 'center', width: 100 },
        {
            field: 'check',
            headerName: 'Ver Orden',
            renderCell: ({ row }: GridRenderCellParams) => {
                return (
                    <a href={`/admin/ordenes/${row.id}`} target="_blank" rel="noreferrer" className='text-blue-600 underline' >
                        Ver orden
                    </a>
                )
            }
        },
        { field: 'createdAt', headerName: 'Creada en: ', width: 300 },
    ];

    const rows = orders.map(order => ({
        id: order.id,
        email: order.userId,
        name: order.userId,
        isSentByEmail: order.isSentByEmail,
        itemsInOrder: order.itemsInOrder,
        createdAt: order.createdAt,
    }));

return (
    <div className="grid fadeIn mt-20">
        <div className='container h-[650px] w-full'>
            <DataGrid
                rows={rows}
                columns={columns}
            />
        </div>
    </div>
)
}
