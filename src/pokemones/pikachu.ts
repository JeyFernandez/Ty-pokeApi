import axios from "axios"
import { PikachuAPIResponse } from '../interfaces/pikachuResponse.interface';
export class PokemonPikachu{
    constructor(public id:number, public name: string){}

    async getMoves(){
        const {data} = await axios.get<PikachuAPIResponse>('https://pokeapi.co/api/v2/pokemon/25')
        console.log(`Pikachu Moves-> ${data.moves[0].move.name}`)
    }
    async getTypes() {
        const {data} = await axios.get<PikachuAPIResponse>('https://pokeapi.co/api/v2/pokemon/25')
        console.log(`Pikachu Types-> ${data.types[0].type.name}`)
    }
    async getAbilities() {
        const {data} = await axios.get<PikachuAPIResponse>('https://pokeapi.co/api/v2/pokemon/25')
        console.log(`Pikachu Abilities-> ${data.abilities[0].ability.name}`)
    }    
}


export const pikachu = new PokemonPikachu(25, 'Pikachu');

console.log(pikachu.getMoves());
console.log(pikachu.getTypes());
console.log(pikachu.getAbilities());
// getCharacterOfApi{
//     Moves 
// 	types
// 	Abilities
// }                                S