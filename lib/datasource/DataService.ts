import { Categorie } from "./models/Categories";

export class DataService {
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