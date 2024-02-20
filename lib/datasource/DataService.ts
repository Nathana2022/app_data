import { Categorie } from "./models/Categories";
import { Articles } from "./models/Articles";

export class DataService {
    static async recuperationArticles(){
        return await new Promise(resolve => {
            setTimeout(() => {
                const responseServeur : Articles[] = [
                    // {
                    //     id: 1,
                    //     name: "Ecolab - Power Fusion"
                    //   }, 
                    //   {
                    //     id: 2,
                    //     name: "Fudge - Cream Fudge"
                    //   }, 
                    //   {
                    //     id: 3,
                    //     name: "Jerusalem Artichoke"
                    //   }, 
                    //   {
                    //     id: 4,
                    //     name: "Eel - Smoked"
                    //   }, 
                    //   {
                    //     id: 5,
                    //     name: "Napkin White - Starched"
                    //   }
                    
                    ];
                resolve(responseServeur);
            }),800
        });
    };

    static async recuperationCategorie(){
        return await new Promise(resolve =>{
            setTimeout(()=> {
                const responseServeur : Categorie[]=[
                    {
                    id: 1,
                    name: "Music"
                  }, 
                  {
                    id: 2,
                    name: "Industrial"
                  },
                   {
                    id: 3,
                    name: "Books"
                  }, 
                  {
                    id: 4,
                    name: "Industrial"
                  }, 
                  {
                    id: 5,
                    name: "Automotive"
                }
                ];
                resolve(responseServeur);
            }),800
        })
    }
}