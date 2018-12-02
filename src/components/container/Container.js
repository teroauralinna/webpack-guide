import './Container.css'

class Container {
  create(container) {
    const div = document.createElement('div')
    div.className = 'container'
    container.appendChild(div) 
    return div
  }
}

export default new Container()
