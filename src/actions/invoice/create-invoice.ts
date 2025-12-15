'use server'; // Indica que este código se ejecuta en el servidor

import { Arca } from "@arcasdk/core";
import fs from 'fs'; // Usa 'fs' para leer archivos en el servidor si es necesario

// Carga tus credenciales de forma segura (variables de entorno recomendadas)
const CERT_CONTENT = process.env.ARCA_CERT; // El contenido del certificado como string
const KEY_CONTENT = process.env.ARCA_KEY;   // El contenido de la clave como string

const arca = new Arca({
    cuit: 20323161845,
    cert: `-----BEGIN CERTIFICATE-----
MIIDRTCCAi2gAwIBAgIIDPKoCo2/e4gwDQYJKoZIhvcNAQENBQAwODEaMBgGA1UEAwwRQ29tcHV0
YWRvcmVzIFRlc3QxDTALBgNVBAoMBEFGSVAxCzAJBgNVBAYTAkFSMB4XDTI1MTIxNTE2MTIyNloX
DTI3MTIxNTE2MTIyNlowKzEOMAwGA1UEAwwFVGVzdDExGTAXBgNVBAUTEENVSVQgMjAzMjMxNjE4
NDUwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCmfld9CaTJAD9QZ3MJqgUjH35VaMs3
E51NmTyiLyujrbRWSOexh4xNDDVBS5InI8mBab9h7d1DGlK3spQrmM2rXejpF3f161DMN/mSP/X3
OQUWgAOFFro9F2M+ds2EJaoO0WDkSmyMsZLkPX5XZowAqhA2T2IEK0i8+4Zm02ZAHqk3kYcnDW6W
ALloKAJjV+jUurf8rtmTMkdehA2PVfiyEEnAtBeA8kc0wjbqbxV/cQMS6iTwODz490HmwAGFJeCb
1efTcuq84o77MyK3bDmghiO7Dl1L7z0zC5f3co+JsDYgQjqjtgs7BI6aIyJupynGPBMIFpAxzQcT
ZWmZl5zjAgMBAAGjYDBeMAwGA1UdEwEB/wQCMAAwHwYDVR0jBBgwFoAUs7LT//3put7eja8RIZzW
IH3yT28wHQYDVR0OBBYEFNhj/CYw7pmC0JtKNA+0K+UdqkixMA4GA1UdDwEB/wQEAwIF4DANBgkq
hkiG9w0BAQ0FAAOCAQEArn8dP2uIkJyx2J67rwlhYQ3rXbFM8wozZtJKRe99j7AYz6iAr9+5O8UM
gZduG2UV5nkgYSPfWwt6B4gd0hF8XnAN2XQPRQ/EfFRl+2THArU7yVaJ7AW+aoDsLtm3Rimeajsx
Fip6sHMmzNsTAqrb19FEzlg3RFM3n/fc7tY6SGHbwOiwhqSA8dm5jt57yM3Bz3i+N29cu05zKn7c
Sy1L+lisdji8mlbz/RHnyc7RkacMOYvJMvTe9UdtoqV3c41k9OLU79Bl9RTQmaKcRlb3njGKHOVO
6rcT/PZax12QHlmiA2RhibakqAWCwNKsBwDXBNHKEp+tqeAJzZK0xkxwtA==
-----END CERTIFICATE-----`,
    key: `-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCmfld9CaTJAD9Q
Z3MJqgUjH35VaMs3E51NmTyiLyujrbRWSOexh4xNDDVBS5InI8mBab9h7d1DGlK3
spQrmM2rXejpF3f161DMN/mSP/X3OQUWgAOFFro9F2M+ds2EJaoO0WDkSmyMsZLk
PX5XZowAqhA2T2IEK0i8+4Zm02ZAHqk3kYcnDW6WALloKAJjV+jUurf8rtmTMkde
hA2PVfiyEEnAtBeA8kc0wjbqbxV/cQMS6iTwODz490HmwAGFJeCb1efTcuq84o77
MyK3bDmghiO7Dl1L7z0zC5f3co+JsDYgQjqjtgs7BI6aIyJupynGPBMIFpAxzQcT
ZWmZl5zjAgMBAAECggEAJn6CmuHObDy25s+sTNk3C9pdusCab5cE4SqjVrpCRDtG
vUZo72ZwHWZLr9eZqJwBHH9HJQy6gifFZTyQPo47SzpQvgfTkBPCoBz3AoXwSCMy
VnPtnGlXUQWlyAzu0nVk3r0xQkck1ti9pjDDk9CdYQ/w5KWw+1bIoA0lk4OgGgW9
AjiU05WXI0qJ+J2EgWEZErImwMgc1aDae6oefCsCCTu4CA8ObLuNUTJzP04a0vnZ
40lBkpwyVgG7RHW5Gt16Pe5mtfco44csV6RZYR3pqq4BW3abEK2p/DQUM5RYh219
XS22qdvdCX+rNwxxm/+dNtNRIkxQRKIJ81wZ6rukXQKBgQDfxjIebyIShBm6xdLL
XBrtDloy2SpRWUmRe719z3J3DNiGa+LB4tl15oretTEGdAmFQCuOq/mlW6d2pDl4
sQKBcEE2uYB0e80YVQUOsQr0ADuGlCxsctYWBmCGDlUbf7Mbk7e4m0rSUlsgdqGE
yLe7EL9YVOH/6dvp+ukl/dtaFwKBgQC+eGZCVr/vnXfWs03SRvsemUoIqIIY6Pqx
d6+BgsEuVSG17/qgOHdPWIJVYdjy9JWxYlcbq8Wb195H7JKnzdFt/z8GF+nZFhOq
llImApcv8KHbyCUhoJS4NgS7ma7Qr6BAuocUuL31WTQouxOEe/TEhOfI1s/tkS88
G6Krg8kvFQKBgQDeTzRzb8zVwE8fcnCcf4BwiZWqdnzIHIAt/FSgrHr3MtfZk0zP
eeK4crT7095EnvrmWn3rW4bEdG3GPBisgo4OscrX5ypqjqOOzMgddF2BUsnQRVxs
0RlHAEbcZ1i93Pu/Jd2blQucLx1A/xovpIiDW3v88Tck2twTc6Y0jCJjOQKBgHfB
z9nqHWgVRCIUPtv1kTLeArSK7rGm2uj2bb0qbzgogreYGabfmfSjm97/VJ79tZkA
UfCuAeNIyRPD5TnoqMNWd1PneTrrLJZXSXNosZKM49gCcYZBJwDjxfoGWOoRYtsP
7JrUxWscGTV62ny0S2O8hNe8aKPgYyiR36ejhr05AoGAF6O8VBIfsJCtdD1hqy8+
ol7VQnbRfo6wI8OIAmbZndh8JJDej6xgVfqz2ODCn8m+y029fkcHzau/lFJ9JKwP
+OIZ5gQ6wndX2RArKXPalrQFuj2Pf340j3mYuVCr6v4TMc9UC4GL2HPvJ7j+RHiU
SS/gePzd1b9tYg2dPjPzleM=
-----END PRIVATE KEY-----`,
});

