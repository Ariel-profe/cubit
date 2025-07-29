-- AlterTable
ALTER TABLE "Caddy" ADD COLUMN     "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Notebook" ADD COLUMN     "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "OrderItem" ADD COLUMN     "backpackId" TEXT,
ADD COLUMN     "carryId" TEXT,
ADD COLUMN     "coolerpadId" TEXT,
ADD COLUMN     "coverId" TEXT,
ADD COLUMN     "dockingId" TEXT,
ADD COLUMN     "hddId" TEXT,
ADD COLUMN     "headphoneId" TEXT,
ADD COLUMN     "mouseId" TEXT,
ADD COLUMN     "networkCardId" TEXT,
ADD COLUMN     "padId" TEXT,
ADD COLUMN     "ramId" TEXT,
ADD COLUMN     "sourceId" TEXT,
ADD COLUMN     "ssdId" TEXT,
ADD COLUMN     "supportId" TEXT,
ADD COLUMN     "videoCardId" TEXT;

-- AlterTable
ALTER TABLE "ProductImage" ADD COLUMN     "backpackId" TEXT,
ADD COLUMN     "carryId" TEXT,
ADD COLUMN     "coolerpadId" TEXT,
ADD COLUMN     "coverId" TEXT,
ADD COLUMN     "dockingId" TEXT,
ADD COLUMN     "hddId" TEXT,
ADD COLUMN     "headphoneId" TEXT,
ADD COLUMN     "mouseId" TEXT,
ADD COLUMN     "networkCardId" TEXT,
ADD COLUMN     "padId" TEXT,
ADD COLUMN     "ramId" TEXT,
ADD COLUMN     "sourceId" TEXT,
ADD COLUMN     "ssdId" TEXT,
ADD COLUMN     "supportId" TEXT,
ADD COLUMN     "videoCardId" TEXT;

-- CreateTable
CREATE TABLE "Backpack" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "price" INTEGER NOT NULL DEFAULT 0,
    "inStock" INTEGER NOT NULL,
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "materials" TEXT[],
    "color" TEXT NOT NULL,
    "idManual" TEXT NOT NULL,
    "compartments" INTEGER NOT NULL,
    "lateralPockets" INTEGER NOT NULL,
    "superiorPockets" INTEGER NOT NULL,
    "frontPockets" INTEGER NOT NULL,
    "notebookCompartment" BOOLEAN NOT NULL,
    "notebookSize" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "Backpack_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Carry" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "price" INTEGER NOT NULL DEFAULT 0,
    "inStock" INTEGER NOT NULL,
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "idManual" TEXT NOT NULL,
    "material" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "connectionType" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "Carry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Coolerpad" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "price" INTEGER NOT NULL DEFAULT 0,
    "inStock" INTEGER NOT NULL,
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "idManual" TEXT NOT NULL,
    "heightLevel" INTEGER NOT NULL,
    "fan" INTEGER NOT NULL,
    "usbPorts" INTEGER NOT NULL,
    "rgbLighting" BOOLEAN NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "Coolerpad_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cover" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "price" INTEGER NOT NULL DEFAULT 0,
    "inStock" INTEGER NOT NULL,
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "idManual" TEXT NOT NULL,
    "notebookSize" TEXT NOT NULL,
    "stamp" TEXT NOT NULL,
    "materials" TEXT[],
    "colors" TEXT[],
    "otherFeatures" TEXT[],
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "Cover_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Docking" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "price" INTEGER NOT NULL DEFAULT 0,
    "inStock" INTEGER NOT NULL,
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "idManual" TEXT NOT NULL,
    "compatibility" TEXT[],
    "connectionType" TEXT[],
    "usbVersion" TEXT[],
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "Docking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hdd" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "price" INTEGER NOT NULL DEFAULT 0,
    "inStock" INTEGER NOT NULL,
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "idManual" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "format" TEXT NOT NULL,
    "capacity" TEXT NOT NULL,
    "rpm" TEXT NOT NULL,
    "thickness" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "Hdd_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Headphone" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "price" INTEGER NOT NULL DEFAULT 0,
    "inStock" INTEGER NOT NULL,
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "idManual" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "connectionType" TEXT NOT NULL,
    "microphone" TEXT NOT NULL,
    "sensitivity" INTEGER NOT NULL,
    "frequencyRange" TEXT NOT NULL,
    "ledLighting" TEXT NOT NULL,
    "gamer" TEXT NOT NULL,
    "colors" TEXT[],
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "Headphone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mouse" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "price" INTEGER NOT NULL DEFAULT 0,
    "inStock" INTEGER NOT NULL,
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "idManual" TEXT NOT NULL,
    "connectionType" TEXT[],
    "dpi" INTEGER NOT NULL,
    "colors" TEXT[],
    "rgbLighting" TEXT NOT NULL,
    "buttons" INTEGER NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "Mouse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NetworkCard" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "price" INTEGER NOT NULL DEFAULT 0,
    "inStock" INTEGER NOT NULL,
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "idManual" TEXT NOT NULL,
    "connectionType" TEXT NOT NULL,
    "usbConnection" TEXT NOT NULL,
    "speed" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "NetworkCard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pad" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "price" INTEGER NOT NULL DEFAULT 0,
    "inStock" INTEGER NOT NULL,
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "idManual" TEXT NOT NULL,
    "colorStamp" TEXT[],
    "materials" TEXT[],
    "extent" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "rgbLighting" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "Pad_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ram" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "price" INTEGER NOT NULL DEFAULT 0,
    "inStock" INTEGER NOT NULL,
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "idManual" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "capacity" TEXT NOT NULL,
    "speed" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "Ram_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Source" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "price" INTEGER NOT NULL DEFAULT 0,
    "inStock" INTEGER NOT NULL,
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "idManual" TEXT NOT NULL,
    "brandsUse" TEXT[],
    "volts" TEXT[],
    "pin" TEXT NOT NULL,
    "amperage" TEXT NOT NULL,
    "watts" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "Source_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ssd" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "price" INTEGER NOT NULL DEFAULT 0,
    "inStock" INTEGER NOT NULL,
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "idManual" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "format" TEXT NOT NULL,
    "capacity" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "Ssd_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Support" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "price" INTEGER NOT NULL DEFAULT 0,
    "inStock" INTEGER NOT NULL,
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "idManual" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "maxSupport" TEXT NOT NULL,
    "materials" TEXT[],
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "Support_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VideoCard" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "price" INTEGER NOT NULL DEFAULT 0,
    "inStock" INTEGER NOT NULL,
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "idManual" TEXT NOT NULL,
    "connectorType" TEXT NOT NULL,
    "connectionType" TEXT NOT NULL,
    "resolution" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "VideoCard_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Backpack_code_key" ON "Backpack"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Backpack_slug_key" ON "Backpack"("slug");

