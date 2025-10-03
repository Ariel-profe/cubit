"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";

type FilterOption = {
    label: string;
    id: string;
    options: string[] | number[];
    defaultLabel?: string;
};

type ProductFiltersProps = {
    filters: FilterOption[];
};

function getInitialParams(filterIds: string[]) {
    if (typeof window !== "undefined") {
        const params = new URLSearchParams(window.location.search);
        const initial: Record<string, string> = {};
        filterIds.forEach(id => {
            initial[id] = params.get(id) || "all";
        });
        return initial;
    }
    return Object.fromEntries(filterIds.map(id => [id, "all"]));
}

export const ProductFilters = ({ filters }: ProductFiltersProps) => {
    const filterIds = filters.map(f => f.id);
    const [selectedFilters, setSelectedFilters] = useState(() => getInitialParams(filterIds));

    useEffect(() => {
        setSelectedFilters(getInitialParams(filterIds));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleChange = (key: string, value: string) => {
        const newFilters = { ...selectedFilters, [key]: value };
        setSelectedFilters(newFilters);

        const params = new URLSearchParams(window.location.search);
        params.set(key, value);
        window.location.href = window.location.pathname + '?' + params.toString();
    };

    // Function to reset filters to default values
    const handleResetFilters = () => {
        const params = new URLSearchParams(window.location.search);
        filterIds.forEach(id => params.delete(id));
        window.location.href = window.location.pathname + '?' + params.toString();
        setSelectedFilters(getInitialParams(filterIds));
    };

    return (
        <div className="w-full lg:w-1/6 shadow-lg space-y-4 mt-2 lg:sticky top-20 h-fit">
            {filters.map(filter => (
                <div key={filter.id}>
                    <label htmlFor={filter.id} className="block mb-2 font-medium">
                        {filter.label}
                    </label>
                    <select
                        id={filter.id}
                        value={selectedFilters[filter.id]}
                        onChange={e => handleChange(filter.id, e.target.value)}
                        className="w-full p-2 border rounded text-slate-400 capitalize"
                    >
                        <option value="all" className="text-slate-700">
                            {filter.defaultLabel || "Todos"}
                        </option>
                        {filter.options.map(opt => (
                            <option key={opt} value={opt} className="capitalize text-slate-700">
                                {opt}
                            </option>
                        ))}
                    </select>
                </div>
            ))}
            <Button
                variant="destructive"
                className="w-full mt-4"
                onClick={handleResetFilters}
            >
                Reiniciar Filtros
            </Button>
        </div>
    );
};
