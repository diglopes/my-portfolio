export default class Listener {

    add(type, elements = [], cb) {
        if(window && document) {
            elements.forEach(el => {
                el.addEventListener(type, cb)
            })
        }
    }
}