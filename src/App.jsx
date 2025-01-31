import React, { useEffect, useState } from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
// import Home from './Pages/Home/Home'

const App = () => {
  


  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };




  return (
    <>
      <button
      onClick={scrollToTop}
      style={{
        display: isVisible ? "block" : "none",
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#F61A25",
        color: "white",
        border: "none",
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        textAlign: "center",
        lineHeight: "50px",
        fontSize: "20px",
        cursor: "pointer",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
        transition: "opacity 0.3s ease",
        zIndex:'10'
      }}
    >
      {/* <i class="fa-solid fa-arrow-up"></i> */}
      <i class="fa-solid fa-angle-up"></i>
    </button>
    <div className="container-fluid p-0">
    <header style={{marginBottom:'100px'}}>
      <Navbar/>
    </header>
    <main>
      <Outlet/>
      <Footer/>
    </main>
    </div>
      {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
      </BrowserRouter> */}

    </>
  )
}

export default App