-- CreateIndex
CREATE INDEX "Backpack_code_brand_idx" ON "Backpack"("code", "brand");

-- CreateIndex
CREATE UNIQUE INDEX "Carry_code_key" ON "Carry"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Carry_slug_key" ON "Carry"("slug");

-- CreateIndex
CREATE INDEX "Carry_code_brand_idx" ON "Carry"("code", "brand");

-- CreateIndex
CREATE UNIQUE INDEX "Coolerpad_code_key" ON "Coolerpad"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Coolerpad_slug_key" ON "Coolerpad"("slug");

-- CreateIndex
CREATE INDEX "Coolerpad_code_brand_idx" ON "Coolerpad"("code", "brand");

-- CreateIndex
CREATE UNIQUE INDEX "Cover_code_key" ON "Cover"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Cover_slug_key" ON "Cover"("slug");

-- CreateIndex
CREATE INDEX "Cover_code_brand_idx" ON "Cover"("code", "brand");

-- CreateIndex
CREATE UNIQUE INDEX "Docking_code_key" ON "Docking"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Docking_slug_key" ON "Docking"("slug");

-- CreateIndex
CREATE INDEX "Docking_code_brand_idx" ON "Docking"("code", "brand");

-- CreateIndex
CREATE UNIQUE INDEX "Hdd_code_key" ON "Hdd"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Hdd_slug_key" ON "Hdd"("slug");

-- CreateIndex
CREATE INDEX "Hdd_code_brand_idx" ON "Hdd"("code", "brand");

-- CreateIndex
CREATE UNIQUE INDEX "Headphone_code_key" ON "Headphone"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Headphone_slug_key" ON "Headphone"("slug");

-- CreateIndex
CREATE INDEX "Headphone_code_brand_idx" ON "Headphone"("code", "brand");

-- CreateIndex
CREATE UNIQUE INDEX "Mouse_code_key" ON "Mouse"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Mouse_slug_key" ON "Mouse"("slug");

-- CreateIndex
CREATE INDEX "Mouse_code_brand_idx" ON "Mouse"("code", "brand");

-- CreateIndex
CREATE UNIQUE INDEX "NetworkCard_code_key" ON "NetworkCard"("code");

-- CreateIndex
CREATE UNIQUE INDEX "NetworkCard_slug_key" ON "NetworkCard"("slug");

-- CreateIndex
CREATE INDEX "NetworkCard_code_brand_idx" ON "NetworkCard"("code", "brand");

-- CreateIndex
CREATE UNIQUE INDEX "Pad_code_key" ON "Pad"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Pad_slug_key" ON "Pad"("slug");

-- CreateIndex
CREATE INDEX "Pad_code_brand_idx" ON "Pad"("code", "brand");

-- CreateIndex
CREATE UNIQUE INDEX "Ram_code_key" ON "Ram"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Ram_slug_key" ON "Ram"("slug");

-- CreateIndex
CREATE INDEX "Ram_code_brand_idx" ON "Ram"("code", "brand");

-- CreateIndex
CREATE UNIQUE INDEX "Source_code_key" ON "Source"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Source_slug_key" ON "Source"("slug");

-- CreateIndex
CREATE INDEX "Source_code_brand_idx" ON "Source"("code", "brand");

-- CreateIndex
CREATE UNIQUE INDEX "Ssd_code_key" ON "Ssd"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Ssd_slug_key" ON "Ssd"("slug");

