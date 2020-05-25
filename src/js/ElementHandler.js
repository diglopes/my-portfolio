export default class {
    
    static getById(id) {
        return document.getElementById(id)
    }

    static getByClass(className, many = false) {
        const method = many ? 'querySelectorAll' : 'querySelector'
        return document[method](`.${className}`)
    }
}