import { Roboto, Montserrat_Alternates } from "next/font/google";

export const roboto = Roboto({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

export const titleFont = Montserrat_Alternates({
    subsets: ["latin"],
    weight: ["500", "700"],
})