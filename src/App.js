import React from "react";
import Home from "./screens/home";
import Research from "./screens/research";
import { Routes, Route } from "react-router-dom";
import Search from "./screens/search";
import "./App.css";
import NewPost from "./screens/newPost";
import ResearchDetails from "./components/researchDetails"
import BookReservation from "./screens/bookBook";
import Profile from "../src/screens/profile"
import Success from "../src/screens/success"
import EditResearchProposal from "./components/EditResearchProposal"
import YourResearches from "./screens/editProposal";
import AboutUS from "./screens/aboutus";
import { ToastContainer, toast } from 'react-toastify';


const App = () => {
  
  return (
    <>
          <ToastContainer className="toast-container"/>

      <Routes>
    
        <Route path="/research" element={<Research />} />
        <Route path="/booklist" element={<Search />} />
        <Route path="/research-proposal" element={<NewPost />} />
        <Route path="/research/:researchId" element={<ResearchDetails />} />
        <Route path="/success-page" element={<Success />} />

        <Route path="/booklist/book/:bookId" element={<BookReservation />} />
        <Route path="/profile" element={<Profile  />} />
    <Route path="/edit-proposal" element={<YourResearches/>}/>
  <Route path="/edit-proposal/:id" element={<EditResearchProposal/>}/>
  <Route path="/aboutus" element={<AboutUS/>}/>
          <Route path="/" element={<Home />} />


      </Routes>
    </>
  );
};
export default App;
