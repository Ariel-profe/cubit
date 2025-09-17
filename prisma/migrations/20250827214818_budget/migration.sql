/*
  Warnings:

  - The primary key for the `BudgetItem` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `BudgetItem` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "BudgetItem" DROP CONSTRAINT "BudgetItem_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "BudgetItem_pkey" PRIMARY KEY ("id");
