export default class {
    constructor({elements, listener, activeClassName, ElementHandler}) {
        Object.assign(this, { elements, listener, activeClassName, ElementHandler } )
        this.onChangeCallback = null
        this._changeActiveItem = this._changeActiveItem.bind(this)
        this._setListener()
    }

    _setListener() {
        this.listener.add('click', this.elements, this._changeActiveItem)
    }

    _changeActiveItem({ currentTarget }) {
        const { ElementHandler, activeClassName } = this
        const currentActive = ElementHandler.getByClass(activeClassName)       
        currentActive.classList.remove(activeClassName)
        currentTarget.classList.add(activeClassName)
        this.onChangeCallback(currentTarget.dataset.article)        
    }

    onChange(cb) {                
        this.onChangeCallback = cb
    }
}