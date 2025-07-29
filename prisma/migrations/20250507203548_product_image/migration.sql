/*
  Warnings:

  - Added the required column `image` to the `Caddy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Notebook` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Caddy" ADD COLUMN     "image" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Notebook" ADD COLUMN     "image" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "ProductImage" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "notebookId" TEXT,
    "caddyId" TEXT,

    CONSTRAINT "ProductImage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProductImage" ADD CONSTRAINT "ProductImage_notebookId_fkey" FOREIGN KEY ("notebookId") REFERENCES "Notebook"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductImage" ADD CONSTRAINT "ProductImage_caddyId_fkey" FOREIGN KEY ("caddyId") REFERENCES "Caddy"("id") ON DELETE SET NULL ON UPDATE CASCADE;
