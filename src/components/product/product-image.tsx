
interface Props {
    src?: string;
    alt: string;
    className?: React.StyleHTMLAttributes<HTMLImageElement>['className'];
};

export const ProductImage = ({src, alt, className}: Props) => {

    const localSrc = (src)
        ? src.startsWith('http') ? src : `/products/${src}`
        : '/imgs/placeholder.svg';

    return (
        <img
            src={localSrc}
            alt={alt}
            className={className}
        />
    )
}
