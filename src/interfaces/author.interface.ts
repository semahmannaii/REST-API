import { Auth } from "./auth.interface";

export interface Author extends Auth {
    author: string
    gender: "Male" | "Female"
}