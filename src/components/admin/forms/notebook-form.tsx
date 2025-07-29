"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import clsx from "clsx";

import { createUpdateNotebook, deleteProductImage } from "@/actions";
import { ProductImage, Button } from "@/components";
import { INotebook, IProductImage } from "@/interfaces";
import { validNotebookBluetooth, validNotebookBrands, validNotebookGraphicMemories, validNotebookKeypads, validNotebookLan, validNotebookOptions, validNotebookOs, validNotebookProcessors, validNotebookRamMemories, validNotebookScreens, validNotebookStorage1, validNotebookStorage2, validNotebookTypes, validNotebookUsb, validNotebookWebCams, validNotebookWifi } from "@/utils";

interface Props {
    product: Partial<INotebook> & { ProductImage?: IProductImage[] } | undefined;
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

    bluetooth: string;
    cardReader: string;
    displayPort: string;
    graphicCard: string;
    hdmi: string;
    keypad: string;
    lan: string;
    memoryRam: string;
    model: string;
    numKeypad: string;
    os: string;
    processor: string;
    screen: string;
    storage1: string;
    storage2: string;
    type: "hogar" | "empresa" | "profesional" | "gamer";
    upcEan: string;
    usb: string;
    vga: string;
    warranty: string;
    webCam: string;
    weight: number;
    wiFi: string;
};

