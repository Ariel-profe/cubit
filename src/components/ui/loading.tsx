
export const Loading = () => {
    return (
        <button type="button" className="flex justify-center items-center animate-pulse" disabled>
            <svg className="mr-3 size-5 bg-tertiary rounded-full" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" fill="currentColor" />
            </svg>
            Cargando…
        </button>
    )
}
