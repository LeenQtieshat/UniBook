import React from "react";
import "./style.css";
import Header from "../../components/Header";

function Home() {
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
          <button>Get Started</button>
        </div>
      </div>
    </>
  );
}

export default Home;
