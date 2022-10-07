import './style.css'
import formDomSetup from './Components/formDomSetup'
import commentComponent from './Components/commentComponent'

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}

// document.querySelector('#show').addEventListener('click', () => {
//   const iconUrl = document.querySelector('select').selectedOptions[0].value;
//   let imgElement = document.createElement('img');
//   imgElement.src = iconUrl;
//   document.querySelector('#container').appendChild(imgElement);
// });

