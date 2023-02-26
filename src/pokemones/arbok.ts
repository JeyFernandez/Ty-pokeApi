import axios from 'axios';
import { ArbokAPIResponse } from '../interfaces/arbokResponse.interface';
export class PokemonArbok{
    constructor(public id: number, public name: string){}
    
    async getTypes(){
        const {data} = await axios.get<ArbokAPIResponse>('https://pokeapi.co/api/v2/pokemon/24');
        console.log(`Arbok Type-> ${data.types[0].type.name}`);
    }
    
    async getMoves(){
        const {data} = await axios.get<ArbokAPIResponse>('https://pokeapi.co/api/v2/pokemon/24');
        console.log(`Arbok Move-> ${data.moves[0].move.name}`);   
        return data.moves

    }
    async getAbilities(){
        const {data} = await axios.get<ArbokAPIResponse>('https://pokeapi.co/api/v2/pokemon/24');
        console.log(`Arbok Avilities-> ${data.abilities[0].ability.name}`);
    }   
}
export const arbok = new PokemonArbok(24, 'Arbok');

console.log(arbok.getMoves());
console.log(arbok.getTypes());
console.log(arbok.getAbilities());


// getCharacterOfApi{
//     Moves 
// 	types
// 	Abilities
// }

