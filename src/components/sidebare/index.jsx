import React from "react";

import { Menu } from "antd";
import { BookOutlined } from "@ant-design/icons";

import styles from "./style.module.css";
function Sidebare({ setTerm }) {
  const onClick = (e) => {
    setTerm(e.key);
  };

  const items = [
    {
      key: "Author",
      label: "Author",
      icon: <BookOutlined />,
    },
    {
      key: "Book Name",
      label: "Book Name",
      icon: <BookOutlined />,
    },
    ,
    {
      key: "Calling Code",
      label: "Calling Code",
      icon: <BookOutlined />,
    },
  ];
  return (
    <div className={styles.sidebareContainer}>
      <div
        style={{ fontSize: "30px", textAlign: "center", marginBottom: "30px" }}
      >
        BookList
      </div>
      <div
        style={{ fontSize: "18px", paddingLeft: "30px", marginBottom: "20px" }}
      >
        Filter
      </div>
      <Menu
        onClick={onClick}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
        className={styles.menu}
        style={{ width: "305px", height: "100vh" }}
      />
    </div>
  );
}

export default Sidebare;
