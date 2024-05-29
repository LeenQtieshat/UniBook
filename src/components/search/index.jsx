import React, { useState } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./style.css";
function Searchbare({ term, setSearchTerm }) {
  return (
    <div style={{ margin: "25px auto", maxWidth: "500px" }}>
      <Input
        prefix={
          <SearchOutlined
            style={{ color: "#fff", fontSize: "20px", border: "none" }}
          />
        }
        placeholder={`Search for ${term}`}
        style={{ background: "#8B7D49", borderRadius: "15px", padding: "7px" }}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default Searchbare;
