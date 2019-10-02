import { Event } from "./events.js"


export function State(obj = {}) {

    const event = new Event()

    const on = (name, func) => event.on(name, func)
    const off = (name, func) => event.off(name, func)
    const call = (name, ...data) => event.call(name, ...data)

    return new Proxy({
        ...obj,
        on,
        off
    }, {
        set(target, prop, value) {
            target[prop] = value
            call(prop, value)
            return true
        }
    })
}


export const tool = new State({
    selected: null,
    name: '',
    color: '',
    color2: '',
    size: '',
    colors =['#000', '#787878', '#790300', '#757a01', '#007902', '#007778', '#0a0078',
        '#7b0077', '#767a38', '#003637', '#286ffe', '#083178', '#4c00fe', '#783b00',
        '#fff', '#bbbbbb', '#ff0e00', '#faff08', '#00ff0b', '#00feff', '#3400fe',
        '#ff00fe', '#fbff7a', '#00ff7b', '#76feff', '#8270fe', '#ff0677', '#ff7d36'
    ],
})