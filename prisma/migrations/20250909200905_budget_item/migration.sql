/*
  Warnings:

  - You are about to drop the `BudgetItem` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `items` to the `Budget` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "BudgetItem" DROP CONSTRAINT "BudgetItem_budgetId_fkey";

-- AlterTable
ALTER TABLE "Budget" ADD COLUMN     "items" JSONB NOT NULL;

-- DropTable
DROP TABLE "BudgetItem";
