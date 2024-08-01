import { Menu } from 'antd';
import {  AppstoreOutlined,UserAddOutlined ,BookFilled,InfoCircleFilled,LikeFilled,IdcardOutlined } from '@ant-design/icons';
import Header from "../../components/Header"
import { useContext, useEffect, useState } from 'react';
import { Segmented ,Popover ,Row, Col, Typography,message,List} from 'antd';
import {AuthContext} from "../../context/auth/authContext"
import { useNavigate } from 'react-router';

const { Title, Text } = Typography;

const App = () => {
  const [books,setBooks] = useState([])
  const [likes,setLikes] = useState([])
  const [comments,setComments] = useState([])
  const [selectedOption, setSelectedOption] = useState('');
  const {isAuthenticated} = useContext(AuthContext)
  const navigator = useNavigate()

  useEffect(()=>{
    setBooks( [
      {
        verticalCode: "BUF34000",
        title: "First year applied mathematics / Norman Cannell.",
        author: "Cannell, Norman.",
        callingCode: "510 CAN",
        publishDate: "1956",
      },
      {
        verticalCode: "BUF34001",
        title:
          "A course of mathematics for engineers and scientists/ Brian H. Chirgwin ; Plumpton, Charles.",
        author: "Chirgwin, Brian H.",
        callingCode: "510 CHI",
        publishDate: "1964",
      },
      {
        verticalCode: "BUF34002",
        title:
          "A course of mathematics for engineers and scientists/ Brian H. Chirgwin and Charles Plumpton.",
        author: "Chirgwin, Brian H.",
        callingCode: "510 CHI",
        publishDate: "1972",
      },
      {
        verticalCode: "BUF34003",
        title:
          "An elementary treatise on the dynamics of a particle and of rigid bodies. / S.L. Loney.",
        author: "LONEY , S. L.",
        callingCode: "620.104 LON",
        publishDate: "1960",
      },
      {
        verticalCode: "BUF34004",
        title: "Calculus and analytic geometry. / William H. Durfee.",
        author: "Durfee , William H.",
        callingCode: "515.15 DUR",
        publishDate: "1971",
      }])
    setLikes( [
      {
        verticalCode: "BUF34000",
        title: "First year applied mathematics / Norman Cannell.",
        author: "Cannell, Norman.",
        callingCode: "510 CAN",
        publishDate: "1956",
      },
      {
        verticalCode: "BUF34001",
        title:
          "A course of mathematics for engineers and scientists/ Brian H. Chirgwin ; Plumpton, Charles.",
        author: "Chirgwin, Brian H.",
        callingCode: "510 CHI",
        publishDate: "1964",
      },
      {
        verticalCode: "BUF34002",
        title:
          "A course of mathematics for engineers and scientists/ Brian H. Chirgwin and Charles Plumpton.",
        author: "Chirgwin, Brian H.",
        callingCode: "510 CHI",
        publishDate: "1972",
      },
      {
        verticalCode: "BUF34003",
        title:
          "An elementary treatise on the dynamics of a particle and of rigid bodies. / S.L. Loney.",
        author: "LONEY , S. L.",
        callingCode: "620.104 LON",
        publishDate: "1960",
      },
      {
        verticalCode: "BUF34004",
        title: "Calculus and analytic geometry. / William H. Durfee.",
        author: "Durfee , William H.",
        callingCode: "515.15 DUR",
        publishDate: "1971",
      }])
    setComments( [
      {
        verticalCode: "BUF34000",
        title: "First year applied mathematics / Norman Cannell.",
        author: "Cannell, Norman.",
        callingCode: "510 CAN",
        publishDate: "1956",
      },
      {
        verticalCode: "BUF34001",
        title:
          "A course of mathematics for engineers and scientists/ Brian H. Chirgwin ; Plumpton, Charles.",
        author: "Chirgwin, Brian H.",
        callingCode: "510 CHI",
        publishDate: "1964",
      },
      {
        verticalCode: "BUF34002",
        title:
          "A course of mathematics for engineers and scientists/ Brian H. Chirgwin and Charles Plumpton.",
        author: "Chirgwin, Brian H.",
        callingCode: "510 CHI",
        publishDate: "1972",
      },
      {
        verticalCode: "BUF34003",
        title:
          "An elementary treatise on the dynamics of a particle and of rigid bodies. / S.L. Loney.",
        author: "LONEY , S. L.",
        callingCode: "620.104 LON",
        publishDate: "1960",
      },
      {
        verticalCode: "BUF34004",
        title: "Calculus and analytic geometry. / William H. Durfee.",
        author: "Durfee , William H.",
        callingCode: "515.15 DUR",
        publishDate: "1971",
      }])
  },[])
  const handleChange = (value) => {
    setSelectedOption(value);

    // Handle the click event based on the selected option
    switch (value) {
      case 'Reserved Books':
        message.info('Reserved Books');
        setDisplayBook(true)
        setDisplayLikes(false)
        setDisplayComments(false)
        // Your code for Reserved Books
        break;
      case 'User Likes':
        message.info('User Likes');
        setDisplayBook(false)
        setDisplayLikes(true)
        setDisplayComments(false)
        // Your code for User Likes
        break;
      case 'User Comments':
        message.info('User Comments');
        setDisplayBook(false)
        setDisplayLikes(false)
        setDisplayComments(true)
        // Your code for User Comments
        break;
      default:
        break;
    }
  };
  const [displayBook,setDisplayBook] = useState(false)
  const [displayComments,setDisplayComments] = useState(false)
  const [displayLikes,setDisplayLikes] = useState(false)
  if(!isAuthenticated) navigator("/")
 return  <> 
  <Header/>
 
<div style={{margin:"auto", width:"80%",display:"flex",justifyContent:"center",marginTop:"100px"}}>
  <div style={{width:"fit-content",borderRadius:"10px",padding:"100px",background:"rgb(225, 217, 171)"}}>
  <Popover
      content={<a >See User details Below</a>}
      title="User Profile"
      trigger="click" 
    >
         <UserAddOutlined style={{ fontSize: '180px',color:"#fff" }}  />
     
    </Popover>
    </div>
  </div>
  <Menu mode="horizontal"  style={{marginTop:"40px",fontSize:"18px"}}>
  <Menu.Item key="profileß" icon={<IdcardOutlined/>} onClick={()=>{
    setDisplayBook(false)
    setDisplayLikes(false)
    setDisplayComments(false)
  }}>
  Profile
    </Menu.Item>
  <Menu.Item key="books" icon={<BookFilled />} onClick={()=>{
    setDisplayBook(true)
    setDisplayLikes(false)
    setDisplayComments(false)
  }}>
  User Books
    </Menu.Item>
  <Menu.SubMenu key="SubMenu" title="Details" icon={<InfoCircleFilled />} >
  <Menu.Item key="three" icon={<LikeFilled />} onClick={()=>{
    setDisplayBook(false)
    setDisplayLikes(true)
    setDisplayComments(false)
  }}>
      Likes
    </Menu.Item>
    <Menu.Item key="two" icon={<AppstoreOutlined />} onClick={()=>{
    setDisplayBook(false)
    setDisplayLikes(false)
    setDisplayComments(true)
  }}>
     Comments
    </Menu.Item>
  
   
  </Menu.SubMenu>
</Menu>
{
  !displayBook && !displayComments && !displayLikes &&
  <div className="container">
  <Row justify="center" align="middle" style={{marginTop:"150px",textAlign:"center"}}>
    <Col>
      <div className="content" style={{color:"rgb(225 217 171 / 81%)"}}>
        <Title level={1} className="heading"  style={{color:"rgb(225 217 171 / 81%)"}}>See User Details</Title>
        <Text className="subtext">
<Segmented value={selectedOption} options={['Reserved Books', 'User Likes', 'User Comments']} style={{background:"rgb(225 217 171 / 81%)"}}       onChange={handleChange}
 />

</Text>
      </div>
    </Col>
  </Row>
</div>
  
}
{
  displayBook &&
  <div style={{ 
    display: 'block', width: "90%", padding: 30, margin:"auto",fontSize:"18px"
  }}> 
     
    <List 
      header={<div> <b>Liked Books </b></div>} 
      bordered 
      dataSource={books.map(book =>book.title)} 
      renderItem={item => ( 
        <List.Item style={{fontSize:"18px"}}> 
          {item} 
        </List.Item> 
      )} 
    /> 
  </div> 
  
}
{
  displayComments &&
   <div style={{ 
    display: 'block', width: "90%", padding: 30, margin:"auto",fontSize:"18px"
  }}> 
     
    <List 
      header={<div> <b>Comments</b></div>} 
      bordered 
      dataSource={books.map(book =>book.title)} 
      renderItem={item => ( 
        <List.Item style={{fontSize:"18px"}} > 
          {item} 
        </List.Item> 
      )} 
    /> 
  </div> 
  
}{
  displayLikes &&
   <div style={{ 
    display: 'block', width: "90%", padding: 30, margin:"auto",fontSize:"18px"
  }}> 
     
    <List 
      header={<div> <b>Reserved Books </b></div>} 
      bordered 
      dataSource={books.map(book =>book.title)} 
      renderItem={item => ( 
        <List.Item style={{fontSize:"18px"}}> 
          {item} 
        </List.Item> 
      )} 
    /> 
  </div> 
  
}

</>
 
}
export default App;