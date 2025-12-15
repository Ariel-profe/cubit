-- CreateEnum
CREATE TYPE "Role" AS ENUM ('admin', 'client', 'user');

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "emailVerified" BOOLEAN NOT NULL DEFAULT false,
    "image" TEXT,
    "role" "Role" NOT NULL DEFAULT 'user',
    "counterVisits" INTEGER NOT NULL DEFAULT 0,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "session" (
    "id" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "token" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "account" (
    "id" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,
    "providerId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "accessToken" TEXT,
    "refreshToken" TEXT,
    "idToken" TEXT,
    "accessTokenExpiresAt" TIMESTAMP(3),
    "refreshTokenExpiresAt" TIMESTAMP(3),
    "scope" TEXT,
    "password" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "verification" (
    "id" TEXT NOT NULL,
    "identifier" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "verification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Department" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserAddress" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "address2" TEXT,
    "city" TEXT NOT NULL,
    "zipCode" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "cuit" TEXT NOT NULL,
    "departmentId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "UserAddress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "subTotal" DOUBLE PRECISION NOT NULL,
    "tax" DOUBLE PRECISION NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "itemsInOrder" INTEGER NOT NULL,
    "isPaid" BOOLEAN NOT NULL DEFAULT false,
    "isPaidAt" TIMESTAMP(3),
    "isSentByEmail" BOOLEAN NOT NULL DEFAULT false,
    "delivered" TIMESTAMP(3),
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderItem" (
    "id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "orderId" TEXT NOT NULL,
    "backpackId" TEXT,
    "caddyId" TEXT,
    "carryId" TEXT,
    "coolerpadId" TEXT,
    "coverId" TEXT,
    "dockingId" TEXT,
    "hddId" TEXT,
    "headphoneId" TEXT,
    "mouseId" TEXT,
    "networkCardId" TEXT,
    "notebookId" TEXT,
    "padId" TEXT,
    "ramId" TEXT,
    "sourceId" TEXT,
    "ssdId" TEXT,
    "supportId" TEXT,
    "videoCardId" TEXT,

    CONSTRAINT "OrderItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderAddress" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "address2" TEXT,
    "zipCode" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "cuit" TEXT NOT NULL,
    "departmentId" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,

    CONSTRAINT "OrderAddress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductImage" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "notebookId" TEXT,
    "caddyId" TEXT,
    "backpackId" TEXT,
    "carryId" TEXT,
    "coolerpadId" TEXT,
    "coverId" TEXT,
    "dockingId" TEXT,
    "hddId" TEXT,
    "headphoneId" TEXT,
    "mouseId" TEXT,
    "networkCardId" TEXT,
    "padId" TEXT,
    "ramId" TEXT,
    "sourceId" TEXT,
    "ssdId" TEXT,
    "supportId" TEXT,
    "videoCardId" TEXT,

    CONSTRAINT "ProductImage_pkey" PRIMARY KEY ("id")
);

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
    "idManual" TEXT NOT NULL,
    "materials" TEXT[],
    "color" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "compartments" INTEGER NOT NULL,
    "lateralPockets" INTEGER NOT NULL,
    "superiorPockets" INTEGER NOT NULL,
    "frontPockets" INTEGER NOT NULL,
    "notebookCompartment" TEXT NOT NULL,
    "notebookSize" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "Backpack_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Caddy" (
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
    "thickness" TEXT NOT NULL,
    "compatibility" TEXT[],
    "includes" TEXT[],
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "Caddy_pkey" PRIMARY KEY ("id")
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
    "rgbLighting" TEXT NOT NULL,
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
    "materials" TEXT NOT NULL,
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
    "sensitivity" TEXT NOT NULL,
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
    "model" TEXT NOT NULL,
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
CREATE TABLE "Notebook" (
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
    "upcEan" TEXT NOT NULL,
    "processor" TEXT NOT NULL,
    "os" TEXT NOT NULL,
    "graphicCard" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "memoryRam" TEXT NOT NULL,
    "storage1" TEXT NOT NULL,
    "storage2" TEXT NOT NULL,
    "screen" TEXT NOT NULL,
    "keypad" TEXT NOT NULL,
    "numKeypad" TEXT NOT NULL,
    "cardReader" TEXT NOT NULL,
    "webCam" TEXT NOT NULL,
    "usb" TEXT[],
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

-- CreateTable
CREATE TABLE "Budget" (
    "id" TEXT NOT NULL,
    "budgetNumber" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "companyEmail" TEXT NOT NULL,
    "clientName" TEXT NOT NULL,
    "clientEmail" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Budget_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BudgetItem" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "price" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "budgetId" TEXT NOT NULL,

    CONSTRAINT "BudgetItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "session_token_key" ON "session"("token");

-- CreateIndex
CREATE UNIQUE INDEX "UserAddress_userId_key" ON "UserAddress"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "OrderAddress_orderId_key" ON "OrderAddress"("orderId");

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Backpack_code_key" ON "Backpack"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Backpack_slug_key" ON "Backpack"("slug");

-- CreateIndex
CREATE INDEX "Backpack_code_brand_idx" ON "Backpack"("code", "brand");

-- CreateIndex
CREATE UNIQUE INDEX "Caddy_code_key" ON "Caddy"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Caddy_slug_key" ON "Caddy"("slug");

-- CreateIndex
CREATE INDEX "Caddy_code_brand_idx" ON "Caddy"("code", "brand");

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
CREATE UNIQUE INDEX "Notebook_code_key" ON "Notebook"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Notebook_slug_key" ON "Notebook"("slug");

-- CreateIndex
CREATE INDEX "Notebook_code_brand_idx" ON "Notebook"("code", "brand");

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

-- CreateIndex
CREATE UNIQUE INDEX "Budget_budgetNumber_key" ON "Budget"("budgetNumber");

-- CreateIndex
CREATE INDEX "Budget_id_clientName_idx" ON "Budget"("id", "clientName");

-- AddForeignKey
ALTER TABLE "session" ADD CONSTRAINT "session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "account" ADD CONSTRAINT "account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAddress" ADD CONSTRAINT "UserAddress_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAddress" ADD CONSTRAINT "UserAddress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_backpackId_fkey" FOREIGN KEY ("backpackId") REFERENCES "Backpack"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_caddyId_fkey" FOREIGN KEY ("caddyId") REFERENCES "Caddy"("id") ON DELETE SET NULL ON UPDATE CASCADE;

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
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_notebookId_fkey" FOREIGN KEY ("notebookId") REFERENCES "Notebook"("id") ON DELETE SET NULL ON UPDATE CASCADE;

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
ALTER TABLE "OrderAddress" ADD CONSTRAINT "OrderAddress_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderAddress" ADD CONSTRAINT "OrderAddress_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductImage" ADD CONSTRAINT "ProductImage_notebookId_fkey" FOREIGN KEY ("notebookId") REFERENCES "Notebook"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductImage" ADD CONSTRAINT "ProductImage_caddyId_fkey" FOREIGN KEY ("caddyId") REFERENCES "Caddy"("id") ON DELETE SET NULL ON UPDATE CASCADE;

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
ALTER TABLE "Caddy" ADD CONSTRAINT "Caddy_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

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
ALTER TABLE "Notebook" ADD CONSTRAINT "Notebook_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

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

-- AddForeignKey
ALTER TABLE "Budget" ADD CONSTRAINT "Budget_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BudgetItem" ADD CONSTRAINT "BudgetItem_budgetId_fkey" FOREIGN KEY ("budgetId") REFERENCES "Budget"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
