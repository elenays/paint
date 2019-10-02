import config from "./config.js"


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
            config.color = color
        })

        return colorBlock
    }

    build() {
        const colors = ['#000', '#787878', '#790300', '#757a01', '#007902', '#007778', '#0a0078',
            '#7b0077', '#767a38', '#003637', '#286ffe', '#083178', '#4c00fe', '#783b00',
            '#fff', '#bbbbbb', '#ff0e00', '#faff08', '#00ff0b', '#00feff', '#3400fe',
            '#ff00fe', '#fbff7a', '#00ff7b', '#76feff', '#8270fe', '#ff0677', '#ff7d36'
        ]

        colors.forEach((color) => {
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