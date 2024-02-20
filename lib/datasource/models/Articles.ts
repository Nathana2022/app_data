import { Categorie } from "./Categories";


export interface Articles{
    id:number;
    name:string;
    price:number;
    stock:number;
    categorie:Categorie
}