import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
    address: {
        firstName: string;
        lastName: string;
        address: string;
        address2?: string;
        zipCode: string;
        city: string;
        department: string;
        phone: string;
        cuit: string;
    },

    // Methods
    setAddress: (address: State['address']) => void;
};

export const useAddressStore = create<State>()(

    persist(
        (set, get) => ({
            address: {
                firstName: '',
                lastName: '',
                address: '',
                address2: '',
                zipCode: '',
                city: '',
                department: '',
                phone: '',
                cuit: '',
            },
            setAddress: (address) => {
                set({ address })
            }
        }),
        {
            name: 'address-storage'
        }
    )
);