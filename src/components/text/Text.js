import './Text.css'

class Text {
  create(container, text) {
    const p = document.createElement('p');
    p.innerText = text
    p.className = 'text'
    container.appendChild(p);
  }
}

export default new Text()
