-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "status" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "status" BOOLEAN NOT NULL DEFAULT true;
