export interface Ipokemon {
    id:number;
    name:string;
    attack:number;
    defense:number;
    hp:number;
    img:sprites[]
}

interface sprites{
    back_default:string;
    back_shiny:string;
    front_default:string;
    front_shiny:string;
}
