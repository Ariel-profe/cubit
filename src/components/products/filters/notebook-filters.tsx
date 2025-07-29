"use client";

import { useEffect, useState } from "react";
import { validNotebookGraphicMemories, validNotebookProcessors, validNotebookRamMemories, validNotebookTypes } from "@/utils";

function getInitialParams() {
    if (typeof window !== "undefined") {
        const params = new URLSearchParams(window.location.search);
        return {
            type: params.get("type") || "all",
            processor: params.get("processor") || "all",
            memoryRam: params.get("memoryRam") || "all",
            graphicCard: params.get("graphicCard") || "all",
        };
    }
    return {
        type: "all",
        processor: "all",
        memoryRam: "all",
        graphicCard: "all",
    };
}

export const NotebookFilters = () => {
    const [filters, setFilters] = useState(getInitialParams());

    useEffect(() => {
        setFilters(getInitialParams());
    }, []);

    const handleChange = (key: keyof typeof filters, value: string) => {
        const newFilters = { ...filters, [key]: value };
        setFilters(newFilters);

        const params = new URLSearchParams(window.location.search);
        params.set(key, value);
        window.location.href = window.location.pathname + '?' + params.toString();
    };

    return (
        <div className="w-full lg:w-1/4 p-2 shadow-lg space-y-4">
            <div>
                <label htmlFor="type-select" className="block mb-2 font-medium">
                    Tipo
                </label>
                <select
                    id="type-select"
                    value={filters.type}
                    onChange={e => handleChange("type", e.target.value)}
                    className="w-full p-2 border rounded text-slate-400 capitalize"
                >
                    <option value="all" className="text-slate-700">Todos</option>
                    {validNotebookTypes.map((type) => (
                        <option key={type} value={type} className="capitalize text-slate-700">
                            {type}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="processor-select" className="block mb-2 font-medium">
                    Procesador
                </label>
                <select
                    id="processor-select"
                    value={filters.processor}
                    onChange={e => handleChange("processor", e.target.value)}
                    className="w-full p-2 border rounded text-slate-400 capitalize"
                >
                    <option value="all" className="text-slate-700">Todos</option>
                    {validNotebookProcessors.map((proc) => (
                        <option key={proc} value={proc} className="capitalize text-slate-700">
                            {proc}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="memoryRam-select" className="block mb-2 font-medium">
                    Memoria RAM
                </label>
                <select
                    id="memoryRam-select"
                    value={filters.memoryRam}
                    onChange={e => handleChange("memoryRam", e.target.value)}
                    className="w-full p-2 border rounded text-slate-400 capitalize"
                >
                    <option value="all" className="text-slate-700">Todos</option>
                    {validNotebookRamMemories.map((ramOption) => (
                        <option key={ramOption} value={ramOption} className="capitalize text-slate-700">
                            {ramOption}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="graphicCard-select" className="block mb-2 font-medium">
                    Placa de video
                </label>
                <select
                    id="graphicCard-select"
                    value={filters.graphicCard}
                    onChange={e => handleChange("graphicCard", e.target.value)}
                    className="w-full p-2 border rounded text-slate-400 capitalize"
                >
                    <option value="all" className="text-slate-700">Todos</option>
                    {validNotebookGraphicMemories.map((vc) => (
                        <option key={vc} value={vc} className="capitalize text-slate-700">
                            {vc}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
