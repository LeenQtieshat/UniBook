import React, { useState } from 'react';
import { Layout, Menu, Input, DatePicker, Button, Form, Row, Col } from 'antd';

import './FilterProposals.css';

const { Header, Content, Footer } = Layout;
const { RangePicker } = DatePicker;

const FilterProposals = ({ onFilter }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Filter Values:', values);
    onFilter(values);
  };

  return (
    <Layout className="layout " style={{background:"f0f2f5"}}>
      
      <Content style={{ margin: '0 50px', }}>
        <div className="site-layout-content filtrationLayout">
          <Form form={form} layout="vertical" onFinish={onFinish}>
            <Row gutter={16}>
              <Col span={8}>
                <Form.Item label="Doctor's Name" name="doctorName">
                  <Input placeholder="Enter doctor's name" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Research Name" name="researchName">
                  <Input placeholder="Enter research name" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Date of Publish" name="dateOfPublish">
                  <RangePicker style={{ width: '100%' }} />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ backgroundColor: '#4096ff', borderColor: '#4096ff' }}>
                Filter
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Content>
    
    </Layout>
  );
};

export default FilterProposals;
