import { useState } from "react"
import { ArtListStates } from "./ArtListStates"
import { ArtListsEvents } from "./ArtListsEvents";


const ArtListsCtrl = ()=>{
    const [] = useState<ArtListStates>(

    )
};
const eventsHandler = (action : ArtListsEvents)=>{
    switch(action){
        case ArtListsEvents.RecupererArticles:
            break;
        case ArtListsEvents.RecupererCategories:
            break;
    }
}

export default ArtListsCtrl