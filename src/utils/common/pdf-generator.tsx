
import { jsPDF } from "jspdf";

import { IBudgetData } from "@/interfaces/budget.interface";
import { formatDate } from "./format-date";

export const generatePDF = (budget: IBudgetData) => {
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
    doc.text("Imagen", 120, y);
    doc.text("Cantidad", 140, y);
    doc.text("Precio", 160, y);
    y += 4;
    doc.line(10, y, 200, y); // Horizontal line
    y += 4;

    //Items
    budget.items.forEach(item => {
        doc.text(item.description, 5, y + 5);
        doc.addImage(item.image, "PNG", 120, y, 20, 20);
        doc.text(item.quantity.toString(), 145, y + 5);
        doc.text(item.price, 160, y + 5);
        y += 10;
    });

    // Signature
    doc.addImage("/assets/firma-dani.png", "SVG", 10, y + 10, 50, 20);
    y += 30;

    // Generate blob URL for preview
    const pdfBlob = doc.output("blob");
    return URL.createObjectURL(pdfBlob);

    // doc.save(`presupuesto_${budget.clientName}_${budget.budgetNumber}.pdf`);
};

