



class Draw {
    constructor() {

        this.canvas = document.getElementById('canvas')
        this.ctx = this.canvas.getContext('2d')
        this.press = false
        this.initEvents()
    }

    initEvents() {
        this.canvas.addEventListener('mousedown', (event) => this.mousedown(event))
        this.canvas.addEventListener('mouseup', (event) => this.mouseup(event))
        this.canvas.addEventListener('mousemove', (event) => this.mousemove(event))

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
        this.ctx.stroke()
    }

}

new Draw()