
export const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('es-ar', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(value);
};