-- CreateIndex
CREATE INDEX "Ssd_code_brand_idx" ON "Ssd"("code", "brand");

-- CreateIndex
CREATE UNIQUE INDEX "Support_code_key" ON "Support"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Support_slug_key" ON "Support"("slug");

-- CreateIndex
CREATE INDEX "Support_code_brand_idx" ON "Support"("code", "brand");

-- CreateIndex
CREATE UNIQUE INDEX "VideoCard_code_key" ON "VideoCard"("code");

-- CreateIndex
CREATE UNIQUE INDEX "VideoCard_slug_key" ON "VideoCard"("slug");

-- CreateIndex
CREATE INDEX "VideoCard_code_brand_idx" ON "VideoCard"("code", "brand");

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_backpackId_fkey" FOREIGN KEY ("backpackId") REFERENCES "Backpack"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_carryId_fkey" FOREIGN KEY ("carryId") REFERENCES "Carry"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_coolerpadId_fkey" FOREIGN KEY ("coolerpadId") REFERENCES "Coolerpad"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_coverId_fkey" FOREIGN KEY ("coverId") REFERENCES "Cover"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_dockingId_fkey" FOREIGN KEY ("dockingId") REFERENCES "Docking"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_hddId_fkey" FOREIGN KEY ("hddId") REFERENCES "Hdd"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_headphoneId_fkey" FOREIGN KEY ("headphoneId") REFERENCES "Headphone"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_mouseId_fkey" FOREIGN KEY ("mouseId") REFERENCES "Mouse"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_networkCardId_fkey" FOREIGN KEY ("networkCardId") REFERENCES "NetworkCard"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_padId_fkey" FOREIGN KEY ("padId") REFERENCES "Pad"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_ramId_fkey" FOREIGN KEY ("ramId") REFERENCES "Ram"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Source"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_ssdId_fkey" FOREIGN KEY ("ssdId") REFERENCES "Ssd"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_supportId_fkey" FOREIGN KEY ("supportId") REFERENCES "Support"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_videoCardId_fkey" FOREIGN KEY ("videoCardId") REFERENCES "VideoCard"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductImage" ADD CONSTRAINT "ProductImage_backpackId_fkey" FOREIGN KEY ("backpackId") REFERENCES "Backpack"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductImage" ADD CONSTRAINT "ProductImage_carryId_fkey" FOREIGN KEY ("carryId") REFERENCES "Carry"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductImage" ADD CONSTRAINT "ProductImage_coolerpadId_fkey" FOREIGN KEY ("coolerpadId") REFERENCES "Coolerpad"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductImage" ADD CONSTRAINT "ProductImage_coverId_fkey" FOREIGN KEY ("coverId") REFERENCES "Cover"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductImage" ADD CONSTRAINT "ProductImage_dockingId_fkey" FOREIGN KEY ("dockingId") REFERENCES "Docking"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductImage" ADD CONSTRAINT "ProductImage_hddId_fkey" FOREIGN KEY ("hddId") REFERENCES "Hdd"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductImage" ADD CONSTRAINT "ProductImage_headphoneId_fkey" FOREIGN KEY ("headphoneId") REFERENCES "Headphone"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductImage" ADD CONSTRAINT "ProductImage_mouseId_fkey" FOREIGN KEY ("mouseId") REFERENCES "Mouse"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductImage" ADD CONSTRAINT "ProductImage_networkCardId_fkey" FOREIGN KEY ("networkCardId") REFERENCES "NetworkCard"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductImage" ADD CONSTRAINT "ProductImage_padId_fkey" FOREIGN KEY ("padId") REFERENCES "Pad"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductImage" ADD CONSTRAINT "ProductImage_ramId_fkey" FOREIGN KEY ("ramId") REFERENCES "Ram"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductImage" ADD CONSTRAINT "ProductImage_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Source"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductImage" ADD CONSTRAINT "ProductImage_ssdId_fkey" FOREIGN KEY ("ssdId") REFERENCES "Ssd"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductImage" ADD CONSTRAINT "ProductImage_supportId_fkey" FOREIGN KEY ("supportId") REFERENCES "Support"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductImage" ADD CONSTRAINT "ProductImage_videoCardId_fkey" FOREIGN KEY ("videoCardId") REFERENCES "VideoCard"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Backpack" ADD CONSTRAINT "Backpack_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Carry" ADD CONSTRAINT "Carry_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Coolerpad" ADD CONSTRAINT "Coolerpad_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cover" ADD CONSTRAINT "Cover_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Docking" ADD CONSTRAINT "Docking_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Hdd" ADD CONSTRAINT "Hdd_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Headphone" ADD CONSTRAINT "Headphone_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mouse" ADD CONSTRAINT "Mouse_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NetworkCard" ADD CONSTRAINT "NetworkCard_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pad" ADD CONSTRAINT "Pad_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ram" ADD CONSTRAINT "Ram_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Source" ADD CONSTRAINT "Source_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ssd" ADD CONSTRAINT "Ssd_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Support" ADD CONSTRAINT "Support_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VideoCard" ADD CONSTRAINT "VideoCard_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
