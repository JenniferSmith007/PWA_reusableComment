import './style.css'

import commentComponent from './Components/commentComponent'
import style from './Components/style'




if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
  }