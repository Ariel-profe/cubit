/*
  Warnings:

  - Added the required column `userId` to the `Budget` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "BudgetItem" DROP CONSTRAINT "BudgetItem_budgetId_fkey";

-- AlterTable
ALTER TABLE "Budget" ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Budget" ADD CONSTRAINT "Budget_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BudgetItem" ADD CONSTRAINT "BudgetItem_budgetId_fkey" FOREIGN KEY ("budgetId") REFERENCES "Budget"("budgetNumber") ON DELETE RESTRICT ON UPDATE CASCADE;
