import { tool } from "./config.js"


export class BottomPanel {

    constructor() {
        this.dom = document.createElement('div')
        this.dom.className = 'bottom-panel'
        this.colorPanel = document.createElement('div')
        this.colorPanel.className = 'color-panel'
        this.dom.appendChild(this.colorPanel)
        this.build()
        this.save()
    }

    buildColor(color) {
        const colorBlock = document.createElement('div')
        colorBlock.className = 'color'
        colorBlock.style.background = color
        colorBlock.addEventListener('click', () => {
            tool.color = color
        })

        return colorBlock
    }

    build() {
<<<<<<< HEAD
        config.colors.forEach((color) => {
=======


        tool.colors.forEach((color) => {
>>>>>>> 9bde7f14c7cf4b6759efc696b1cda5adcb859ae6
            this.colorPanel.appendChild(this.buildColor(color))
        })
    }


    save() {
        const saveButton = document.createElement('div')
        saveButton.className = 'save-button'
        saveButton.innerHTML = 'Save'
        this.dom.appendChild(saveButton)
        // saveButton.addEventListener('click', () => )
    }

    restore() {
        const restoreButton = document.createElement('div')
        restoreButton.className = 'restore-button'
        this.dom.appendChild(restoreButton)
        //restoreButton.addEventListener('click', () => )
    }

}