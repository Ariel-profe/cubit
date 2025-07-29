import Link from "next/link";

import { AdminBreadcrumb, Title } from "@/components";
import { categories } from "@/utils/products/categories";

const ProductsAdminPage = () => {
    return (
        <section className="container mx-auto px-3 mt-10 lg:mt-20">
            <AdminBreadcrumb title1="Administración" href1="/admin" />
            <Title title="Productos" subtitle="Administración de base de datos" />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {
                    categories.map((category) => (
                        <Link href={`/admin/productos/${category.href}`} key={category.id} className="bg-primary text-slate-200 p-6 rounded shadow hover:shadow-lg transition-shadow capitalize hover:text-tertiary hover:bg-primary/80">
                            <h3 className="text-lg font-semibold">{category.title}</h3>
                        </Link>
                    ))
                }
            </div>
        </section>
    )
}

export default ProductsAdminPage