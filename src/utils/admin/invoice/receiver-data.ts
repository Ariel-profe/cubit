

export const receiverData = {
    ivaCondition: [
        { value: "1", label: "IVA Responsable Inscripto" },
        { value: "4", label: "IVA Sujeto Exento" },
        { value: "5", label: "Consumidor Final" },
        { value: "6", label: "Responsable Monotributo" },
        { value: "7", label: "Sujeto No Categorizado" },
        { value: "8", label: "Proveedor del exterior" },
        { value: "9", label: "Cliente del exterior" },
        { value: "10", label: "IVA Liberado - Ley N° 19.640" },
        { value: "13", label: "Monotributista Social" },
        { value: "14", label: "IVA No Alcanzado" },
        { value: "15", label: "Monotributista Trabajador Independiente Promovido" },
    ],
    typeOfDocument: 
        {
            endConsumer: [
                { value: "80", label: "CUIT" },
                { value: "86", label: "CUIL" },
                { value: "87", label: "CDI" },
                { value: "89", label: "LE" },
                { value: "90", label: "LC" },
                { value: "91", label: "CI Extranjera" },
                { value: "96", label: "DNI" },
                { value: "94", label: "Pasaporte" },
                { value: "00", label: "CI Policía Federal" },
                { value: "30", label: "Certificado de Migración" }
            ],
            foreignSupplierOrClient: [
                { value: "80", label: "CUIT" },
                { value: "91", label: "CI Extranjera" },
                { value: "94", label: "Pasaporte" },
                { value: "99", label: "Doc. (otro)" }
            ]
        }
    ,
    saleCondition: [
        {name: "formaDePago", value: "1", label: "Contado" },
        {name: "formaDePagoTarjeta", value: "69", label: "Tarjeta de Débito" },
        {name: "formaDePagoTarjeta", value: "68", label: "Tarjeta de Crédito" },
        {name: "formaDePago", value: "96", label: "Cuenta Corriente" },
        {name: "formaDePago", value: "97", label: "Cheque" },
        {name: "formaDePago", value: "91", label: "Transferencia Bancaria" },
        {name: "formaDePago", value: "99", label: "Otra" },
        {name: "formaDePago", value: "90", label: "Otros medios de pago electrónico" }
    ],
    debitCard: [
        { value: "1", label: "Maestro" },
        { value: "2", label: "Visa Electrón" },
        { value: "3", label: "Cabal 24 hs" },
        { value: "4", label: "Mastercard Débito" },
        { value: "99", label: "Otra" },
    ],
    creditCard: [
        { value: "1", label: "American Express" },
        { value: "2", label: "Visa" },
        { value: "3", label: "Mastercard" },
        { value: "4", label: "Credencial" },
        { value: "5", label: "Carta Franca" },
        { value: "6", label: "Cabal" },
        { value: "7", label: "Diners" },
        { value: "8", label: "Tarjeta Shopping" },
        { value: "9", label: "Tarjeta Naranja" },
        { value: "99", label: "Otra" }
    ],
};