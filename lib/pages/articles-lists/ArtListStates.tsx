import { Articles } from "../../datasource/models/Articles";
import { Categorie } from "../../datasource/models/Categories";

export interface ArtListStates{
    listDesArticles : Articles[];
    listCategorie: Categorie[];
    categorieSelectionne : Categorie|null;
}