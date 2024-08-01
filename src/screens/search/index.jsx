import BookList from "../../components/bookList";
import React, { useContext, useEffect } from "react";
import { useNavigate } from 'react-router';
import {AuthContext} from "../../context/auth/authContext"
function Search() {
  const {isAuthenticated} = useContext(AuthContext)
  console.log("🚀 ~ Search ~ isAuthenticated:", isAuthenticated)
  const navigator = useNavigate()
  useEffect(()=>{
    if(!isAuthenticated) navigator("/")
  },[])
  return (
    <div>
      <BookList />
    </div>
  );
}

export default Search;
