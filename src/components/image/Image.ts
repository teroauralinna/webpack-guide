import './Image.css'

class Image {
  create(container: HTMLElement, image: string, link: string) {
    const img = document.createElement('img')
    img.src = image
    img.className = 'image'

    if (link) {
      const a = document.createElement('a')
      a.href = link
      a.appendChild(img)
      container.appendChild(a)
    } else {
      container.appendChild(img)
    }
  }
}

export default new Image()
