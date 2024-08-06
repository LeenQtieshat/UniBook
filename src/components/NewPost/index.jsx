import React,{useEffect, useState} from 'react';
import { Layout, Breadcrumb, Input, Form, Typography, Button, notification } from 'antd';
import './ResearchProposalTemplate.css';
import { Link, useNavigate } from 'react-router-dom';
import { addResearch } from '../../firebase/researches';

const { Content, Footer } = Layout;
const { Title, } = Typography;
const { TextArea } = Input;

const ResearchProposalTemplate = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [showSuccess,setSuccess] = useState(false)
  const navigator = useNavigate()



  const onFinish = async (values) => {
    setSuccess(false)
    setLoading(true)
    const today = new Date();

// Extract the year, month, and day from the Date object
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed, so add 1
const day = String(today.getDate()).padStart(2, '0');

// Format the full date as YYYY-MM-DD
const fullDate = `${year}-${month}-${day}`;
    await addResearch({...values,date:fullDate })
    setLoading(false)
    setSuccess(true)
    form.resetFields()
 
  };
// useEffect(()=>{
//   (async()=>{
//     for(let i = 0;i<proposals.length;i++){
//       const today = new Date();

//       // Extract the year, month, and day from the Date object
//       const year = today.getFullYear();
//       const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed, so add 1
//       const day = String(today.getDate()).padStart(2, '0');
//       const fullDate = `${year}-${month}-${day}`;

//       await addResearch({...proposals[i],date:fullDate})
  
//     }
//   })()

// },[])
  return (
    <> {showSuccess&& ((placement="topLeft") => {
      notification.open({
        message: 'Notification: 🎉',
        description: 'Your research has been successfully submitted! Thank you for your contribution.',
        onClick: () => {
        },
      });
    })()} <Layout className="layout">
  
    <Content style={{ padding: '0 50px', background: 'rgb(225, 217, 171)', background: 'linear-gradient(90deg, rgba(225, 217, 171, 1) 0%,rgba(139, 125, 73, 1) 35%)' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item><Link to="/">Home</Link> </Breadcrumb.Item>
        <Breadcrumb.Item>Research Proposal</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Title>Research Details</Title>
          <Form.Item label="Research Title" name="title" rules={[{ required: true, message: 'Please enter the title of your research' }]}>
            <Input placeholder="Enter the title of your research" />
          </Form.Item>
          <Form.Item label="Author(s) Name(s)" name="authors" rules={[{ required: true, message: 'Please enter the name(s) of the author(s)' }]}>
            <Input placeholder="Enter the name(s) of the author(s)" />
          </Form.Item>

          <Title level={2}>Abstract</Title>
          <Form.Item name="abstract" rules={[{ required: true, message: 'Please write a brief summary of the research' }]}>
            <TextArea rows={4} placeholder="Write a brief summary of the research" />
          </Form.Item>

          <Title level={2}>Introduction</Title>
          <Form.Item name="background" label="Background Information" rules={[{ required: true, message: 'Please provide background information' }]}>
            <TextArea rows={4} placeholder="Provide background information" />
          </Form.Item>
          <Form.Item name="problem" label="Problem Statement" rules={[{ required: true, message: 'Please state the problem' }]}>
            <TextArea rows={2} placeholder="State the problem" />
          </Form.Item>
          <Form.Item name="questions" label="Research Questions or Hypotheses" rules={[{ required: true, message: 'Please list your research questions or hypotheses' }]}>
            <TextArea rows={2} placeholder="List your research questions or hypotheses" />
          </Form.Item>
          <Form.Item name="objectives" label="Objectives of the Study" rules={[{ required: true, message: 'Please state the objectives of your study' }]}>
            <TextArea rows={2} placeholder="State the objectives of your study" />
          </Form.Item>
          <Form.Item name="significance" label="Significance of the Study" rules={[{ required: true, message: 'Please explain the significance of your study' }]}>
            <TextArea rows={2} placeholder="Explain the significance of your study" />
          </Form.Item>

          <Title level={2}>Literature Review</Title>
          <Form.Item name="literature" label="Literature Review" rules={[{ required: true, message: 'Please summarize relevant existing research' }]}>
            <TextArea rows={4} placeholder="Summarize relevant existing research" />
          </Form.Item>

          <Title level={2}>Methodology</Title>
          <Form.Item name="design" label="Research Design" rules={[{ required: true, message: 'Please describe your research design' }]}>
            <TextArea rows={2} placeholder="Describe your research design" />
          </Form.Item>
          <Form.Item name="population" label="Population and Sample" rules={[{ required: true, message: 'Please describe the population and sample' }]}>
            <TextArea rows={2} placeholder="Describe the population and sample" />
          </Form.Item>
          <Form.Item name="dataCollection" label="Data Collection Methods" rules={[{ required: true, message: 'Please describe data collection methods' }]}>
            <TextArea rows={2} placeholder="Describe data collection methods" />
          </Form.Item>
          <Form.Item name="dataAnalysis" label="Data Analysis Techniques" rules={[{ required: true, message: 'Please describe data analysis techniques' }]}>
            <TextArea rows={2} placeholder="Describe data analysis techniques" />
          </Form.Item>
          <Form.Item name="ethics" label="Ethical Considerations" rules={[{ required: true, message: 'Please describe ethical considerations' }]}>
            <TextArea rows={2} placeholder="Describe ethical considerations" />
          </Form.Item>

          <Title level={2}>Results</Title>
          <Form.Item name="results" label="Results" rules={[{ required: true, message: 'Please present your data and findings' }]}>
            <TextArea rows={4} placeholder="Present your data and findings" />
          </Form.Item>

          <Title level={2}>Discussion</Title>
          <Form.Item name="discussion" label="Discussion" rules={[{ required: true, message: 'Please interpret your results' }]}>
            <TextArea rows={4} placeholder="Interpret your results" />
          </Form.Item>

          <Title level={2}>Conclusion</Title>
          <Form.Item name="conclusion" label="Conclusion" rules={[{ required: true, message: 'Please summarize key findings and contributions' }]}>
            <TextArea rows={4} placeholder="Summarize key findings and contributions" />
          </Form.Item>

          <Title level={2}>References</Title>
          <Form.Item name="references" label="References" rules={[{ required: true, message: 'Please list all sources cited in your research' }]}>
            <TextArea rows={4} placeholder="List all sources cited in your research" />
          </Form.Item>

          <Title level={2}>Appendices</Title>
          <Form.Item name="appendices" label="Appendices" rules={[{ required: true, message: 'Please include any additional material such as questionnaires or interview transcripts' }]}>
            <TextArea rows={4} placeholder="Include any additional material such as questionnaires or interview transcripts" />
          </Form.Item>

          <Title level={2}>Acknowledgements</Title>
          <Form.Item name="acknowledgements" label="Acknowledgements" rules={[{ required: true, message: 'Please recognize those who contributed to the research' }]}>
            <TextArea rows={2} placeholder="Recognize those who contributed to the research" />
          </Form.Item>

     

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ backgroundColor: '#4096ff', borderColor: '#4096ff' }} loading={loading}>
              Submit
            </Button>
            <Button onClick={()=>navigator("/research")} style={{marginLeft:"10px"}} >
              Back To Researches
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Research Proposal Template University of Balqa</Footer>
  </Layout></>
  
  );
};

export default ResearchProposalTemplate;
