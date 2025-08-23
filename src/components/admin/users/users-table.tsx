"use client";

import { changeUserRole } from "@/actions";
import { IUser } from "@/interfaces";
import { toast } from "react-toastify";

interface Props {
    users: IUser[];
};

export const UsersTable = ({ users }: Props) => {

    const onChangeUserRole = async (userId: string, role: string) => {
        const { ok, message } = await changeUserRole(userId, role);

        if (!ok) {
            toast.error(message, {position: "bottom-right"});
            return;
        }

        toast.success(message, {position: "bottom-right"});
    };

    return (
        <table className="min-w-full">
            <thead className="bg-gray-200 border-b">
                <tr>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-4 py-2 text-left">
                        #ID
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-4 py-2 text-left">
                        Imagen
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-4 py-2 text-left">
                        Email
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-4 py-2 text-left">
                        Nombre completo
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-4 py-2 text-left">
                        Rol
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user => (
                        <tr key={user.id} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                            <td className="px-6 py-4 whitespace-nowrap text-sm max-w-28 font-medium text-gray-900">{user.id.split('-').at(-1)}</td>
                            <td className="text-sm text-gray-900 font-light max-w-14 px-2 py-4 whitespace-nowrap capitalize">
                                <img src={user?.image || '/imgs/common/user-not-image.avif'} alt={`imagen-${user.name}`} className="h-12 w-12 aspect-square" />
                            </td>
                            <td className="text-sm text-quaternary px-6 py-4 whitespace-nowrap">
                                {user.email}
                            </td>
                            <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap capitalize">
                                {user.name}
                            </td>
                            <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap capitalize">
                                <select
                                    name=""
                                    id=""
                                    className="text-sm text-blue-600 w-32 sm:w-40 p-2"
                                    value={user.role}
                                    onChange={e => onChangeUserRole(user.id, e.target.value)}
                                // TODO: Implementar Toast para mostrar el cambio de rol

                                >
                                    <option value="user">Usuario</option>
                                    <option value="client">Cliente</option>
                                    <option value="admin">Administrador</option>
                                </select>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
