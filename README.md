# Descripción



## Correr en modo desarrollo

1. Clonar el repositorio.
2. Crear una copia del archivo **.env.template** y renombrarlo a **.env** y cambiar las variables de entorno.
3. Instalar dependencias `npm install`
4. Levantar la base de datos `docker compose up -d`
5. Correr las migraciones de Prisma `npx prisma migrate dev`
6. Ejecutar el seed `npm run seed`
7. Limpiar LocalStorage y Cookies del navegador
8. Levantar el proyecto `npm run dev`

### Modulo de facturacion

1. Instalar OpenSSL y generar las variables de entorno en el sistema.
2. Generar una solicitud de certificado (CSR) con el comando `openssl genrsa -out MiClavePrivada.key 2048` dentro de una carpeta del sistema.
3. Genera el archivo CSR `openssl req -new -key MiClavePrivada.key -subj "/C=AR/O=onic/CN=TestSystem/serialNumber=CUIT 20323161845" -out TestSystem.csr`


## Correr en modo producción
