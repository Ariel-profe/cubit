import { create } from "zustand";

import type { IBudgetData, IBudgetItem } from "@/interfaces/budget.interface";
import { initialBudgetData } from "@/utils/admin/budget/initial-budget-data";

interface State {
    budget: IBudgetData;

    // Methods
    addItem: () => void;
    updatedBudget: (updates: Partial<IBudgetData>) => void;
    removeItem: (index: number) => void;
    updateItem: (index: number, field: keyof IBudgetItem, value: string | number | File | null) => void;
};

export const useBudgetStore = create<State>()((set) => ({
    budget: initialBudgetData,

    // Methods
    updatedBudget: (updates: Partial<IBudgetData>) => set((state) => ({
        budget: { ...state.budget, ...updates }
    })),

    addItem: () => set((state) => ({
        budget: {
            ...state.budget,
            items: [
                ...state.budget.items,
                {
                    id: Date.now().toString(),
                    description: "",
                    image: "",
                    quantity: 1,
                    price: ""
                }
            ]
        }
    })),
    removeItem: (index: number) => set((state) => {
        if(state.budget.items.length > 1) {
            return {
                budget: {
                    ...state.budget,
                    items: state.budget.items.filter((_, idx) => idx !== index)
                },
                
            };
        }
        return state;
    }),
    updateItem: (index: number, field: keyof IBudgetItem, value: any) => set((state) => {
        const updatedItems = state.budget.items.map((item, idx) => {
            if (idx === index) {
                return { ...item, [field]: value };
            }
            return item;
        });
        return {
            budget: {
                ...state.budget,
                items: updatedItems
            }
        };
    })
}));
