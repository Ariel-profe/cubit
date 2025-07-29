/*
  Warnings:

  - The `usb` column on the `Notebook` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Notebook" DROP COLUMN "usb",
ADD COLUMN     "usb" TEXT[];
