import React, { useEffect, useState } from 'react';
import { Card, Layout, Menu, Typography, Divider, Button } from 'antd';
import { Link } from 'react-router-dom';
import { getResearches } from '../../firebase/researches';


const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;



const ProposalsPosts = () => {
  const [researches,setResearches] = useState([])
  useEffect(()=>{
    (async()=>{
      const researches = await getResearches()
      setResearches([...researches])
      
    })()
  },[])
  return (
    <Layout className="layout">
     <Content style={{ padding: '0 50px', }}>
        <div className="site-layout-content">
        
          {researches.map((proposal, index) => (
            <Card headStyle={{background:"rgb(183, 173, 128)"}} key={index}  title={<span style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold' }}>{proposal.title}</span>} style={{ 
  background: "rgb(225, 217, 171)",
  background: "linear-gradient( 90deg, rgba(225, 217, 171, 1) 0%,rgba(139, 125, 73, 1) 35%)",marginBottom: '20px', borderRadius: '10px',background:'rgb(240 240 240 / 24% '}}>
              <div style={{ padding: '10px', background: '#fff', borderRadius: '10px' }}>
                <Paragraph>
                  <Text strong>Author(s): </Text>{proposal.authors}
                </Paragraph>
                <Divider />
                <Paragraph>
                  <Text strong>Date: </Text>{proposal.date}
                </Paragraph>
                <Divider />
                <Paragraph>
                  <Text strong>Abstract: </Text>
                  <div style={{ padding: '10px', borderRadius: '5px' }}>
                    {proposal.abstract}
                  </div>
                </Paragraph>
      
              <Button type='primary'> <Link to={`/research/${proposal.id}`}>See Research</Link> </Button>
              
              </div>
            </Card>
          ))}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Research Proposal Posts ©2024</Footer>
    </Layout>
  );
};

export default ProposalsPosts;
