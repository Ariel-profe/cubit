-- AlterTable
ALTER TABLE "OrderItem" ADD COLUMN     "caddyId" TEXT;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_caddyId_fkey" FOREIGN KEY ("caddyId") REFERENCES "Caddy"("id") ON DELETE SET NULL ON UPDATE CASCADE;
