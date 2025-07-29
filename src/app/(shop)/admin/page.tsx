import { getTotalOrders, getTotalUsers } from "@/actions";

import { DashboardCard, Title } from "@/components";
import { adminLinks } from "@/utils/admin/admin-links";

export default async function AdminPage() {

  const [totalUsers, totalOrders] = await Promise.all([
    getTotalUsers(),
    getTotalOrders()
    // TODO: Add getTotalProducts when implemented
  ]);
  
  return (
    <section className="container mx-auto px-3 mt-10 lg:mt-20">
      <Title title="Administración general" />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-5">
        {
          adminLinks.map(({href, icon: Icon, title}) => (
            <DashboardCard 
              key={title}
              counter={title === "Usuarios" ? totalUsers : title === "Órdenes" ? totalOrders : 0}
              href={href}
              title={title}
              icon={Icon}
            />
          ))
        }
      </div>
    </section>
  );
}