import React, { useState } from "react";
import { Card, Rate,Modal, Button, Layout } from "antd";
import { HeartFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { useNavigate } from "react-router";
const { Meta } = Card;
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  backgroundColor: '#4096ff',
  background: "rgb(225, 217, 171)",
  background: "linear-gradient( 90deg, rgba(225, 217, 171, 1) 0%,rgba(139, 125, 73, 1) 35%)"
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  color: '#000',
  backgroundColor: '#fff',
  paddingTop:"25px"
}

const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
  backgroundColor: '#4096ff',
  background: "rgb(225, 217, 171)",
  background: "linear-gradient( 90deg, rgba(225, 217, 171, 1) 0%,rgba(139, 125, 73, 1) 35%)"
};
const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: "100%"

};

const BookDetails = ({ title, author,id }) => {
  const [cardDetails,setDetails] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigator = useNavigate()
  
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    navigator(`/booklist/book/${id}`)
    
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (<>
   
      <Modal title="Book Details" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText="Book">
        <br/>
      <Layout style={layoutStyle}>
      <Header style={headerStyle}><h2>{author}</h2></Header>
      <Content style={contentStyle}>{title}</Content>
      <Footer style={footerStyle}>Book status: available 
      
      </Footer>
    </Layout>

      </Modal>
  <div style={{ position: "relative" , border:"2px solid rgb(225, 217, 171)", borderLeft:"none",borderRight:"none", borderTop:"none"}} onClick={()=>setDetails(!cardDetails)}>
    <div
      style={{
        position: "absolute",
        top: "10px",
        right: "10px",
        zIndex: "1",
        fontSize: "25px",
        cursor: "pointer",
      }}
    >
      <HeartFilled style={{ color: "#d93c3", verticalAlign: "middle" }} />
    </div>
    <div
      style={{
        position: "absolute",
        top: "20%",
        left: "45%",
        zIndex: "1",
        fontSize: "25px",
        cursor: "pointer",
      }}
    >
     <span  style={{color:"#fff",fontSize:"10px"}}> Title</span>
    </div>
    <Card
      hoverable
      style={{
        width: 230,
      }}
      cover={<img alt="example" src="/book.jpg" height={"210px"} />}
      styles={{ height: "320px" }}
    >
      <Meta
        title={title}
        description={(() => (
          <>
            <div>{author}
              <div style={{fontSize:"20px", color:"GrayText"}}>Available</div>
            </div>
            <div>
              <Rate allowHalf defaultValue={2.5} />
            </div>
            <div><Link onClick={showModal}>   
        See details
     </Link></div>
          </>
        ))()}
      />
    </Card>
  </div>
  </>
)};
export default BookDetails;
