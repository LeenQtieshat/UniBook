import React, { useState,useContext } from "react";
import Sidebare from "../sidebare";
import Search from "../search";
import BookCards from "../bookcards";

function BookList() {
  const [term, setTerm] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");
  
  console.log('this is the sort by',sortBy)
  console.log("this is the term",term)
  return (
    <div style={{ display: "flex" }}>
      {/* Sidebare */}
      <div style={{ width: "305px" }}>
        <Sidebare set setTerm={setTerm} />
      </div>

      {/*search bar */}
      <div style={{ width: "calc(100% - 305px)" }}>
        <Search setSortBy={setSortBy} term={term} setSearchTerm={setSearchTerm} />
        <BookCards sortBy={sortBy} term={term} searchTerm={searchTerm} />
      </div>
    </div>
  );
}

export default BookList;
