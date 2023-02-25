import axios from 'axios';
import { PokeAPIResponse } from '../interfaces/apiResponse.interface';
export class Pokemones{
    constructor(public id: number, public name: string){}
    
    async getTypes(){
        const {data} = await axios.get<PokeAPIResponse>('https://pokeapi.co/api/v2/pokemon/24');
        console.log(`Type-> ${data.types[0].type.name}`);
    }
    
    async getMoves(){
        const {data} = await axios.get<PokeAPIResponse>('https://pokeapi.co/api/v2/pokemon/24');
        console.log(`Move-> ${data.moves[0].move.name}`);   
        return data.moves

    }
    async getAbilities(){
        const {data} = await axios.get<PokeAPIResponse>('https://pokeapi.co/api/v2/pokemon/24');
        console.log(`Avilities-> ${data.abilities[0].ability.name}`);
    }   
}
export const arbok = new Pokemones(24, 'Arbok');
//Arbok con el mentodo getMoves
console.log(arbok.getMoves());
//Arbok con el mentodo getTypes
console.log(arbok.getTypes());
//Arbok con el mentodo getTypes
console.log(arbok.getAbilities());


// getCharacterOfApi{
//     Moves 
// 	types
// 	Abilities
// }

