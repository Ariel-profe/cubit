/*
  Warnings:

  - You are about to drop the column `image` on the `BudgetItem` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "BudgetItem" DROP COLUMN "image";

-- AlterTable
ALTER TABLE "ProductImage" ADD COLUMN     "budgetItemId" INTEGER;

-- AddForeignKey
ALTER TABLE "ProductImage" ADD CONSTRAINT "ProductImage_budgetItemId_fkey" FOREIGN KEY ("budgetItemId") REFERENCES "BudgetItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;
