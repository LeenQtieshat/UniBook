import React, { useState,useContext } from "react";
import Sidebare from "../sidebare";
import Search from "../search";
import BookCards from "../bookcards";

function BookList() {
  const [term, setTerm] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  
  return (
    <div style={{ display: "flex" }}>
      {/* Sidebare */}
      <div style={{ width: "305px" }}>
        <Sidebare setTerm={setTerm} />
      </div>

      {/*search bar */}
      <div style={{ width: "calc(100% - 305px)" }}>
        <Search term={term} setSearchTerm={setSearchTerm} />
        <BookCards term={term} searchTerm={searchTerm} />
      </div>
    </div>
  );
}

export default BookList;
