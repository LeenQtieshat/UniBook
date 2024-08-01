import React, { useState,useContext } from "react";
import Sidebare from "../../components/sidebare";
import Proposals from "../../components/proposals";
import Filtration from "../../components/filteration"
import Title from "antd/es/skeleton/Title";
import { AuthContext } from "../../context/auth/authContext";
import { useNavigate } from 'react-router';

function BookList() {
  const [term, setTerm] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const {isAuthenticated} = useContext(AuthContext)
  console.log("🚀 ~ BookList ~ isAuthenticated:", isAuthenticated)
  const navigator = useNavigate()


  if(!isAuthenticated) {
     navigator("/")
   console.log( "----",    navigator("/")
  )
    console.log("rrrrrr")
  }

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebare */}
      <div style={{ width: "305px" }}>
        <Sidebare  researchPage setTerm={setTerm} />
      </div>

      {/*search bar */}
      <div style={{ width: "calc(100% - 305px)" , background:"#fff"}}>
     
      <Title level={2} style={{ textAlign: 'center' }}>Research Proposals</Title>
 <div>
 <Filtration/>
 <Proposals/>
 </div>
 
      </div>
    </div>
  );
}

export default BookList;