export async function createInvoice() {
    try {
        // Lógica para obtener el último número de comprobante, etc.
        // ...

        const result = await arca.electronicBillingService.createVoucher({

            CantReg: 1, // Cantidad de registros
            PtoVta: 1, // Punto de venta configurado en ARCA
            CbteTipo: 6, // 6 = Factura B
            Concepto: 1, // 1 = Productos
            DocTipo: 99, // 99 = Consumidor Final
            DocNro: 0, // 0 para Consumidor Final
            CbteDesde: 1, // Número de comprobante (debe ser el próximo libre)
            CbteHasta: 1,
            CbteFch: new Date().toISOString().split("T")[0].replace(/-/g, ''), // Fecha del comprobante (YYYYMMDD)
            ImpTotal: 121, // Importe Total
            ImpTotConc: 0, // Importe Neto no Gravado
            ImpNeto: 100, // Importe Neto Gravado
            ImpOpEx: 0, // Importe Exento
            ImpIVA: 21, // Importe IVA
            ImpTrib: 0, // Importe Tributos
            MonId: "PES", // Moneda
            MonCotiz: 1, // Cotización
            CondicionIVAReceptorId: 5, // 5 = Consumidor Final

            // Detalle de IVA (21%)
            Iva: [
                {
                    Id: 5, // 5 = 21%
                    BaseImp: 100,
                    Importe: 21,
                },
            ],
        });

        console.log(result);
        return { success: true, cae: result.cae };

    } catch (error) {
        console.error("Error al crear factura:", error);
        return { success: false, error: error };
    }
}
