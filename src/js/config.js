import { events } from "./events.js"

export default new Proxy({
    color: '#000',
    size: '1px'
}, {
    set(target, prop, value) {
        target[prop] = value
        events.call(`change_${ prop }`, value)
        return true
    },
})