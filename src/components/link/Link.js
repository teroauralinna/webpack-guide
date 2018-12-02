import './Link.scss'

class Link {
  create(container, text, href) {
    const a = document.createElement('a')
    a.innerText = text
    a.className = 'linktext__link'
    a.href = href
    
    const p = document.createElement('p')
    p.className = 'linktext'
    p.appendChild(a)
    container.appendChild(p)
  }
}

export default new Link()
