import { events } from "./events.js"
import { VirtualCanvas } from "./virtualCanvas.js"


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

        this.virt = new VirtualCanvas(this.ctx)

        this.initEvents()
    }


    initEvents() {
        this.canvas.addEventListener('mousedown', (event) => this.mousedown(event))
        this.canvas.addEventListener('mouseup', (event) => this.mouseup(event))
        this.canvas.addEventListener('mousemove', (event) => this.mousemove(event))

        events.on('change_color', color => this.ctx.strokeStyle = color)
        events.on('change_size', size => this.ctx.lineWidth = size)

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
        this.ctx.lineCap = 'round'
        this.ctx.stroke()


    }
}