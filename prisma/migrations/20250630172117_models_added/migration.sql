/*
  Warnings:

  - Made the column `createdAt` on table `Caddy` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `Caddy` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `Notebook` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `Notebook` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Caddy" ALTER COLUMN "createdAt" SET NOT NULL,
ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "Notebook" ALTER COLUMN "createdAt" SET NOT NULL,
ALTER COLUMN "updatedAt" SET NOT NULL;
