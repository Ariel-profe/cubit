export const selectChecbox = (property: NodeListOf<Element>) => {
    return Array.from(property)
        .filter(btn => btn.classList.contains('active'))
        .map(btn => btn.textContent?.trim())
        .join(',');
};