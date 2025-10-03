import Link from "next/link";

import { AdminBreadcrumb, Card, CardContent, CardHeader, Title } from "@/components";
import { categories } from "@/utils/products/categories";

const ProductsAdminPage = () => {
    return (
        <section className="flex flex-col container mx-auto px-3 mt-10 lg:mt-20 overflow-hidden">
            <AdminBreadcrumb title1="Administración" href1="/admin" />
            <Title
                from="top"
                split="word"
                blur={3}
                delay={0.2}
                duration={1.2}
            >
                Gestión de Productos
            </Title>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mt-10">
                {
                    categories.map((category) => (
                        <Link href={`/admin/productos/${category.href}`} key={category.id}>
                            <Card className="hover:bg-primary transition-colors p-6">
                                <CardContent className="capitalize">
                                    {category.title}
                                </CardContent>
                            </Card>
                        </Link>
                    ))
                }
            </div>
        </section>
    )
}

export default ProductsAdminPage