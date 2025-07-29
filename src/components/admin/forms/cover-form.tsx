"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import clsx from "clsx";

import { createUpdateCover, deleteProductImage } from "@/actions";
import { ProductImage, Button } from "@/components";
import { ICover, IProductImage } from "@/interfaces";
import { validCoverBrands, validCoverColors, validCoverMaterial, validCoverNotebookSizes, validCoverOthers, validCoverStamps } from "@/utils";

interface Props {
    product: Partial<ICover> & { ProductImage?: IProductImage[] } | undefined;
};

interface FormInputs {
    code: string;
    title: string;
    slug: string;
    brand: string;
    categoryId: string;
    price: number;
    inStock: number;
    tags: string;
    status: boolean;
    images?: FileList;
    // Specific
    idManual: string;
    notebookSize: string;
    stamp: string;
    materials: string;
    colors: string;
    otherFeatures: string;
};

export const CoverForm = ({ product }: Props) => {

    const { handleSubmit, register, formState: { isValid }, getValues, setValue, watch } = useForm<FormInputs>({
        defaultValues: {
            ...product,
            tags: product?.tags?.join(", "),
            colors: product?.colors?.join(", "),
            otherFeatures: product?.otherFeatures?.join(", "),
            images: undefined
        }
    });

    const router = useRouter();

    useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === 'title') {
                const regex = /[^a-zA-Z0-9_]/gi;
                // Replace spaces, hyphens, commas, and dots with underscores
                const newSlug = value.title
                    ?.trim()
                    .replaceAll(' ', '_')
                    .replaceAll('-', '_')
                    .replaceAll(',', '_')
                    .replaceAll('.', '_')
                    .replaceAll(regex, '')
                    .toLocaleLowerCase() || '';
                setValue('slug', newSlug);
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, setValue]);

    watch("colors");
    watch("otherFeatures");

    // Function to handle radio button changes (it can be add one or multiple)
    const handleRadioChange = (name: keyof Pick<FormInputs, "colors" | "otherFeatures">, value: string) => {
        // Get the current values, split by comma, and trim each value
        const currentValue = getValues(name) || "";
        const options = new Set(currentValue.split(',').map(opt => opt.trim().toLowerCase()).filter(opt => opt));
        options.has(value.toLowerCase()) ? options.delete(value.toLowerCase()) : options.add(value.toLowerCase());
        setValue(name, Array.from(options).join(', '));
    };

    const onSubmit = async (data: FormInputs) => {

        const formData = new FormData();

        // Append all form fields to FormData
        const { images, ...productToSave } = data;

        if (product?.id) {
            formData.append("id", product?.id ?? "");
        }
        formData.append("code", productToSave.code);
        formData.append("title", productToSave.title);
        formData.append("slug", productToSave.slug);
        formData.append("brand", productToSave.brand);
        formData.append("categoryId", productToSave.categoryId);
        formData.append("price", productToSave.price.toString());
        formData.append("inStock", productToSave.inStock?.toString());
        formData.append("tags", productToSave.tags);
        // Specific fields
        formData.append("idManual", productToSave.idManual);
        formData.append("notebookSize", productToSave.notebookSize);
        formData.append("stamp", productToSave.stamp);
        formData.append("materials", productToSave.materials);
        formData.append("colors", productToSave.colors);
        formData.append("otherFeatures", productToSave.otherFeatures);

        if (images) {
            // Append images to FormData
            for (let i = 0; i < images.length; i++) {
                formData.append("images", images[i]);
            }
        };

        const { ok, message } = await createUpdateCover(formData);

        if (!ok) {
            toast.error(
                message, { position: "bottom-right" });
            return;
        };

        // If the product was created or updated successfully
        toast.success(message, { position: "bottom-right" });
        router.replace("/admin/productos/fundas");
    };

    const handleDeleteProductImage = async (imageId: number, imageUrl: string) => {
        const { ok, message } = await deleteProductImage(imageId, imageUrl);

        if (!ok) {
            toast.error(message, { position: "bottom-right" });
            return;
        };

        toast.success("Imagen eliminada correctamente", { position: "bottom-right" });
        // Optionally, you can refresh the page or update the state to reflect the changes
        // router.refresh();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-end">
                <Button
                    className="w-fit mt-2 bg-secondary text-slate-200 hover:bg-secondary/80"
                    disabled={!isValid}
                >
                    {product?.id ? "Actualizar" : "Guardar"}
                </Button>
            </div>

            <div className="grid mb-16 grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
                {/* Required */}
                <div className="w-full">
                    <div className="flex flex-col mb-2">
                        <span>Título</span>
                        <input
                            type="text"
                            className="p-2 border rounded-md bg-slate-200 text-slate-800"
                            {...register("title", { required: true })}
                        />
                    </div>

                    <div className="flex flex-col mb-2">
                        <span>Slug (debe ser único)</span>
                        <input
                            type="text"
                            className="p-2 border rounded-md bg-slate-200 text-slate-800 read-only:bg-slate-400 cursor-not-allowed"
                            {...register("slug", {
                                required: true,
                                validate: value => value.trim().includes(' ') ? 'No puede tener espacios en blanco' : undefined
                            })}
                            readOnly
                        />
                    </div>

                    <div className="flex flex-col mb-2">
                        <span>Código (debe ser único)</span>
                        <input
                            type="text"
                            className="p-2 border rounded-md bg-slate-200 text-slate-800"
                            {...register("code", { required: true })}
                        />
                    </div>

                    <div className="flex flex-col mb-2">
                        <span>Categoría</span>
                        <select
                            className="p-2 border rounded-md bg-slate-200 text-slate-800"
                            {...register("categoryId", { required: true })}
                        >
                            <option value="07a7e42e-1dce-4422-94be-aa118d948b90">Fundas</option>
                        </select>
                    </div>

                    <div className="flex flex-col mb-2">
                        <span>Marca</span>
                        <select
                            className="p-2 border rounded-md bg-slate-200 text-slate-800 capitalize"
                            {...register("brand", { required: true })}
                        >
                            <option value="">[Seleccione]</option>
                            {
                                validCoverBrands.map(brand => (
                                    <option key={brand} className="capitalize" value={brand}>{brand}</option>
                                ))
                            }
                        </select>
                    </div>

                    <div className="flex flex-col mb-2">
                        <span>Precio</span>
                        <input
                            type="number"
                            className="p-2 border rounded-md bg-slate-200 text-slate-800"
                            {...register("price", { required: true, min: 0 })}
                        />
                    </div>

                    <div className="flex flex-col mb-2">
                        <span>Inventario</span>
                        <input
                            type="number"
                            className="p-2 border rounded-md bg-slate-200 text-slate-800"
                            {...register("inStock", { required: true, min: 0 })}
                        />
                    </div>

                    <div className="flex flex-col mb-2">
                        <span>Etiquetas (separadas por comas)</span>
                        <input
                            type="text"
                            className="p-2 border rounded-md bg-slate-200 text-slate-800"
                            {...register("tags", { required: true })}
                        />
                    </div>

                    {/* Divider */}
                    <div className="flex items-center gap-x-1 my-3 text-tertiary w-full text-sm">
                        <hr className="w-full" />
                        <span className="w-full text-center">Especificaciones técnicas</span>
                        <hr className="w-full" />
                    </div>

                    {/* Specific */}

                    <div className="flex flex-col lg:flex-row justify-between items-center gap-2">
                        <div className="flex flex-col mb-2 w-full">
                            <span>Id Manual</span>
                            <input
                                type="text"
                                className="p-2 border rounded-md bg-slate-200 text-slate-800"
                                {...register("idManual", { required: true })}
                            />
                        </div>

                        <div className="flex flex-col mb-2 w-full">
                            <span>Material</span>
                            <select
                                className="p-2 border rounded-md bg-slate-200 text-slate-800 capitalize"
                                {...register("materials", { required: true })}
                            >
                                <option value="">[Seleccione]</option>
                                {
                                    validCoverMaterial.map(opt => (
                                        <option key={opt} className="capitalize" value={opt}>{opt}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row justify-between items-center gap-2">
                        <div className="flex flex-col mb-2 w-full">
                            <span>Tamaño de notebook</span>
                            <select
                                className="p-2 border rounded-md bg-slate-200 text-slate-800 capitalize"
                                {...register("notebookSize", { required: true })}
                            >
                                <option value="">[Seleccione]</option>
                                {
                                    validCoverNotebookSizes.map(opt => (
                                        <option key={opt} className="capitalize" value={opt}>{opt}</option>
                                    ))
                                }
                            </select>
                        </div>

                        <div className="flex flex-col mb-2 w-full">
                            <span>Estampa</span>
                            <select
                                className="p-2 border rounded-md bg-slate-200 text-slate-800 capitalize"
                                {...register("stamp", { required: true })}
                            >
                                <option value="">[Seleccione]</option>
                                {
                                    validCoverStamps.map(opt => (
                                        <option key={opt} className="capitalize" value={opt}>{opt}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                </div>

                {/* Checkboxes and Images */}
                <div className="w-full">
                    {/* As checkboxes */}
                    <div className="flex flex-col">

                        <div className="flex flex-col lg:flex-row justify-between items-center gap-2">
                            <div className="flex flex-col my-2 w-full">
                                <span>Colores</span>
                                <div className="flex flex-wrap">
                                    {validCoverColors.map((opt) => (
                                        <div
                                            key={opt}
                                            onClick={() => handleRadioChange("colors", opt)}
                                            className={clsx(
                                                "p-2 border cursor-pointer rounded-md mr-2 mb-2 min-w-fit transition-all text-center",
                                                {
                                                    "bg-secondary text-white": (getValues("colors") ?? "").includes(opt),
                                                }
                                            )}
                                        >
                                            <span className="capitalize">{opt}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col my-2 w-full">
                                <span>Incluye</span>
                                <div className="flex flex-wrap">
                                    {validCoverOthers.map((opt) => (
                                        <div
                                            key={opt}
                                            onClick={() => handleRadioChange("otherFeatures", opt)}
                                            className={clsx(
                                                "p-2 border cursor-pointer rounded-md mr-2 mb-2 min-w-fit transition-all text-center",
                                                {
                                                    "bg-secondary text-white": (getValues("otherFeatures") ?? "").includes(opt),
                                                }
                                            )}
                                        >
                                            <span className="capitalize">{opt}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* Images */}
                    <div className="flex flex-col my-2">
                        <label htmlFor="images">Fotos</label>
                        <input
                            id="images"
                            type="file"
                            multiple
                            className="p-2 border rounded bg-gray-200 text-slate-800 file:bg-secondary file:px-2 file:py-1 file:rounded file:text-slate-200 file:hover:bg-secondary/80 file:hover:text-white file:cursor-pointer"
                            accept="image/png, image/jpeg, image/avif, image/webp, image/jpg"
                            {...register("images")}
                        />
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {
                            product?.ProductImage?.map(image => (
                                <div
                                    key={image.id}
                                    className="bg-primary rounded shadow-md"
                                >
                                    <ProductImage
                                        src={image.url}
                                        alt={product.title || ''}
                                        className="object-cover rounded"
                                    />

                                    <Button
                                        className="bg-red-600 md:hover:bg-red-800 w-full cursor-pointer rounded-t-none transition-colors text-slate-200 md:hover:text-white"
                                        type="button"
                                        onClick={() => handleDeleteProductImage(image.id, image.url)}
                                    >
                                        Eliminar
                                    </Button>
                                </div>
                            ))
                        }
                    </div>

                </div>

                {isValid && <p className="text-end w-full text-sm text-emerald-500">El formulario está listo para enviar</p>}
            </div>
        </form>
    );
};