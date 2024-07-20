import React, { useState } from "react";
import Sidebare from "../../components/sidebare";
import Proposals from "../../components/proposals";
import Filtration from "../../components/filteration"
import Title from "antd/es/skeleton/Title";

function BookList() {
  const [term, setTerm] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
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
