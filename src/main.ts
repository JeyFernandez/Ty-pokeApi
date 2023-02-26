import './style.css'
import { arbok } from './pokemones/arbok'
import arbokImg from './img/arbok.png'
import pikachuImg from './img/pikachu.png'
import { pikachu } from './pokemones/pikachu'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div class>
<h1>${arbok.name}</h1>
<img src="${arbokImg}" class="logo vanilla" alt="TypeScript logo" />

<h1>${pikachu.name}</h1>
<img src="${pikachuImg}" class="logo vanilla" alt="TypeScript logo" />
</div>

`

document.querySelector<HTMLButtonElement>('#counter')!
