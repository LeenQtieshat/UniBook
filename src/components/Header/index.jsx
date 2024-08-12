import React, { useContext, useEffect, useState } from "react";
import { Menu } from "antd";
import { AzureAD } from "react-aad-msal";
import { authProvider } from "../../authProvider";
import { Link } from "react-router-dom";
import "./styles.css";
import { SearchOutlined, LoginOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { useNavigate } from "react-router";
import { AuthContext } from "../../context/auth/authContext";
import { checkIfUserExists, addUser, getUser } from "../../firebase/users";

function Nav() {
  const [displayMenu, setDisplay] = useState(false);
  const navigator = useNavigate();
  const authContextConsumer = useContext(AuthContext);
  const setUserDetails = async (accountInfo) => {
    const isExist = await checkIfUserExists(accountInfo.account.userName);
    let userData;
    if (!isExist) {
      userData = await addUser({
        firstName: accountInfo.account.name,
        lastName: accountInfo.account.name,
        email: accountInfo.account.userName,
      });
    } else {
      const res = await getUser(accountInfo.account.userName);
      userData = res;
    }
    localStorage.setItem("userData", JSON.stringify(userData));
  };

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      authContextConsumer.authLogin(userData);
    }
  }, []);

  return (
    <div className="headerContainer">
      <div className="headerLogo">
        <img src="/logo.png" />
      </div>
      <nav className="headerLinks">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
            <li>
              <Link to="/research">Research</Link>
            </li>
          <li>
            <Link to="/booklist">BookList</Link>
          </li>

          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <SearchOutlined />
          </li>
        </ul>
      </nav>
      <div className="headerAvatar">
        <AzureAD provider={authProvider} forceLogin={false}>
          {({ login, logout, authenticationState, accountInfo }) => {
            switch (authenticationState) {
              case "Authenticated": {
                authContextConsumer.authLogin(accountInfo);
                setUserDetails(accountInfo);
                return (
                  <div className="avatarContainer">
                    <p
                      style={{ cursor: "pointer" }}
                      onClick={() => setDisplay(!displayMenu)}
                    >
                      <Avatar
                        style={{ backgroundColor: "#87d068" }}
                        icon={<UserOutlined />}
                        size={"large"}
                        onClick={() => {}}
                      />
                    </p>
                    {displayMenu && (
                      <div className="menu">
                        <Menu
                          mode="inline"
                          theme="dark"
                          // inlineCollapsed={collapsed}
                          items={[
                            {
                              key: "1",
                              label: "Logout",
                            },
                            {
                              key: "2",
                              label: "profile",
                            },
                          ]}
                          onClick={(e) => {
                            if (e.key == 1) {
                              logout();
                              navigator("/");
                              localStorage.removeItem("userData");
                            } else {
                              navigator("/profile");
                            }
                          }}
                        />
                      </div>
                    )}
                  </div>
                );
              }
              case "Unauthenticated":
                localStorage.removeItem("userData");
                return (
                  <div>
                    <p>
                      <LoginOutlined
                        style={{ fontSize: "25px", color: "black" }}
                        onClick={login}
                      />
                    </p>
                  </div>
                );
              case "InProgress":
                return <p>Authenticating...</p>;
            }
          }}
        </AzureAD>
      </div>
    </div>
  );
}

export default Nav;
