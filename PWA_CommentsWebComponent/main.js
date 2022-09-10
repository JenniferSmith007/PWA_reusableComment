import './style.css'
import formDomSetup from './Components/formDomSetup'
import commentComponent from './Components/commentComponent'



import { registerSW } from 'virtual:pwa-register'

const updateSW = registerSW({
  onNeedRefresh(){
    console.log('please ref');
    updateSW()
  },
  onOfflineReady(){
  console.log('offline')
  },
  onRegistered(){
    console.log('regi')
  },
  onRegisterError(e){
    console.log(e)
    console.log("error")
  }
  
  })