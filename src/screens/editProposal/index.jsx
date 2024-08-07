import React, { useEffect, useState } from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import Header from "../../components/Header"
import { Avatar, Card } from 'antd';
import { getResearches } from '../../firebase/researches';
import { getUser } from '../../firebase/users';
import { Link } from 'react-router-dom';
const { Meta } = Card;
const App = () => {
    const [researches,setResearches] = useState([])
    useEffect(()=>{
      
      (async()=>{
         const {id} = JSON.parse(localStorage.getItem("userData"))
           console.log("🚀 ~ id:", id)
           const allResearches = await getResearches()
     const  doctorResearches =  allResearches?.filter(research => research.doctorId == id)

           setResearches([...doctorResearches])

      })()
    },[])
    return <div>
    <Header/>
    <div style={{margin:"30px",textAlign:"center",cursor:"pointer",display:"flex",gap:"30px"}}>  
        {researches.map(r => <Card
    style={{
      width: 300,
    }}
    cover={
     <div style={{display:"flex","justifyContent":"center"}}> <Link to={`/edit-proposal/${r.id}`}><img alt="example" src="/edit.png" style={{width:"100px",height:"100px"}}/></Link> </div>  
    }
 
  >
    <Meta
      title={r.title}
      description={r.abstract.substring(0,40) + "...."}
    />
  </Card>)}
       </div>
    </div>

};
export default App;