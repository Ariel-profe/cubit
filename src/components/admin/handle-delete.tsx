"use client"

import { toast } from "react-toastify";
import { IoTrashOutline, IoWarningOutline } from "react-icons/io5";

import { deleteBudget, deleteProduct, deleteUser } from "@/actions";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, Button } from "@/components";

export const HandleDelete = ({ id, model }: { id: string, model: string }) => {
    const handleDelete = async () => {
        try {
            if (model === "budget") {
                const { message, ok } = await deleteBudget(id);
                if (ok) {
                    toast.success(message, { position: "bottom-right" });
                } else {
                    toast.error(message, { position: "bottom-right" });
                }
            } else if (model === "user") {
                const { message, ok } = await deleteUser(id);
                if (ok) {
                    toast.success(message, { position: "bottom-right" });
                } else {
                    toast.error(message, { position: "bottom-right" });
                }
            } else {
                const { message, ok } = await deleteProduct(id, model);
                if (ok) {
                    toast.success(message, { position: "bottom-right" });
                } else {
                    toast.error(message, { position: "bottom-right" });
                }
            }
        } catch (error) {
            console.error(error);
            return;
        }
    };

    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button variant="link" size="icon">
                        <IoTrashOutline className="text-destructive" />
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>
                            {`¿Deseas eliminar este ${model === "budget" ? "presupuesto" : "producto"}?`}
                        </DialogTitle>
                        <DialogDescription className="flex items-center gap-x-1 text-yellow-500">
                            <IoWarningOutline />
                            Esta acción no se puede deshacer.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancelar</Button>
                        </DialogClose>
                        <Button type="submit" variant="destructive" onClick={handleDelete}>Eliminar</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}