export const NotebookForm = ({ product }: Props) => {

    const { handleSubmit, register, formState: { isValid }, getValues, setValue, watch } = useForm<FormInputs>({
        defaultValues: {
            ...product,
            tags: product?.tags?.join(", "),
            usb: product?.usb?.join(", "),
            images: undefined
        }
    });

    const router = useRouter();

    useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === 'title') {
                const regex = /[^a-zA-Z0-9_]/gi
                const newSlug = value.title?.trim().replaceAll(' ', '_').replaceAll(regex, '').toLocaleLowerCase() || ''
                setValue('slug', newSlug)
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, setValue]);

    const handleRadioChange = (name: "usb", value: string) => {
        // Get the current values, split by comma, and trim each value
        const currentValue = getValues(name) || "";
        const options = new Set(currentValue.split(',').map(opt => opt.trim().toLowerCase()).filter(opt => opt));
        options.has(value.toLowerCase()) ? options.delete(value.toLowerCase()) : options.add(value.toLowerCase());
        setValue(name, Array.from(options).join(', '));
    };

    // Watch the fields to update the UI accordingly
    watch("bluetooth");
    watch("cardReader");
    watch("displayPort");
    watch("hdmi");
    watch("keypad");
    watch("lan");
    watch("numKeypad");
    watch("usb");
    watch("vga");
    watch("warranty");
    watch("webCam");
    watch("wiFi");

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
        formData.append("type", productToSave.type);
        formData.append("model", productToSave.model);
        formData.append("upcEan", productToSave.upcEan);
        formData.append("processor", productToSave.processor);
        formData.append("memoryRam", productToSave.memoryRam);
        formData.append("graphicCard", productToSave.graphicCard);
        formData.append("storage1", productToSave.storage1);
        formData.append("storage2", productToSave.storage2);
        formData.append("screen", productToSave.screen);
        formData.append("keypad", productToSave.keypad);
        formData.append("numKeypad", productToSave.numKeypad);
        formData.append("os", productToSave.os);
        formData.append("cardReader", productToSave.cardReader);
        formData.append("webCam", productToSave.webCam);
        formData.append("usb", productToSave.usb);
        formData.append("lan", productToSave.lan);
        formData.append("wiFi", productToSave.wiFi);
        formData.append("bluetooth", productToSave.bluetooth);
        formData.append("vga", productToSave.vga);
        formData.append("hdmi", productToSave.hdmi);
        formData.append("displayPort", productToSave.displayPort);
        formData.append("weight", productToSave.weight.toString());
        formData.append("warranty", productToSave.warranty);

        if (images) {
            // Append images to FormData
            for (let i = 0; i < images.length; i++) {
                formData.append("images", images[i]);
            }
        };

        const { ok, message } = await createUpdateNotebook(formData);

        if (!ok) {
            toast.error(
                message?.includes('code') ? "El código ya existe" : message, { position: "bottom-right" });
            return;
        };

        // If the product was created or updated successfully
        toast.success(message, { position: "bottom-right" });
        router.replace("/admin/productos/notebooks");
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
                            <option value="6de535c3-d811-41b2-8b6f-60929a10f353">Notebook</option>
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
                                validNotebookBrands.map(brand => (
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
                            <span>UpcEan</span>
                            <input
                                type="text"
                                className="p-2 border rounded-md bg-slate-200 text-slate-800"
                                {...register("upcEan", { required: true })}
                            />
                        </div>
                        <div className="flex flex-col mb-2 w-full">
                            <span>Modelo</span>
                            <input
                                type="text"
                                className="p-2 border rounded-md bg-slate-200 text-slate-800"
                                {...register("model", { required: true })}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row justify-between items-center gap-2">
                        <div className="flex flex-col mb-2 w-full">
                            <span>Procesador</span>
                            <select
                                className="p-2 border rounded-md bg-slate-200 text-slate-800 capitalize"
                                {...register("processor", { required: true })}
                            >
                                <option value="">[Seleccione]</option>
                                {
                                    validNotebookProcessors.map(opt => (
                                        <option key={opt} className="capitalize" value={opt}>{opt}</option>
                                    ))
                                }
                            </select>
                        </div>

                        <div className="flex flex-col mb-2 w-full">
                            <span>Memoria ram</span>
                            <select
                                className="p-2 border rounded-md bg-slate-200 text-slate-800 capitalize"
                                {...register("memoryRam", { required: true })}
                            >
                                <option value="">[Seleccione]</option>
                                {
                                    validNotebookRamMemories.map(opt => (
                                        <option key={opt} className="capitalize" value={opt}>{opt}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row justify-between items-center gap-2">
                        <div className="flex flex-col mb-2 w-full">
                            <span>Sistema operativo</span>
                            <select
                                className="p-2 border rounded-md bg-slate-200 text-slate-800 capitalize"
                                {...register("os", { required: true })}
                            >
                                <option value="">[Seleccione]</option>
                                {
                                    validNotebookOs.map(os => (
                                        <option key={os} className="capitalize" value={os}>{os}</option>
                                    ))
                                }
                            </select>
                        </div>

                        <div className="flex flex-col mb-2 w-full">
                            <span>Tarjeta gráfica</span>
                            <select
                                className="p-2 border rounded-md bg-slate-200 text-slate-800 capitalize"
                                {...register("graphicCard", { required: true })}
                            >
                                <option value="">[Seleccione]</option>
                                {
                                    validNotebookGraphicMemories.map(opt => (
                                        <option key={opt} className="capitalize" value={opt}>{opt}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row justify-between items-center gap-2">
                        <div className="flex flex-col mb-2 w-full">
                            <span>Almacenamiento 1</span>
                            <select
                                className="p-2 border rounded-md bg-slate-200 text-slate-800 capitalize"
                                {...register("storage1", { required: true })}
                            >
                                <option value="">[Seleccione]</option>
                                {
                                    validNotebookStorage1.map(opt => (
                                        <option key={opt} className="capitalize" value={opt}>{opt}</option>
                                    ))
                                }
                            </select>
                        </div>

                        <div className="flex flex-col mb-2 w-full">
                            <span>Almacenamiento 2</span>
                            <select
                                className="p-2 border rounded-md bg-slate-200 text-slate-800 capitalize"
                                {...register("storage2", { required: true })}
                            >
                                <option value="">[Seleccione]</option>
                                {
                                    validNotebookStorage2.map(opt => (
                                        <option key={opt} className="capitalize" value={opt}>{opt}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row justify-between items-center gap-2">
                        <div className="flex flex-col mb-2 w-full">
                            <span>Pantalla</span>
                            <select
                                className="p-2 border rounded-md bg-slate-200 text-slate-800 capitalize"
                                {...register("screen", { required: true })}
                            >
                                <option value="">[Seleccione]</option>
                                {
                                    validNotebookScreens.map(opt => (
                                        <option key={opt} className="capitalize" value={opt}>{opt}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row justify-between items-center gap-2">
                        <div className="flex flex-col mb-2 w-full">
                            <span>Peso (en gramos)</span>
                            <input
                                type="text"
                                className="p-2 border rounded-md bg-slate-200 text-slate-800"
                                {...register("weight", { required: true })}

                            />
                        </div>

                        <div className="flex flex-col mb-2 w-full">
                            <span>Tipo</span>
                            <select
                                className="p-2 border rounded-md bg-slate-200 text-slate-800 capitalize"
                                {...register("type", { required: true })}
                            >
                                <option value="">[Seleccione]</option>
                                {
                                    validNotebookTypes.map(opt => (
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
                                <span>Garantía</span>
                                <div className="flex flex-wrap gap-2">
                                    {
                                        validNotebookOptions.map(opt => (
                                            <label key={opt} className="cursor-pointer capitalize">
                                                <input
                                                    type="radio"
                                                    value={opt}
                                                    checked={getValues("warranty") === opt}
                                                    {...register("warranty", { required: true })}
                                                    className="cursor-pointer mr-1"
                                                />
                                                {opt}
                                            </label>
                                        ))
                                    }
                                </div>
                            </div>

                            <div className="flex flex-col my-2 w-full">
                                <span>WiFi</span>
                                <div className="flex flex-wrap gap-2">
                                    {
                                        validNotebookWifi.map(opt => (
                                            <label key={opt} className="cursor-pointer capitalize">
                                                <input
                                                    type="radio"
                                                    value={opt}
                                                    checked={getValues("wiFi") === opt}
                                                    {...register("wiFi", { required: true })}
                                                    className="cursor-pointer mr-1"
                                                />
                                                {opt}
                                            </label>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row justify-between items-center gap-2">
                            <div className="flex flex-col my-2 w-full">
                                <span>Lan</span>
                                <div className="flex flex-wrap gap-2">
                                    {
                                        validNotebookLan.map(opt => (
                                            <label key={opt} className="cursor-pointer capitalize">
                                                <input
                                                    type="radio"
                                                    value={opt}
                                                    checked={getValues("lan") === opt}
                                                    {...register("lan", { required: true })}
                                                    className="cursor-pointer mr-1"
                                                />
                                                {opt}
                                            </label>
                                        ))
                                    }
                                </div>
                            </div>

                            <div className="flex flex-col my-2 w-full">
                                <span>Web cam</span>
                                <div className="flex flex-wrap gap-2">
                                    {
                                        validNotebookWebCams.map(opt => (
                                            <label key={opt} className="cursor-pointer capitalize">
                                                <input
                                                    type="radio"
                                                    value={opt}
                                                    checked={getValues("webCam") === opt}
                                                    {...register("webCam", { required: true })}
                                                    className="cursor-pointer mr-1"
                                                />
                                                {opt}
                                            </label>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row justify-between items-center gap-2">
                            <div className="flex flex-col my-2 w-full">
                                <span>Bluetooth</span>
                                <div className="flex flex-wrap gap-2">
                                    {
                                        validNotebookBluetooth.map(opt => (
                                            <label key={opt} className="cursor-pointer capitalize">
                                                <input
                                                    type="radio"
                                                    value={opt}
                                                    checked={getValues("bluetooth") === opt}
                                                    {...register("bluetooth", { required: true })}
                                                    className="cursor-pointer mr-1"
                                                />
                                                {opt}
                                            </label>
                                        ))
                                    }
                                </div>
                            </div>

                            <div className="flex flex-col my-2 w-full">
                                <span>Teclado</span>
                                <div className="flex flex-wrap gap-2">
                                    {
                                        validNotebookKeypads.map(opt => (
                                            <label key={opt} className="cursor-pointer capitalize">
                                                <input
                                                    type="radio"
                                                    value={opt}
                                                    checked={getValues("keypad") === opt}
                                                    {...register("keypad", { required: true })}
                                                    className="cursor-pointer mr-1"
                                                />
                                                {opt === 'espanol' ? 'español' : opt}
                                            </label>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="flex  justify-between items-center gap-2">
                            <div className="flex flex-col my-2 w-full">
                                <span>Teclado numérico</span>
                                <div className="flex flex-wrap gap-2">
                                    {
                                        validNotebookOptions.map(opt => (
                                            <label key={opt} className="cursor-pointer capitalize">
                                                <input
                                                    type="radio"
                                                    value={opt}
                                                    checked={getValues("numKeypad") === opt}
                                                    {...register("numKeypad", { required: true })}
                                                    className="cursor-pointer mr-1"
                                                />
                                                {opt}
                                            </label>
                                        ))
                                    }
                                </div>
                            </div>

                            <div className="flex flex-col my-2 w-full">
                                <span>Lector de tarjetas</span>
                                <div className="flex flex-wrap gap-2">
                                    {
                                        validNotebookOptions.map(opt => (
                                            <label key={opt} className="cursor-pointer capitalize">
                                                <input
                                                    type="radio"
                                                    value={opt}
                                                    checked={getValues("cardReader") === opt}
                                                    {...register("cardReader", { required: true })}
                                                    className="cursor-pointer mr-1"
                                                />
                                                {opt}
                                            </label>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between items-center gap-2">
                            <div className="flex flex-col my-2 w-full">
                                <span>HDMI</span>
                                <div className="flex flex-wrap gap-2">
                                    {
                                        validNotebookOptions.map(opt => (
                                            <label key={opt} className="cursor-pointer capitalize">
                                                <input
                                                    type="radio"
                                                    value={opt}
                                                    checked={getValues("hdmi") === opt}
                                                    {...register("hdmi", { required: true })}
                                                    className="cursor-pointer mr-1"
                                                />
                                                {opt}
                                            </label>
                                        ))
                                    }
                                </div>
                            </div>

                            <div className="flex flex-col my-2 w-full">
                                <span>VGA</span>
                                <div className="flex flex-wrap gap-2">
                                    {
                                        validNotebookOptions.map(opt => (
                                            <label key={opt} className="cursor-pointer capitalize">
                                                <input
                                                    type="radio"
                                                    value={opt}
                                                    checked={getValues("vga") === opt}
                                                    {...register("vga", { required: true })}
                                                    className="cursor-pointer mr-1"
                                                />
                                                {opt}
                                            </label>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row justify-between items-center gap-2">
                            <div className="flex flex-col my-2 w-full">
                                <span>Display port</span>
                                <div className="flex flex-wrap gap-2">
                                    {
                                        validNotebookOptions.map(opt => (
                                            <label key={opt} className="cursor-pointer capitalize">
                                                <input
                                                    type="radio"
                                                    value={opt}
                                                    checked={getValues("displayPort") === opt}
                                                    {...register("displayPort", { required: true })}
                                                    className="cursor-pointer mr-1"
                                                />
                                                {opt}
                                            </label>
                                        ))
                                    }
                                </div>
                            </div>

                            <div className="flex flex-col my-2 w-full">
                                <span>USB</span>
                                <div className="flex flex-wrap">
                                    {validNotebookUsb.map((opt) => (
                                        <div
                                            key={opt}
                                            onClick={() => handleRadioChange("usb", opt)}
                                            className={clsx(
                                                "p-2 border cursor-pointer rounded-md mr-2 mb-2 min-w-fit transition-all text-center",
                                                {
                                                    "bg-secondary text-white": (getValues("usb") ?? "").includes(opt),
                                                }
                                            )}
                                        >
                                            <span className="capitalize">{opt}</span>
                                        </div>
                                    ))}
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
                </div>
                {isValid && <p className="text-end w-full text-sm text-emerald-500">El formulario está listo para enviar</p>}
            </div>
        </form>
    );
};