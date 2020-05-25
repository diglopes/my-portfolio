export default class {
    constructor(ElementHandler, classname) {
        this.ElementHandler = ElementHandler
        this.classname = classname
        this.showById = this.showById.bind(this)
    }

    showById(id) {
        const currentVisibleContent = this.ElementHandler.getByClass(this.classname)        
        const newContent = this.ElementHandler.getById(id)
        currentVisibleContent.classList.remove(this.classname)
        newContent.classList.add(this.classname)
    }
}