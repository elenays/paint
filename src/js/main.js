import { leftPanel } from "./leftPanel.js"
import { Draw } from "./canvas.js"
import { BottomPanel } from "./bottomPanel.js"


const draw = new Draw()
const bottomPanel = new BottomPanel()


export const paint = document.createElement('div')
paint.className = 'paint'
document.body.appendChild(paint)
paint.appendChild(leftPanel)
paint.appendChild(draw.dom)

document.body.appendChild(bottomPanel.dom)

