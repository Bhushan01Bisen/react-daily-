import './App.css'
import { GetPost } from './Compnnent/Ajax/GetPost'
import { Footer } from './Compnnent/Footer/Footer'
import { Header } from './Compnnent/Header/Header'
import { Home } from './Compnnent/Home/Home'
import {Menu } from './Compnnent/Menu/Menu'

function App() {
 

  return (
    <>
       <Header/>
       <Footer/>
       <GetPost/>
        <Menu/>
        {/* <Home/>h */}
    </>
  )
}

export default App
