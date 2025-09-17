// import { getTotalOrders, getTotalUsers } from "@/actions";

// import { DashboardCard, Title } from "@/components";
// import { adminLinks } from "@/utils/admin/admin-links";

// export default async function AdminPage() {

//   const [totalUsers, totalOrders] = await Promise.all([
//     getTotalUsers(),
//     getTotalOrders()
//     // TODO: Add getTotalProducts when implemented
//   ]);
  
//   return (
//     <section className="container mx-auto px-3 mt-10 lg:mt-20">
//       <Title title="Administración general" />

//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-5">
//         {
//           adminLinks.map(({href, icon: Icon, title}) => (
//             <DashboardCard 
//               key={title}
//               counter={title === "Usuarios" ? totalUsers : title === "Órdenes" ? totalOrders : 0}
//               href={href}
//               title={title}
//               icon={Icon}
//             />
//           ))
//         }
//       </div>
//     </section>
//   );
// }


"use client";
import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";

import { useStore } from "@/hooks/use-store";
import { useSidebar } from "@/hooks/use-siderbar";
import { ContentLayout } from "@/components/admin/dashboard/content-layout";

export default function DashboardPage() {
  const sidebar = useStore(useSidebar, (x) => x);
  if (!sidebar) return null;
  const { settings, setSettings } = sidebar;
  return (
    <ContentLayout title="Panel administrativo">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Inicio</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Panel</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <TooltipProvider>
        <div className="flex gap-6 mt-6">
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center space-x-2">
                <Switch
                  id="is-hover-open"
                  onCheckedChange={(x) => setSettings({ isHoverOpen: x })}
                  checked={settings.isHoverOpen}
                />
                <Label htmlFor="is-hover-open">Abrir con cursor encima</Label>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Al pasar el cursor sobre la barra lateral en vista móvil, se abrirá</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center space-x-2">
                <Switch
                  id="disable-sidebar"
                  onCheckedChange={(x) => setSettings({ disabled: x })}
                  checked={settings.disabled}
                />
                <Label htmlFor="disable-sidebar">Deshabilitar barra lateral</Label>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Ocultar barra lateral</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    </ContentLayout>
  );
}