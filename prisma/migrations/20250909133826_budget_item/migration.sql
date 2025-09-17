/*
  Warnings:

  - You are about to drop the column `budgetItemId` on the `ProductImage` table. All the data in the column will be lost.
  - Added the required column `image` to the `BudgetItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ProductImage" DROP CONSTRAINT "ProductImage_budgetItemId_fkey";

-- AlterTable
ALTER TABLE "BudgetItem" ADD COLUMN     "image" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ProductImage" DROP COLUMN "budgetItemId";
