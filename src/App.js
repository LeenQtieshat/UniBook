import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./screens/home";
import Profile from "./screens/profile";
import Research from "./screens/research";
import { Routes, Route } from "react-router-dom";
import Search from "./screens/search";
import "./App.css";
import NewPost from "./screens/newPost";
import ResearchDetails from "./components/researchDetails"
import BookReservation from "./screens/bookBook";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/booklist" element={<Search />} />
        <Route path="/category" element={<Research />} />
        <Route path="/research-proposal" element={<NewPost />} />
        <Route path="/research/:researchId" element={<ResearchDetails />} />
        <Route path="/booklist/book/:bookId" element={<BookReservation />} />

      </Routes>
    </>
  );
};
export default App;
