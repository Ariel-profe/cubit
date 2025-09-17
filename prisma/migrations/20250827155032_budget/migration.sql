/*
  Warnings:

  - You are about to drop the column `email` on the `Budget` table. All the data in the column will be lost.
  - You are about to drop the column `message` on the `Budget` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `Budget` table. All the data in the column will be lost.
  - Added the required column `image` to the `BudgetItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Budget" DROP COLUMN "email",
DROP COLUMN "message",
DROP COLUMN "phone";

-- AlterTable
ALTER TABLE "BudgetItem" ADD COLUMN     "image" TEXT NOT NULL;
