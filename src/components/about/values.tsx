"use client"

import { Zap, Sparkles, Crown } from "lucide-react";
import { GlowingCards, GlowingCard, Title } from "@/components";

export const Values = () => {
    return (
        <>
            <Title
                from="top"
                split="word"
                blur={3}
                delay={0.2}
                duration={1.2}
            >
                Los pilares de Cubit como empresa
            </Title>

            <GlowingCards
                enableGlow={true}
                glowRadius={30}
                glowOpacity={0.8}
                animationDuration={500}
                gap="3rem"
                childrenClassName="grid grid-cols-2 md:grid-cols-3 gap-6"
            >
                <GlowingCard glowColor="#10b981" className="space-y-4">
                    <div className="flex items-center space-x-2">
                        <Zap className="w-6 h-6 text-emerald-500" />
                        <h3>Visión de la empresa</h3>
                    </div>
                    <p>Excelencia en tecnología.</p>
                    <ul className="list-disc list-inside">
                        <li>Liderar el mercado</li>
                        <li>Innovación constante</li>
                        <li>Excelencia en calidad</li>
                    </ul>
                </GlowingCard>
                <GlowingCard glowColor="#8b5cf6" className="space-y-4">
                    <div className="flex items-center space-x-2">
                        <Sparkles className="w-6 h-6 text-purple-500" />
                        <h3>Misión de la empresa</h3>
                    </div>
                    <p>Llevar inspiración e innovación a todos los rincones del mundo.</p>
                    <ul className="list-disc list-inside">
                        <li>Ofrecer soluciones</li>
                        <li>Transformar vidas</li>
                        <li>Llegar a cada hogar</li>
                    </ul>
                </GlowingCard>
                <GlowingCard glowColor="#f59e0b" className="space-y-4">
                    <div className="flex items-center space-x-2">
                        <Crown className="w-6 h-6 text-amber-500" />
                        <h3>Valores</h3>
                    </div>
                    <p>Reglas de oro en el servicio.</p>
                    <ul className="list-disc list-inside">
                        <li>Satisfacción del cliente</li>
                        <li>Compromiso con la calidad</li>
                        <li>Innovación continua</li>
                    </ul>
                </GlowingCard>
            </GlowingCards>
        </>
    )
}
