import './Header.css'

class Header {
  create(container, headerText) {
    const h1 = document.createElement('h1')
    h1.innerText = headerText
    h1.className = 'header'
    container.appendChild(h1)
  }
}

export default new Header()
