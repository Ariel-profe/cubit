import { Dispatch, SetStateAction } from "react";

export const handleShowMore = (fn: Dispatch<SetStateAction<any>>, form:{}, limit:number) => {
    fn({
        ...form,
        limit: limit + 10
      })
};