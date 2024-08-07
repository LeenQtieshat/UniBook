import React from 'react';
import { Layout, Typography, Card, Divider, Image } from 'antd';
import Header from "../../components/Header";

const { Title, Paragraph } = Typography;
const { Content } = Layout;

const AboutUs = () => (
  <>
    <Header />
    <Layout style={{ padding: '0 150px', minHeight: '100vh', marginTop: "50px", background: "#fff" }}>
      <Content style={{ padding: '24px', margin: 0, minHeight: 280 }}>
        {/* Image Section */}
        <Image
          width="100%"
          src="/uni.jpeg" // Replace with your image URL
          alt="Library Overview"
          style={{ marginBottom: '24px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
          preview={false}
        />
        
        <Title level={2}>About Us</Title>
        <Paragraph>
          The Faculty of Engineering Technology in Jordan relies heavily on its library as a vital source of academic support for both instructors and students. The Marka, Amman campus library provides a vast array of books, reference materials, and scientific periodicals across a wide range of engineering and technology disciplines. Students may access an abundance of knowledge in fields like industrial engineering, chemical engineering, mechanical engineering, civil engineering, and electrical engineering thanks to the thousands of volumes that are available.
        </Paragraph>
        <Paragraph>
          The library offers access to a wide range of electronic databases in addition to physical materials, making it possible for students and researchers to locate scholarly publications and scientific papers relevant to their work. The library has state-of-the-art resources, such as computer stations for researching and gaining access to digital materials. The library is equipped with Wi-Fi so patrons may stay connected and take full advantage of the digital resources accessible to them.
        </Paragraph>
        <Paragraph>
          Through its many support services, the library also contributes significantly to academic progress. Regular training sessions and workshops are held to assist students in becoming proficient researchers and maximizing the use of the library's resources. New students are given orientation seminars to make sure they are familiar with the resources and know how to use them efficiently.
        </Paragraph>
        <Paragraph>
          The library's operating hours are tailored to align with the academic calendar, providing sufficient time for students to study, carry out research, and make use of the resources available. In order to satisfy the changing requirements of its patrons, the library constantly works to improve its collection and services, creating a welcoming and resource-rich environment for the Faculty of Engineering Technology's instructional and research purposes.
        </Paragraph>
        <Divider />
        <Title level={3}>Events at the Library</Title>
        <Card bordered={false}>
          <Title level={4}>First Book Fair</Title>
          <Paragraph>
            <strong>Central Library Unit working with the Greater Amman Municipality</strong>
            <br />
            January 14, 2024, a Sunday
          </Paragraph>
          <Paragraph>
            The Free Book Fair opened under the auspices of Al-Balqa Applied University President Professor Dr. Ahmed Fakhri Al-Ajlouni. The Sawsanah Creative Cultural Forum, the Greater Amman Municipality, and the Central Library Unit's Electronic Department collaborated to arrange the event. Professor Dr. Saeed Abu Rumman, Assistant President, and Dr. Thamer Al-Shoubaki, Director of the Public Libraries Department at the Greater Amman Municipality, attended the ceremony, which took place at the Central Library Unit building. In keeping with the university's mission to serve the community by collaborating with its many institutions, the president of the university underlined the significance of having the fair on campus. Dr. Al-Ajlouni praised the Greater Amman Municipality's and cultural groups' contributions to the advancement of the cultural movement.
          </Paragraph>
          <Paragraph>
            By giving away free books to locals, employees, and university students, Professor Dr. Othman Ubaydat, Director of the Library Unit, emphasized the value of these events in raising awareness of the value of reading.
          </Paragraph>
          <Paragraph>
            The Sawsanah Creative Cultural Forum and the Greater Amman Municipality participated in the fair, which showcased a fresh and varied selection of publications in a range of subject areas, including children's books, law, philosophy, social sciences, and literature.
          </Paragraph>
        </Card>
      </Content>
    </Layout>
  </>
);

export default AboutUs;
