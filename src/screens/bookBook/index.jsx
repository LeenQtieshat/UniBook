import { Divider, Flex, Tag ,Button,Modal, DatePicker,Space} from 'antd';

import React from 'react'
import { useParams } from 'react-router-dom';
import {useState, useEffect} from "react"
import "./styles.css"
import { useNavigate } from 'react-router';
import { getBook, reserveBook } from '../../firebase/books';
import Header from "../../components/Header"

const { RangePicker } = DatePicker;



function BookPage() {

  const { bookId } = useParams();
  const [book,setBook] = useState()
   // State to control the visibility of the modal
   const [visible, setVisible] = useState(false);
   // State to store the selected date range
   const [selectedDates, setSelectedDates] = useState([]);
   const navigator = useNavigate()
  const back = () =>{
    navigator("/booklist")}
   const handleConfirm = async () => {
    setVisible(false);
     await reserveBook(bookId,{reservedFrom: selectedDates[0], reservedUntil:selectedDates[1]},JSON.parse(localStorage.getItem("userData")).id)
     localStorage.setItem("reservedBook",JSON.stringify(book))

    navigator("/success-page")
    // Add any additional actions you want to perform on confirmation
  };
 
   // Function to show the modal
   const showModal = () => {
     setVisible(true);
   };
 
   // Function to handle cancel action
   const handleCancel = () => {
     setVisible(false);
   };
 
   // Function to handle date range change
   const handleDateChange = (dates, dateStrings) => {
     setSelectedDates(dateStrings);
   };
 

  
  useEffect(()=>{
    (async()=>{
      const book = await getBook(bookId)
      setBook(book)
    })()
 
  },[bookId])

  return (
    <>    <Header/>
      <div className='bookDetailsContainer'>
  
  <div  className="sidebar" style={{width:"40%", height:"100vh"}}></div>
    <div className='bookCover'>
    <img alt="example" src="/cover.png" height={"400px"}  width={"300px"}/>
    </div>

    <div className='imgDetails'>
    <h3>{book?.author}</h3>
    <h4 className="title">{book?.title}</h4>
    <div>
      <div className="status">  <Tag color="green">Available</Tag></div>
      <div className="instruction">


<h5>University Library Book Reservation Policy</h5> 

<div>The University Library offers a streamlined process for students to reserve books. Please adhere to the following instructions to ensure a smooth and efficient reservation experience:
</div>
<br/>

<ul>
<li>
Eligibility
All currently enrolled students with a valid university ID are eligible to reserve books.
<li>
Guidelines
Loan Period:<br/><br/>

Reserved books follow the standard loan period. Refer to the library’s loan policy for specific details.
<br/>
<br/>Renewals:
Renewals of reserved books are subject to availability and existing reservations by other students.<br/>
<br/>
Late Returns:
Late returns of reserved books will incur standard overdue fines as per the library’s fine policy.

     
</li>

</li>
</ul>


</div>
    </div>
    <div className="reservationSection">
      <div style={{display:"flex","gap":"10px"}}>
      <Button type="primary"  onClick={showModal}>Reserve Book</Button>
      <Button type="primary"  onClick={back}>Back to book list</Button>
      </div>

  <Modal
title="Select Date Range"
visible={visible}
onCancel={handleCancel}
footer={
<Space>
 <Button onClick={handleCancel}>Cancel</Button>
 <Button type="primary" onClick={handleConfirm}>
   Confirm
 </Button>
</Space>
}
  >
    <RangePicker onChange={handleDateChange} />
    <div style={{ marginTop: 16 }}>
      {selectedDates.length > 0 && (
        <div>
          <h4>Selected Dates:</h4>
          <p>Start Date: {selectedDates[0]}</p>
          <p>End Date: {selectedDates[1]}</p>
        </div>
      )}
    </div>
    </Modal>
  </div>
  </div>


</div></>
  
  )
}

export default BookPage