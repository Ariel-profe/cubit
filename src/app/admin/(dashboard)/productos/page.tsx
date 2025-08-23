import Link from "next/link";

import { AdminBreadcrumb, Card, CardHeader, Title } from "@/components";
import { categories } from "@/utils/products/categories";

const ProductsAdminPage = () => {
    return (
        <section>
            <AdminBreadcrumb title1="Administración" href1="/admin" />
            <Title title="Productos" subtitle="Administración de base de datos" />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {
                    categories.map((category) => (
                        <Link href={`/admin/productos/${category.href}`} key={category.id}>
                            <Card className="hover:bg-secondary transition-colors">
                                <CardHeader className="capitalize">
                                    {category.title}
                                </CardHeader>
                            </Card>
                        </Link>
                    ))
                }
            </div>
        </section>
    )
}

export default ProductsAdminPage