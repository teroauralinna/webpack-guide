import './Link.css'

class Link {
  create(text, href) {
    const p = document.createElement('p')
    const a = document.createElement('a')
    a.innerText = text
    a.className = 'linktext__link'
    a.href = href
    p.className = 'linktext'
    p.appendChild(a)
    document.body.appendChild(p)
  }
}

export default new Link()
