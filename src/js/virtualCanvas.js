

export class VirtualCanvas {
    constructor(originCtx) {
        this.originCtx = originCtx
        this.dom = document.createElement('canvas')
        this.dom.width = 1000
        this.dom.height = 800
        this.ctx = this.dom.getContext('2d')
    }

    save() {
        const canvas = this.originCtx.canvas
        this.dom.width = canvas.width
        this.dom.height = canvas.height
        this.ctx.drawImage(canvas, 0, 0)
    }

    restore() {
        const originCtx = this.originCtx
        originCtx.drawImage(this.dom, 0, 0)
    }

}
