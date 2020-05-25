import NavigationMenu from './NavigationMenu'
import Listener from './Listener'
import ElementHandler from './ElementHandler'
import Content from './Content'

import '../scss/main.scss'

const buttons = ElementHandler.getByClass('nav-item', true)
const listener = new Listener()
const content = new Content(ElementHandler, 'show')
const navigationMenu = new NavigationMenu({
    listener,
    elements: buttons,
    activeClassName:  'nav-item--active',
    ElementHandler
})
navigationMenu.onChange(content.showById)