import './style.css'
import formDomSetup from './Components/formDomSetup'
import commentComponent from './Components/commentComponent'


if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}
