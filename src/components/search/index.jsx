import React, { useState } from "react";
import { Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./style.css";
function Searchbare({ term, setSearchTerm, setSortBy }) {
  return (
    <div style={{ margin: "25px auto", maxWidth: "500px" }}>
      <Input
        prefix={
          <SearchOutlined
            style={{ color: "#fff", fontSize: "20px", border: "none" }}
          />
        }
        placeholder={`Search using the ${term}`}
        style={{ background: "#8B7D49", borderRadius: "15px", padding: "7px" }}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div style={{ marginTop: "10px", display : 'flex', justifyContent : 'center' }}>
        <Button onClick={() => setSortBy('rate')} type="link" style={{ marginRight: "10px" }}>
          Sort by Rate
        </Button>
        <Button onClick={() => setSortBy('reservation')} type="link">Sort by Reservation Count</Button>
      </div>
    </div>
  );
}

export default Searchbare;
