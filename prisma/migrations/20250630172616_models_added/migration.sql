/*
  Warnings:

  - Made the column `idManual` on table `Caddy` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Caddy" ALTER COLUMN "idManual" SET NOT NULL;
