import './App.css'
import { GetPost } from './Compnnent/Ajax/GetPost'
import { Footer } from './Compnnent/Footer/Footer'
import { Header } from './Compnnent/Header/Header'
import { Home } from './Compnnent/Home/Home'
import {Menu } from './Compnnent/Menu/Menu'
import {IsMobileProvider} from './Compnnent/MobileContext/IsMobileContext'

function App() {
 

  return (
    <>
    <IsMobileProvider>
    <Header/>
       <Footer/>
       <GetPost/>
        <Menu/>
    </IsMobileProvider>
     
        {/* <Home/>h */}
        
    </>
  )
}

export default App
