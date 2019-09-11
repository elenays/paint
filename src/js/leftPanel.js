

export class LeftPanel {

    constructor() {
        this.dom = document.createElement('div')
        this.dom.className = 'leftPanel'
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
        const sizeSmall = document.createElement('div')
        sizeSmall.className = 'size small'
        sizeSmall.addEventListener('click', () => {
            this.setSize(small)
        })
        // ─────────────────────────────────────────────────────────────────
        const sizeBig = document.createElement('div')
        sizeBig.className = 'size big'
        // ─────────────────────────────────────────────────────────────────
        const sizePanel = document.createElement('div')
        sizePanel.className = 'size-panel'
        sizePanel.appendChild(sizeSmall)
        sizePanel.appendChild(sizeBig)
    }

    setSize() {

    }
}
