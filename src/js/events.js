
export class Event {

    constructor() {
        this.list = {}
    }

    on(name, method) {
        if (!this.list[name]) this.list[name] = []
        this.list[name].push(method)
    }

    off(name, method) {
        if (!this.list[name]) this.list[name] = []
        this.list[name] = this.list[name].filter(func => func != method)
    }

    call(name, ...data) {
        if (!this.list[name]) return
        this.list[name].forEach(func => func(...data))
    }

    clear(name) {
        if (!this.list[name]) return
        this.list[name] = []
    }

    delete() {
        for (let i in this.list) {
            delete this.list[i]
        }
    }
}

export const events = new Event()
