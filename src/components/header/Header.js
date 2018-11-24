import './Header.css'

class Header {
  create(header) {
    const h1 = document.createElement('h1');
    h1.innerText = header
    h1.className = 'header'
    document.body.appendChild(h1);
  }
}

export default new Header()
