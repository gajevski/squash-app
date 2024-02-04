import { Activity } from "./activity";
import { Racket } from "./racket";
import { Statistics } from "./statistics";

export interface User {
    id: number;
    username: string;
    image: string;
    racket: Racket;
    statistics: Statistics;
    activities: Activity[];
}