//my-app/src/authProvider.js
import { MsalAuthProvider, LoginType } from "react-aad-msal";

// Msal Configurations
const config = {
  auth: {
    authority: "https://login.microsoftonline.com/common",
    clientId: "1a5baf84-db5e-4a67-96f1-ebb76315201c",
    redirectUri: "http://localhost:3000/",
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: true,
  },
};

// Authentication Parameters
const authenticationParameters = {
  scopes: ["user.read"],
};

// Options
const options = {
  loginType: LoginType.Popup,
  tokenRefreshUri: window.location.origin + "/auth.html",
};

export const authProvider = new MsalAuthProvider(
  config,
  authenticationParameters,
  options
);
