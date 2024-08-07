import React,{useContext} from "react";
import "./style.css";
import Header from "../../components/Header";
import {AuthContext} from "../../context/auth/authContext"
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS



function Home() {
  const {isAuthenticated} = useContext(AuthContext)
  const showAlert = () => {
    toast.success('You have to login first!', {
      position: "top-right", // Position the toast at the top-right
      autoClose: 3000, // Auto-close after 3 seconds
      hideProgressBar: false, // Show progress bar
      closeOnClick: true, // Close on click
      pauseOnHover: true, // Pause on hover
      draggable: true, // Allow dragging
      className: 'custom-toast', // Apply custom styling
    });
  };
  return (
    <>
      <Header />
      <div className="homeContainer">
    

        <div id="overlay"></div>
        <div className="homeContent">
          <h1>Welcome to our online library.</h1>
          <p>
            Dive into a world of knowledge, where books await to enlighten and
            inspire you. Enjoy!
          </p>
          {isAuthenticated?  <button className="button"> <Link to="/booklist" style={{color:"#fff"}}>Get Started</Link></button> :<button onClick={showAlert}>Get Started</button> }
         
        </div>
      </div>
    </>
  );
}

export default Home;
