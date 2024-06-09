import Footer from "./Footer"
import Navbar from "./Navbar"
import React from "react"


const Layout = ({ children }) => {
  return (
    <>
    <div className="d-flex flex-column min-vh-100">
        <header>
            <Navbar/>
        </header>
        <main className="flex-grow-1 d-flex flex-column justify-content-center align-items-center">
          {
            React.Children.map(children, (child, index) => (
              <div key={index} className="mb-4">
                {child}
              </div>
            ))
          }
        </main>
        <footer className="mt-auto">
            <Footer/>
        </footer>
    </div>
    </>
  )
}

export default Layout;
