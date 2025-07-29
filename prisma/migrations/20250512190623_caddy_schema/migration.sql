/*
  Warnings:

  - You are about to drop the column `idManual` on the `Caddy` table. All the data in the column will be lost.
  - You are about to drop the column `percentage` on the `Caddy` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Caddy" DROP COLUMN "idManual",
DROP COLUMN "percentage";
