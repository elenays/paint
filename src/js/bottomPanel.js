import config from "./config.js"




export class BottomPanel {

    constructor() {
        this.dom = document.createElement('div')
        this.dom.className = 'bottomPanel'
        this.colorPanel = document.createElement('div')
        this.colorPanel.className = 'colorPanel'
        this.dom.appendChild(this.colorPanel)
        this.build()
    }

    buildColor(color) {
        const colorBlock = document.createElement('div')
        colorBlock.className = 'color'
        colorBlock.style.background = color
        colorBlock.addEventListener('click', () => {
            this.select(color)
        })

        return colorBlock
    }

    build() {
        const colors = ['#000', '#787878', '#790300', '#757a01', '#007902', '#007778', '#007778',
            '#7b0077', '#767a38', '#003637', '#286ffe', '#083178', '#4c00fe', '#783b00',
            '#fff', '#bbbbbb', '#ff0e00', '#faff08', '#00ff0b', '#00feff', '#3400fe',
            '#ff00fe', '#fbff7a', '#00ff7b', '#76feff', '#8270fe', '#ff0677', '#ff7d36'
        ]

        colors.forEach((color) => {
            this.colorPanel.appendChild(this.buildColor(color))
        })
    }

    select(color) {
        config.color = color
        console.log(config.color)
    }

}