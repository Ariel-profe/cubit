"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getFeaturedNotebooks } from "@/actions";
import { ProductsGrid, Loading, Title, Button } from "@/components";

type FeaturedNotebooksProps = {
    title: string;
    slug: string;
    category: string;
    price: number;
    images: string[];
    ProductImage: { url: string }[];
}[];

export const FeaturedNotebooks = () => {

    const [featuredNotebooks, setFeaturedNotebooks] = useState<FeaturedNotebooksProps | undefined>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNotebooks = async () => {
            try {
                const { notebooks } = await getFeaturedNotebooks();
                setFeaturedNotebooks(notebooks || []);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
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
                    loading
                        ? <Loading />
                        : (<ProductsGrid products={featuredNotebooks ?? []} />)
                }
            </div>
            
            <div className="mt-8 flex justify-center">    
                <Button variant="secondary" size="sm">
                    <Link href="/productos/notebooks">
                        Ver todas las notebooks
                    </Link>
                </Button>
            </div>
        </div>
    )
}