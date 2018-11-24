import './Text.css'

class Text {
  create(text) {
    const p = document.createElement('p');
    p.innerText = text
    p.className = 'text'
    document.body.appendChild(p);
  }
}

export default new Text()
