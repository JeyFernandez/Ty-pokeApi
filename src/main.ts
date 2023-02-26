import './style.css'

import { CheyoApi } from './pokemones/apiCheyo'
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>Mostrando imagen de perrito</h1>
  
  ${CheyoApi.prototype.getImagePerrito()}
`

document.querySelector<HTMLButtonElement>('#counter')!
