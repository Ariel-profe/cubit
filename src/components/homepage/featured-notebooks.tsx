"use client";

import { useEffect, useState } from "react";
import { getFeaturedNotebooks } from "@/actions";
import { INotebook } from "@/interfaces";
import DashboardPage from "@/app/admin/(dashboard)/dashboard/page";
import { ProductsGrid } from "../products/products-grid";
import { Loading } from "../ui/loading";
import { Title } from "../ui/title";
import Link from "next/link";

export const FeaturedNotebooks = () => {

    const [featuredNotebooks, setFeaturedNotebooks] = useState<INotebook[]>([]);

    useEffect(() => {

        const fetchNotebooks = async () => {
            try {
                const { notebooks } = await getFeaturedNotebooks();
                setFeaturedNotebooks(notebooks || []);
            } catch (error) {
                console.log(error);
            }
        }

        fetchNotebooks();
    }, []);

    return (
        <div className="container mx-auto px-3 py-10">
            <Title
                from="top"
                split="word"
                blur={3}
                delay={0.2}
                duration={1.2}
                divClassName="text-center mb-5"
            >
                Explora nuestras notebooks destacadas para llevar tu rendimiento al siguiente nivel
            </Title>

            <div className="min-h-[200px] flex items-center justify-center">
            {
                !featuredNotebooks || featuredNotebooks.length === 0 ? (
                    <Loading />
                ) : (
                    <ProductsGrid products={featuredNotebooks} />
                )
            }
            </div>

            <Link href="/productos/notebooks" className="text-center mt-5 block">
                Ver todas las notebooks
            </Link>
        </div>
    )
}