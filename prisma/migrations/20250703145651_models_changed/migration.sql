/*
  Warnings:

  - Added the required column `model` to the `Mouse` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Mouse" ADD COLUMN     "model" TEXT NOT NULL;
