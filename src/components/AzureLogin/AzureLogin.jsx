import React from "react";
import MicrosoftLogin from "react-microsoft-login";

export default (props) => {
  const authHandler = (err, data) => {
  };

  return (
    <MicrosoftLogin
      clientId={"7bfc34bb-5b36-4006-bc49-46457d4cb065"}
      authCallback={authHandler}
    />
  );
};
