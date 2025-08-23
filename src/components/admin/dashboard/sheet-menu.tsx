import Link from "next/link";
import { MenuIcon } from "lucide-react";

import { Sheet, SheetHeader, SheetContent, SheetTrigger, Button, SheetTitle, Menu } from "@/components";

export function SheetMenu() {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden" asChild>
        <Button className="h-8" variant="default" size="icon">
          <MenuIcon size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent className="sm:w-72 px-3 h-full flex flex-col" side="left">
        <SheetHeader>
          <Button
            className="flex justify-center items-center pb-2 pt-1"
            variant="link"
            asChild
          >
            <Link href="/admin/dashboard" className="flex items-center gap-2">
              <SheetTitle className="font-bold text-lg">Cubit</SheetTitle>
            </Link>
          </Button>
        </SheetHeader>
        <Menu isOpen />
      </SheetContent>
    </Sheet>
  );
}