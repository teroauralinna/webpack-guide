import '@scss/index.scss'

import { 
  header, 
  text, 
  image, 
  link, 
  container
} from '@components'

import webpackLogo from '@img/webpack.svg'
import nodejsLogo from '@img/nodejs.png'

const el = container.create(document.body)

header.create(el, 'Setting up webpack 4')
text.create(el, 'This is the demo app for the webpack 4 tutorial.')
link.create(el, 'Read more at Auralinna.blog', 'https://auralinna.blog/post/2018/setting-up-webpack-4-for-a-project?utm_source=demo-app')
link.create(el, 'Demo app is available at GitHub', 'https://github.com/teroauralinna/webpack-guide')
image.create(el, webpackLogo, 'https://webpack.js.org/')
image.create(el, nodejsLogo, 'https://nodejs.org/en/')
