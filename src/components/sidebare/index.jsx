import React, { useEffect, useState } from "react";
import { checkIfCurrentUserIsDoctor } from "../../firebase/doctors";
import { Button, Menu } from "antd";
import { BookOutlined, ArrowLeftOutlined } from "@ant-design/icons";

import styles from "./style.module.css";
import { useNavigate } from "react-router";
function Sidebare({ setTerm, researchPage }) {
  const router = useNavigate();
  const [isUserDoctor, setIsUserDoctor] = useState(false);

  const checkCurrentUser = async () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      const isUserDoctor = await checkIfCurrentUserIsDoctor(userData.email);
      setIsUserDoctor(isUserDoctor);
    }
  };

  useEffect(() => {
    checkCurrentUser();
  }, []);

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
    {
      key: "Back",
      label: "Back",
      icon: <ArrowLeftOutlined />,
      onClick: () => window.history.back(),
    },
  ];
  const researchItem = [
    {
      key: "Back",
      label: "Back",
      icon: <ArrowLeftOutlined />,
      onClick: () => window.history.back(),
    },
  ];

  if (isUserDoctor) {
    researchItem.unshift(
      ...[
        {
          key: "add",
          label: "Research Proposal",
          icon: <BookOutlined />,
          onClick: () => router("/research-proposal"),
        },
        {
          key: "Edit Proposal",
          label: "Edit Proposal",
          icon: <BookOutlined />,
          onClick: () => router("/edit-proposal"),
        },
      ]
    );
  }

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
        items={researchPage ? researchItem : items}
        className={styles.menu}
        style={{ width: "305px", height: "calc( 100vh - 50px)" }}
      />
    </div>
  );
}

export default Sidebare;
