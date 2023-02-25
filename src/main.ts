import './style.css'
import { arbok } from './pokemones/arbok'
import { Pokemones } from './pokemones/arbok'
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>Hola pokemones</h1>
  <h2>Name: ${arbok.name}</h2>
  <h2>Move: </h2>
`

document.querySelector<HTMLButtonElement>('#counter')!
