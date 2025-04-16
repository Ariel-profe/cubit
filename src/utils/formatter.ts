export class Formatter {
    static currency(value: number, decimals = 2): string {
        return new Intl.NumberFormat('es-AR', {
            style: 'currency',
            currency: 'ars',
            maximumFractionDigits: decimals
        }).format(value)
    }
}