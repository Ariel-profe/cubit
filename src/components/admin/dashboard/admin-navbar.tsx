import { SheetMenu, UserNav } from "@/components";

interface NavbarProps {
  title: string;
};

export function AdminNavbar({ title }: NavbarProps) {
  return (
    <header className="sticky top-0 z-10 w-full shadow backdrop-blur border-b border-slate-900">
      <div className="mx-4 sm:mx-8 flex h-14 items-center">
        <div className="flex items-center space-x-4 lg:space-x-0">
          <SheetMenu />
          <h1 className="font-bold">{title}</h1>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <UserNav />
        </div>
      </div>
    </header>
  );
}