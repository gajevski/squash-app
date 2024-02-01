import { Racket } from "./racket";

export interface User {
    id: number;
    username: string;
    image: string;
    racket: Racket;
}