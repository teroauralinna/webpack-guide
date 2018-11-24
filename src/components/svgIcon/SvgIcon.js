import './SvgIcon.css'

class SvgIcon {
  create(icon) {
    const img = document.createElement('img');
    img.src = icon;
    img.className = 'svg-icon'
    document.body.appendChild(img);
  }
}

export default new SvgIcon()
