/*
  Warnings:

  - Made the column `model` on table `Backpack` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Backpack" ALTER COLUMN "model" SET NOT NULL;
