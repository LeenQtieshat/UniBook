import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./screens/home";
import Profile from "./screens/profile";
import Research from "./screens/research";
import { Routes, Route } from "react-router-dom";
import Search from "./screens/search";
import "./App.css";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Profile />} />
        <Route path="/booklist" element={<Search />} />
        <Route path="/category" element={<Research />} />
      </Routes>
    </>
  );
};
export default App;
