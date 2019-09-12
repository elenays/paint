import config from "./config.js"


export class LeftPanel {

    constructor() {
        this.dom = document.createElement('div')
        this.dom.className = 'left-panel'

        this.buildSize()
    }

    buildEraser() {
        const eraserTool = document.createElement('div')
        eraserTool.className = 'tool eraser'
        this.dom.appendChild(eraserTool)
        eraserTool.addEventListener('click', () => {
            this.eraserWork()
        })
    }

    eraserWork() {
        const eraser = document.createElement('canvas')
        this.ctx = eraser.getContext('2d')
        this.ctx.fillRect(x, y, width, height)
    }

    buildSize() {

        const sizePanel = document.createElement('div')
        sizePanel.className = 'size-panel'
        this.dom.appendChild(sizePanel)

        const sizeBrush = [1, 5, 10, 30]

        sizeBrush.forEach((size) => {
            sizePanel.appendChild(this.setSize(size))
        })

    }

    setSize(size) {
        const sizeBlock = document.createElement('div')
        sizeBlock.className = 'size'
        sizeBlock.addEventListener('click', () => {
            config.size = size
        })

        return sizeBlock
    }
}
