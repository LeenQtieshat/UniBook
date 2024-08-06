import BookList from "../../components/bookList";
import React, { useContext, useEffect } from "react";
import { useNavigate } from 'react-router';
import {AuthContext} from "../../context/auth/authContext"
function Search() {
  const {isAuthenticated} = useContext(AuthContext)
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
