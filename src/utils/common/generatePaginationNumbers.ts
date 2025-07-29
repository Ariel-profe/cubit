
export const generatePaginationNumbers = ( currentPage: number, totalPages: number) => {

    // Si el numero total de paginas es menor a 7, retornar un array con los numeros de las paginas: mostrar todas las paginas sin puntos suspensivos
    if (totalPages <= 7) {
        return Array.from({length: totalPages}, (_, i) => i + 1);
    };

    // Si la pagina actual esta entre las primeras 3 paginas, retornar un array con los numeros de las paginas: mostrar las primeras 3 paginas, puntos suspensivos y las ultimas 2 paginas
    if (currentPage <= 3) {
        return [1, 2, 3, "...", totalPages - 1, totalPages];
    };

    // Si la pagina actual esta entre las ultimas 3 paginas, retornar un array con los numeros de las paginas: mostrar las primeras 2 paginas, puntos suspensivos y las ultimas 3 paginas
    if (currentPage >= totalPages - 2) {
        return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages];
    };

    // Si la pagina actual esta en otro lugar medio, retornar un array con la primera pagina, puntos suspensivos, pagina actual y resto
    return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
};