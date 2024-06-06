import Footer from "./Footer"
import Navbar from "./Navbar"


const Layout = ({ children }) => {
  return (
    <>
    <div className="d-flex flex-column min-vh-100">
        <header>
            <Navbar/>
        </header>
        <main className="flex-grow-1 d-flex justify-content-center align-itmes-center"> 
            { children }
        </main>
        <footer className="mt-auto">
            <Footer/>
        </footer>
    </div>
    </>
  )
}

export default Layout
