import type { IBudgetData } from "@/interfaces/budget.interface";
import { amnContactDetails } from "../invoice/contact-details";

export const initialBudgetData: IBudgetData = {
    budgetNumber: `PPTO-${Date.now()}`,
    date: new Date().toISOString().split("T")[0],
    companyName: amnContactDetails.companyName,
    companyEmail: amnContactDetails.companyEmail,
    clientName: "",
    clientEmail: "",
    items: [{
        id: "1",
        description: "",
        image: null,
        quantity: 1,
        price: 0,
        fee: 0,
        feePrice: 0
    }]
};