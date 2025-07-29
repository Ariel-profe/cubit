-- CreateEnum
CREATE TYPE "NotebookType" AS ENUM ('hogar', 'empresa', 'profesional', 'gamer');

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notebook" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "inStock" INTEGER NOT NULL,
    "price" INTEGER NOT NULL DEFAULT 0,
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "type" "NotebookType"[] DEFAULT ARRAY[]::"NotebookType"[],
    "model" TEXT NOT NULL,
    "upcEan" TEXT NOT NULL,
    "processor" TEXT NOT NULL,
    "memoryRam" TEXT NOT NULL,
    "graphicCard" TEXT NOT NULL,
    "storage1" TEXT NOT NULL,
    "storage2" TEXT NOT NULL,
    "screen" TEXT NOT NULL,
    "keypad" TEXT NOT NULL,
    "numKeypad" TEXT NOT NULL,
    "os" TEXT NOT NULL,
    "cardReader" TEXT NOT NULL,
    "webCam" TEXT NOT NULL,
    "usb" TEXT NOT NULL,
    "lan" TEXT NOT NULL,
    "wiFi" TEXT NOT NULL,
    "bluetooth" TEXT NOT NULL,
    "vga" TEXT NOT NULL,
    "hdmi" TEXT NOT NULL,
    "displayPort" TEXT NOT NULL,
    "weight" INTEGER NOT NULL,
    "warranty" TEXT NOT NULL DEFAULT 'si',
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "Notebook_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Caddy" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "brand" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "inStock" INTEGER NOT NULL,
    "price" INTEGER NOT NULL DEFAULT 0,
    "percentage" TEXT NOT NULL,
    "idManual" TEXT NOT NULL,
    "thickness" TEXT NOT NULL,
    "compatibility" TEXT NOT NULL,
    "includes" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "Caddy_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Notebook_code_key" ON "Notebook"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Notebook_slug_key" ON "Notebook"("slug");

-- CreateIndex
CREATE INDEX "Notebook_code_brand_idx" ON "Notebook"("code", "brand");

-- CreateIndex
CREATE UNIQUE INDEX "Caddy_code_key" ON "Caddy"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Caddy_slug_key" ON "Caddy"("slug");

-- CreateIndex
CREATE INDEX "Caddy_code_brand_idx" ON "Caddy"("code", "brand");

-- AddForeignKey
ALTER TABLE "Notebook" ADD CONSTRAINT "Notebook_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Caddy" ADD CONSTRAINT "Caddy_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
