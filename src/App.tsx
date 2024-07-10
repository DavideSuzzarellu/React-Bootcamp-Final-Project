import { Header } from "./components/Header.js"
import { Footer } from "./components/Footer.js"
import { BooksPage } from "./pages/BooksPage.js"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


function App() {

  return (
    <>
      <Header/>
      <BooksPage />
      <ToastContainer />
      <Footer/>
    </>
  )
}


export default App
