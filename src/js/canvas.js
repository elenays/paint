import { events } from "./events.js"
import config from "./config.js"


export class Draw {
    constructor() {
        this.dom = document.createElement('div')
        this.dom.className = 'canvas'
        this.canvas = document.createElement('canvas')
        this.canvas.width = 1000
        this.canvas.height = 800
        this.ctx = this.canvas.getContext('2d')
        this.dom.appendChild(this.canvas)
        this.press = false

        this.initEvents()
    }


    initEvents() {
        this.canvas.addEventListener('mousedown', (event) => this.mousedown(event))
        this.canvas.addEventListener('mouseup', (event) => this.mouseup(event))
        this.canvas.addEventListener('mousemove', (event) => this.mousemove(event))

        events.on('change_color', color => this.ctx.strokeStyle = color)
    }

    mousedown({ offsetX, offsetY }) {
        this.press = true
        this.ctx.beginPath()
        this.ctx.moveTo(offsetX, offsetY)
    }

    mouseup() {
        this.press = false
        this.ctx.closePath()
    }

    mousemove({ offsetX, offsetY }) {
        if (!this.press) return
        this.ctx.lineTo(offsetX, offsetY)
        this.ctx.lineWidth = config.size
        this.ctx.stroke()


    }

}