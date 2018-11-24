import './src/scss/index.scss'

import { 
  header, 
  text, 
  svgIcon, 
  link 
} from './src/components'

import webpackLogo from '@img/webpack.svg'

header.create('Webpack Tutorial')
text.create('This is the demo app for the webpack tutorial.')
link.create('Read more at Auralinna.blog', 'https://auralinna.blog')
svgIcon.create(webpackLogo)
