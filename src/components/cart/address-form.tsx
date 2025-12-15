"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { useAddressStore } from "@/store";
import { deleteUserAddress, setUserAddress } from "@/actions";
import { Button } from "@/components";
import type { IAddress, IDepartment } from "@/interfaces";
import { authClient } from "@/lib/auth-client";

interface Props {
    departments: IDepartment[];
    userStoredAddress?: Partial<IAddress>;
    newUser: boolean;
};

interface FormInputs {
    firstName: string;
    lastName: string;
    address: string;
    address2?: string;
    city: string;
    department: string;
    zipCode: string;
    phone: string;
    cuit: string;
    rememberAddress: boolean;
};

export const AddressForm = ({ departments, userStoredAddress = {}, newUser }: Props) => {

    const router = useRouter();

    const { handleSubmit, register, formState: { isValid }, reset } = useForm<FormInputs>({
        defaultValues: {
            //TODO: Leer de la base de datos
            ...(userStoredAddress as any),
            rememberAddress: false
        }
    });

    const { data: session } = authClient.useSession();

    const setAddress = useAddressStore(state => state.setAddress);
    const address = useAddressStore(state => state.address);

    useEffect(() => {
        if (address.firstName && !newUser) {
            reset(address);
        }
    }, [address.firstName])

    const onSubmit = async (data: FormInputs) => {

        const { rememberAddress, ...restAddress } = data;
        setAddress(restAddress);

        if (data.rememberAddress) {
            // Llamar al server action
            await setUserAddress(restAddress, session!.user.id)
        } else {
            await deleteUserAddress(session!.user.id)
        }

        router.push("/checkout");
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
            {/* Inputs */}
            <div className="grid grid-cols-1 gap-2 sm:gap-5 sm:grid-cols-2">
                <div className="flex flex-col mb-2">
                    <label htmlFor="firstName">Nombres</label>
                    <input
                        id="firstName"
                        type="text"
                        className="p-2 border rounded-md bg-slate-200 text-slate-800"
                        {...register("firstName", {
                            required: true
                        }
                        )}
                    />
                </div>

                <div className="flex flex-col mb-2">
                    <label htmlFor="lastName">Apellidos</label>
                    <input
                        id="lastName"
                        type="text"
                        className="p-2 border rounded-md bg-slate-200 text-slate-800"
                        {...register("lastName", {
                            required: true
                        }
                        )}
                    />
                </div>

                <div className="flex flex-col mb-2">
                    <label htmlFor="address">Dirección</label>
                    <input
                        id="address"
                        type="text"
                        className="p-2 border rounded-md bg-slate-200 text-slate-800"
                        {...register("address", {
                            required: true
                        }
                        )}
                    />
                </div>

                <div className="flex flex-col mb-2">
                    <label htmlFor="address2">Dirección 2 (opcional)</label>
                    <input
                        id="address2"
                        type="text"
                        className="p-2 border rounded-md bg-slate-200 text-slate-800"
                        {...register("address2")}
                    />
                </div>

                <div className="flex flex-col mb-2">
                    <label htmlFor="city">Provincia</label>
                    <input
                        id="city"
                        type="text"
                        className="p-2 border rounded-md bg-slate-200 text-slate-800"
                        {...register("city", {
                            required: true
                        }
                        )}
                        defaultValue={"Mendoza"}
                    />
                </div>

                <div className="flex flex-col mb-2">
                    <label htmlFor="department">Departamento</label>
                    <select
                        className="p-2 border rounded-md bg-slate-200 text-slate-800"
                        {...register("department", {
                            required: true
                        }
                        )}
                    >
                        <option value="">[ Seleccione ]</option>
                        {
                            departments.map(item => (
                                <option key={item.id} value={item.id}>{item.name}</option>
                            ))
                        }
                    </select>
                </div>

                <div className="flex flex-col mb-2">
                    <label htmlFor="zipCode">Código postal</label>
                    <input
                        id="zipCode"
                        type="text"
                        className="p-2 border rounded-md bg-slate-200 text-slate-800"
                        {...register("zipCode", {
                            required: true
                        }
                        )}
                    />
                </div>

                <div className="flex flex-col mb-2">
                    <label htmlFor="phone">Teléfono</label>
                    <input
                        id="phone"
                        type="text"
                        className="p-2 border rounded-md bg-slate-200 text-slate-800"
                        {...register("phone", {
                            required: true
                        }
                        )}
                    />
                </div>

                <div className="flex flex-col mb-2">
                    <label htmlFor="cuit">CUIT</label>
                    <input
                        id="cuit"
                        type="text"
                        className="p-2 border rounded-md bg-slate-200 text-slate-800"
                        {...register("cuit", {
                            required: true
                        }
                        )}
                    />
                </div>
            </div>

            <div className="flex flex-col my-2">
                {
                    !newUser && (
                        <div className="inline-flex items-center mb-5 gap-x-2 text-sm">
                            <label
                                className="relative flex cursor-pointer items-center rounded-full"
                                htmlFor="checkbox"
                            >
                                <input
                                    type="checkbox"
                                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-secondary checked:bg-secondary checked:before:bg-secondary hover:before:opacity-10"
                                    id="checkbox"
                                    {...register("rememberAddress")}
                                />
                                <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-3.5 w-3.5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeWidth="1"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </div>
                            </label>

                            <span>¿Deseas recordar estos datos?</span>
                        </div>
                    )
                }

                <Button variant='default' disabled={!isValid} className="w-lg">
                    Siguiente
                </Button>
            </div>
        </form>
    )
}
