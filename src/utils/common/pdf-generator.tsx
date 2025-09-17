import { jsPDF } from "jspdf";

import { IBudget } from "@/interfaces/budget.interface";
import { formatDate } from "./format-date";

export const generatePDF = (budget: IBudget, userName: string | undefined) => {

    // Create a new PDF document
    const doc = new jsPDF();
    let y = 30;

    //Header
    doc.setFontSize(10);
    doc.addImage("/imgs/invoice/amn-logo.png", "PNG", 10, 10, 50, 20);
    doc.text("Tenemos el agrado de dirigirnos a usted con motivo de hacerle llegar esta cotización", 10, y + 7);
    doc.text("y así ofrecerle los artículos solicitados.", 10, y + 11);
    y += 10;
    //Title
    doc.setFontSize(20);
    doc.text("Presupuesto", 10, y + 20);
    doc.setFontSize(12);
    doc.text(`#${budget.budgetNumber}`, 150, y + 20);
    y += 20;

    // Date
    doc.text(`Fecha: ${formatDate(budget.date)}`, 150, y + 10);
    y += 20;

    //Company/Client
    doc.setFontSize(14)
    doc.text("Empresa", 20, y);
    doc.text("Cliente", 120, y);
    y += 8;

    doc.setFontSize(10)
    doc.text(budget.companyName, 20, y);
    doc.text(budget.clientName, 120, y);
    y += 6;
    doc.text(budget.companyEmail, 20, y);
    doc.text(budget.clientEmail, 120, y);
    y += 10;

    //Items header
    doc.setFontSize(10);
    doc.text("Descripción", 5, y);
    doc.text("Imagen", 100, y);
    doc.text("Cantidad", 140, y);
    doc.text("Precio", 160, y);
    y += 4;
    doc.line(10, y, 200, y); // Horizontal line
    y += 4;

    //Items
    budget.BudgetItem.forEach(item => {
        y += 5;
        doc.text(item.description, 5, y);
        doc.addImage(item.image, "WEBP", 100, y - 5, 30, 30);
        doc.text(item.quantity.toString(), 140, y);
        doc.text(`$${item.price}`, 160, y);
        y += 30; // Increased gap between items
    });

    // Signature
    {
        userName === 'admin' && 
            doc.addImage("/imgs/invoice/firma-dani.png", "SVG", 160, y + 70, 50, 20);
            doc.text("Daniela Amin", 180, y + 70);
            doc.text("Project Manager", 180, y + 76);
    }

    // Generate blob URL for preview
    // const pdfBlob = doc.output("blob");
    // return URL.createObjectURL(pdfBlob);

    doc.save(`presupuesto_${budget.clientName}_${budget.budgetNumber}.pdf`);
};

