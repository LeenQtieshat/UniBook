import React from "react";
import { Layout as antdLayout } from "antd";

import AuthProvider from "../../context/auth/authContext";

const { Content } = antdLayout;

const Layout = ({ children }) => {
  //   const { user = null, authLogin, authLogout, isAuthenticated } = useAuth();

  return (
    <>
      <AuthProvider>
        <Content
          style={{
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </AuthProvider>
    </>
  );
};

export default Layout;
