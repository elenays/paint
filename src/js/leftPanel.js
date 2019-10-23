import { tool } from "./config.js"

export class LeftPanel {

    constructor() {
        this.dom = document.createElement('div')
        this.dom.className = 'left-panel'
        this.buildTools()
        this.brush()
        this.buildSize()

        this.sizePanel.hidden = true

    }

    buildTools() {
        this.tools = document.createElement('div')
        this.tools.className = 'tools'
        this.dom.appendChild(this.tools)
    }

    brush() {
        const brush = document.createElement('div')
        brush.className = 'brush'
        this.tools.appendChild(brush)
        brush.addEventListener('click', () => {
            this.sizePanel.hidden = false
        })
    }

    buildSize() {

        this.sizePanel = document.createElement('div')
        this.sizePanel.className = 'size-panel'
        this.dom.appendChild(this.sizePanel)

        const sizeBrush = [1, 5, 10, 30]

        sizeBrush.forEach((size) => {
            this.sizePanel.appendChild(this.setSize(size))
        })

    }

    setSize(size) {
        const sizeContainer = document.createElement('div')
        sizeContainer.className = 'size-container'
        const sizeBlock = document.createElement('div')
        sizeBlock.className = 'size'
        sizeBlock.style.width = `${ size + 5 }px`
        sizeBlock.style.height = `${ size + 5 }px`
        sizeBlock.addEventListener('click', () => tool.size = size)
        sizeContainer.appendChild(sizeBlock)

        return sizeContainer
    }


}