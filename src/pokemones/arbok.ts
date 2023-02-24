import axios from 'axios';
import { PokeAPIResponse, Move } from '../interfaces/apiResponse.interface';
export class Pokemones{
    constructor(public id: number, public name: string){}
    
    async getMoves(){
        const {data} = await axios.get<PokeAPIResponse>('https://pokeapi.co/api/v2/pokemon/24');
        console.log(data.moves[0].move.name);   
    }
}
export const arbok = new Pokemones(24, 'Arbok')
console.log(arbok.getMoves());


// getCharacterOfApi{
//     Moves 
// 	types
// 	Abilities
// }

