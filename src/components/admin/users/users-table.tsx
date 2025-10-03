"use client";

import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { toast } from 'react-toastify';

import { changeUserRole } from '@/actions';
import { IUser } from "@/interfaces";
import { HandleDelete } from '@/components';

interface Props {
    users: IUser[];
};

export const UsersTable = ({ users }: Props) => {

    const onChangeUserRole = async (userId: string, role: string) => {
        const { ok, message } = await changeUserRole(userId, role);

        if (!ok) {
            toast.error(message, { position: "bottom-right" });
            return;
        }

        toast.success(message, { position: "bottom-right" });
    };

    const columns: GridColDef[] = [
        { field: 'id', headerName: '#ID', width: 250 },
        { field: 'email', headerName: 'Email', width: 250 },
        { field: 'name', headerName: 'Nombre', width: 300 },
        { field: 'counterVisits', headerName: 'Visitas', width: 200 },
        {
            field: 'role', headerName: 'Rol', width: 150,
            renderCell: ({ row }) => {
                return (
                    <select
                            value={row.role}
                            onChange={e => onChangeUserRole(row.id, e.target.value)}
                            className='text-sm text-secondary w-32 p-2'
                          >
                            <option value="admin">Admin</option>
                            <option value="user">Usuario</option>
                            <option value="client">Cliente</option>
                          </select>
                )
            },
        },
        {
                    field: 'delete',
                    headerName: 'Eliminar',
                    renderCell: ({ row }: GridRenderCellParams) => {
                        return (
                            <HandleDelete id={row.id} model="user" />
                        )
                    }
                },
    ];

    const rows = users.map(user => ({
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        counterVisits: user.counterVisits
    }));

    return (
        <div className="grid fadeIn mt-10">
            <div className='container h-[650px] w-full'>
                <DataGrid
                    rows={rows}
                    columns={columns}
                />
            </div>
        </div>
    )
}
