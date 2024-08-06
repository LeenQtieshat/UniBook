import React, { useEffect, useState } from 'react';
import { Card, Layout, Typography, Divider, Input, Button } from 'antd';
import Header from "../Header"
import { addResearchComment, getResearch } from '../../firebase/researches';
import { useNavigate, useParams } from 'react-router-dom';

const {  Content, Footer } = Layout;
const {  Paragraph, Text } = Typography;



const BookDetails = () => {
  // const [newFeedback, setNewFeedback] = useState(proposals.map(() => ({ studentId: '', feedback: '' })));
  const [comments,setComments] = useState([])
  const [comment,setComment] = useState()
  const [research,setResearch] = useState()
  const { researchId } = useParams();
  const navigator = useNavigate()


useEffect(()=>{
  (async()=>{
   const research =  await getResearch(researchId)
   console.log("🚀 ~ research:", research)
   setComments(research.comments?research.comments  : [])
   setResearch(research)})()
},[])

  const handleAddFeedback = async () => {
 
    await addResearchComment(researchId,JSON.parse(localStorage.getItem("userData")).id,comment.comment)
    setComments([...comments,comment])
  };

  return (
    <Layout className="layout">
      <Header />
      <Content style={{ padding: '0 50px',}}>
        <div className="site-layout-content">
      
            <Card
              // key={index}
              title={<span style={{ color:"#918350", fontSize: '18px', fontWeight: 'bold' }}>{research?.title}</span>}
              style={{
                marginBottom: '20px',
                borderRadius: '10px',
                border: 'none'
              }}
            >
              <div style={{ padding: '10px', background: '#fff', borderRadius: '10px' }}>
                <Paragraph>
                  <Text strong> 
                   <h5 style={{color:"#918350"}}> Author(s)</h5> </Text>{research?.authors}
                </Paragraph>
              
                <Paragraph>
                  <Text strong><h5 style={{color:"#918350"}}>Date</h5> </Text>{research?.date}
                </Paragraph>
             <Divider/>
                <Paragraph>
                  <Text strong><h5 style={{color:"#918350"}}>Abstract</h5>  </Text>
                  <div style={{ padding: '10px', borderRadius: '5px' }}>
                    {research?.abstract}
                  </div>
                </Paragraph>
               
                <Paragraph>
                  <Text strong> <h5 style={{color:"#918350"}}>Background Information</h5> </Text>
                  <div style={{ padding: '10px', borderRadius: '5px' }}>
                    {research?.background}
                  </div>
                </Paragraph>
              
                <Paragraph>
                  <Text strong><h5 style={{color:"#918350"}}>Problem Statement</h5>  </Text>
                  <div style={{ padding: '10px', borderRadius: '5px' }}>
                    {research?.problem}
                  </div>
                </Paragraph>
              
                <Paragraph>
                  <Text strong><h5 style={{color:"#918350"}}>Research Questions or Hypotheses: </h5> </Text>
                  <div style={{ padding: '10px', borderRadius: '5px' }}>
                    {research?.questions}
                  </div>
                </Paragraph>
               
                <Paragraph>
                  <Text strong><h5 style={{color:"#918350"}}>Objectives of the Study</h5>  </Text>
                  <div style={{ padding: '10px', borderRadius: '5px' }}>
                    {research?.objectives}
                  </div>
                </Paragraph>
               
                <Paragraph>
                  <Text strong><h5 style={{color:"#918350"}}> Significance of the Study</h5> </Text>
                  <div style={{ padding: '10px', borderRadius: '5px' }}>
                    {research?.significance}
                  </div>
                </Paragraph>
               
                <Paragraph>
                  <Text strong> <h5 style={{color:"#918350"}}> Literature Review: </h5></Text>
                  <div style={{ padding: '10px', borderRadius: '5px' }}>
                    {research?.literature}
                  </div>
                </Paragraph>
            
                <Paragraph>
                  <Text strong> <h5 style={{color:"#918350"}}>Research Design</h5> </Text>
                  <div style={{ padding: '10px', borderRadius: '5px' }}>
                    {research?.design}
                  </div>
                </Paragraph>
          
                <Paragraph>
                  <Text strong><h5 style={{color:"#918350"}}> Population and Sample</h5> </Text>
                  <div style={{ padding: '10px', borderRadius: '5px' }}>
                    {research?.population}
                  </div>
                </Paragraph>
             
                <Paragraph>
                  <Text strong><h5 style={{color:"#918350"}}>Data Collection Methods: </h5> </Text>
                  <div style={{ padding: '10px', borderRadius: '5px' }}>
                    {research?.dataCollection}
                  </div>
                </Paragraph>
           
                <Paragraph>
                  <Text strong><h5 style={{color:"#918350"}}>Data Analysis Techniques: </h5> </Text>
                  <div style={{ padding: '10px', borderRadius: '5px' }}>
                    {research?.dataAnalysis}
                  </div>
                </Paragraph>
            
                <Paragraph>
                  <Text strong><h5 style={{color:"#918350"}}>Ethical Considerations: </h5> </Text>
                  <div style={{ padding: '10px', borderRadius: '5px' }}>
                    {research?.ethics}
                  </div>
                </Paragraph>
               
                <Paragraph>
                  <Text strong><h5 style={{color:"#918350"}}> Results</h5> </Text>
                  <div style={{ padding: '10px', borderRadius: '5px' }}>
                    {research?.results}
                  </div>
                </Paragraph>
              
                <Paragraph>
                  <Text strong><h5 style={{color:"#918350"}}>Discussion: </h5> </Text>
                  <div style={{ padding: '10px', borderRadius: '5px' }}>
                    {research?.discussion}
                  </div>
                </Paragraph>
               
                <Paragraph>
                  <Text strong><h5 style={{color:"#918350"}}>Conclusion: </h5> </Text>
                  <div style={{ padding: '10px', borderRadius: '5px' }}>
                    {research?.conclusion}
                  </div>
                </Paragraph>
                <Paragraph>
                  <Text strong><h5 style={{color:"#918350"}}> References</h5> </Text>
                  <div style={{ padding: '10px', borderRadius: '5px' }}>
                    {research?.references}
                  </div>
                </Paragraph>
                <Paragraph>
                  <Text strong><h5 style={{color:"#918350"}}> Appendices</h5> </Text>
                  <div style={{ padding: '10px', borderRadius: '5px' }}>
                    {research?.appendices}
                  </div>
                </Paragraph>
                <Paragraph>
                  <Text strong><h5 style={{color:"#918350"}}> Acknowledgements</h5> </Text>
                  <div style={{ padding: '10px', borderRadius: '5px' }}>
                    {research?.acknowledgements}
                  </div>
                </Paragraph>
                <Divider />
                <Paragraph>
                  <Text strong><h5 style={{color:"#918350"}}> Feedback</h5></Text>
                  {comments.map(({comment}, idx) => (
                    <div key={idx} style={{ marginTop: '10px', background: '#9183502b', padding: '10px', borderRadius: '5px' }}>
                   {console.log("comment",comments)}
                      <Text strong>Feedback:<span style={{marginLeft:"5px"}}> {comment}</span> </Text>
                    </div>
                  ))}
                  <div style={{ marginTop: '20px' }}>
                    <Input
                    disabled
                      placeholder="Student ID"
                      value={JSON.parse(localStorage.getItem("userData")).email}
                      onChange={(e) => {
                        // const updatedFeedback = [...newFeedback];
                        // updatedFeedback[index].studentId = e.target.value;
                        // setNewFeedback(updatedFeedback);
                      }}
                      style={{ marginBottom: '10px' }}
                    />
                    <Input.TextArea
                      placeholder="Feedback"
                      // value={newFeedback[index].feedback}
                      onChange={(e) => {
                        // const updatedFeedback = [...newFeedback];
                        // updatedFeedback[index].feedback = e.target.value;
                        // setNewFeedback(updatedFeedback);
                       setComment({comment:e.target.value})
   
                         
                      }}
                      
                      rows={4}
                      style={{ marginBottom: '10px' }}
                    />
                    <Button
                      type="primary"
                      onClick={() => handleAddFeedback(1)}
                    >
                      Add Feedback
                    </Button>
                  </div>
                </Paragraph>
              </div>
            </Card>
        
        </div>
     
              <Button type="primary" style={{ backgroundColor: '#4096ff', borderColor: '#4096ff' }} onClick={()=>navigator("/")}>
                Back to home
              </Button>
           
      </Content>
      <Footer style={{ textAlign: 'center' }}>Research book Posts ©2024</Footer>
    </Layout>
  );
};

export default BookDetails;
