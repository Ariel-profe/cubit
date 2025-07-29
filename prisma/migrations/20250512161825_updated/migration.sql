/*
  Warnings:

  - You are about to drop the column `image` on the `Caddy` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Notebook` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Caddy" DROP COLUMN "image";

-- AlterTable
ALTER TABLE "Notebook" DROP COLUMN "image";
