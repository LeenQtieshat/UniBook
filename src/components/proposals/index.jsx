import React, { useEffect, useState } from 'react';
import { Card, Layout, Typography, Divider, Button, Input, Row, Col, Form } from 'antd';
import { Link } from 'react-router-dom';
import { getResearches } from '../../firebase/researches';
import Header from "../../components/Header"

const { Content, Footer } = Layout;
const { Paragraph, Text } = Typography;

const ProposalsPosts = () => {
  const [researches, setResearches] = useState([]);
  const [filteredResearches, setFilteredResearches] = useState([]);
  const [titleFilter, setTitleFilter] = useState('');
  const [authorFilter, setAuthorFilter] = useState('');

  useEffect(() => {
    (async () => {
      const fetchedResearches = await getResearches();
      setResearches(fetchedResearches);
      setFilteredResearches(fetchedResearches);
    })();
  }, []);

  const handleTitleChange = (e) => {
    const value = e.target.value;
    setTitleFilter(value);
    filterResearches(value, authorFilter);
  };

  const handleAuthorChange = (e) => {
    const value = e.target.value;
    setAuthorFilter(value);
    filterResearches(titleFilter, value);
  };

  const filterResearches = (title, author) => {
    const filtered = researches.filter(research =>
      research.title.toLowerCase().includes(title.toLowerCase()) &&
      research.authors.toLowerCase().includes(author.toLowerCase())
    );
    setFilteredResearches(filtered);
  };

  return (
    <>  
    <Header/> 
    <Layout className="layout" style={{paddingTop:"50px"}}>
    <Content style={{ padding: '0 50px' }}>
      <div className="site-layout-content">
        <Form layout="vertical" style={{ marginBottom: '20px' }}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Filter by title">
                <Input
                  placeholder="Enter title"
                  value={titleFilter}
                  onChange={handleTitleChange}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Filter by author">
                <Input
                  placeholder="Enter author"
                  value={authorFilter}
                  onChange={handleAuthorChange}
                />
              </Form.Item>
            </Col>
          </Row>
          <Divider/>
        </Form>
        {filteredResearches.length > 0 ? (
          filteredResearches.map((proposal, index) => (
            <Card
              headStyle={{ background: 'rgb(183, 173, 128)' }}
              key={index}
              title={
                <span style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold' }}>
                  {proposal.title}
                </span>
              }
              style={{
                background: 'rgb(225, 217, 171)',
                background: 'linear-gradient(90deg, rgba(225, 217, 171, 1) 0%, rgba(139, 125, 73, 1) 35%)',
                marginBottom: '20px',
                borderRadius: '10px',
                background: 'rgb(240 240 240 / 24%)',
              }}
            >
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
                <Button type='primary'>
                  <Link to={`/research/${proposal.id}`}>See Research</Link>
                </Button>
              </div>
            </Card>
          ))
        ) : (
          <Paragraph>No research proposals match your search criteria.</Paragraph>
        )}
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Research Proposal Posts ©2024</Footer>
  </Layout></>
  
  );
};

export default ProposalsPosts;
