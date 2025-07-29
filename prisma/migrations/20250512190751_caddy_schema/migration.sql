/*
  Warnings:

  - The `compatibility` column on the `Caddy` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `includes` column on the `Caddy` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Caddy" DROP COLUMN "compatibility",
ADD COLUMN     "compatibility" TEXT[],
DROP COLUMN "includes",
ADD COLUMN     "includes" TEXT[];
