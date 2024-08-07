import { Result, Button } from 'antd';
import Header from "../../components/Header"
import { useNavigate } from 'react-router';

const Success = () =>{
  const book = JSON.parse(localStorage.getItem("reservedBook"))
  const navigator = useNavigate()
  console.log("🚀 ~ Success ~ book:", book)
return<>
<Header/>
<div style={{marginTop:"150px"}}></div>
<Result
status="success"
title="Successfully Reserved the book"
subTitle={<div><p>Dear Student</p>

  Your reservation for the book has been successfully processed.
  
 <br/>
 <br/>
  <ul style={{}}>
  <b>Reservation Details:</b>
    <li> <b>Book Title: </b> {book.title}</li>
    <li> <b> verticalCode: </b>{book.verticalCode}</li>
  </ul>

  <br/>
  <br/>
  <p>You can pick up your reserved book from the Library. Don’t forget to bring your student ID!
  
  
  
  Thank you for using the university library system!</p></div>}



extra={[
  <Button type="primary" key="console" onClick={()=>navigator("/")}>
Back To Home
  </Button>,

]}
/></> }

  export default Success
