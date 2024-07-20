import React, { useState } from 'react';
import { Card, Layout, Typography, Divider, Input, Button } from 'antd';
import Header from "../Header"
const {  Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;

const initialProposals = [
    {
      title: "Artificial Intelligence in Healthcare: Enhancing Diagnosis and Treatment",
      authors: "Jane Smith, Michael Johnson",
      date: "2023-11-15",
      abstract: "This research investigates the impact of artificial intelligence (AI) on healthcare, particularly in improving diagnostic accuracy and treatment efficiency. The study aims to explore the integration of AI technologies in clinical settings and evaluate their effectiveness in enhancing patient outcomes.",
      background: "The integration of AI in healthcare is rapidly evolving. AI technologies have the potential to transform various aspects of healthcare delivery, from diagnostics to personalized treatment plans. However, the adoption of AI in healthcare faces several challenges, including ethical considerations, data privacy concerns, and the need for robust regulatory frameworks. AI has already demonstrated capabilities in image recognition, natural language processing, and predictive analytics, all of which are pertinent to healthcare applications.",
      problem: "Despite the potential benefits, the integration of AI in healthcare is hindered by a lack of comprehensive studies that assess its impact on clinical outcomes. There is a need for empirical research that evaluates the effectiveness of AI in real-world clinical settings. Specific problems include the variability in AI performance across different populations, the potential for bias in AI algorithms, and the integration of AI into existing healthcare workflows.",
      questions: "1. How can AI improve diagnostic accuracy in healthcare?\n2. What are the ethical and privacy considerations associated with the use of AI in healthcare?\n3. How effective is AI in personalizing treatment plans for patients?\n4. What are the barriers to the implementation of AI technologies in clinical practice?\n5. How do healthcare professionals perceive the use of AI in their practice?",
      objectives: "1. To evaluate the impact of AI on diagnostic accuracy in clinical settings.\n2. To identify the ethical and privacy challenges associated with AI in healthcare.\n3. To assess the effectiveness of AI in personalizing treatment plans for patients.\n4. To analyze the barriers to AI implementation in healthcare.\n5. To explore healthcare professionals' perceptions of AI.",
      significance: "This study is significant because it provides empirical evidence on the benefits and challenges of integrating AI in healthcare. The findings can inform healthcare practitioners, policymakers, and AI developers about the potential and limitations of AI technologies in improving patient outcomes. The research aims to contribute to the development of guidelines and best practices for the ethical and effective use of AI in healthcare.",
      literature: "Several studies have demonstrated the potential of AI in healthcare. For instance, a study by Esteva et al. (2017) showed that AI algorithms could achieve dermatologist-level accuracy in skin cancer classification. Another study by Rajpurkar et al. (2017) highlighted the ability of AI to identify pneumonia from chest X-rays with high accuracy. More recent research by Topol (2019) discusses the broader implications of AI for healthcare, including improvements in diagnostic accuracy, workflow efficiencies, and patient outcomes. However, there is still a need for comprehensive studies that assess the real-world impact of AI in diverse clinical settings.",
      design: "This research will use a mixed-methods design, combining quantitative and qualitative approaches. Quantitative data will be collected through a randomized controlled trial (RCT) to evaluate the impact of AI on diagnostic accuracy. Qualitative data will be gathered through interviews with healthcare professionals to explore their perspectives on the ethical and privacy considerations of AI.",
      population: "The study population will include healthcare professionals (e.g., doctors, nurses) and patients from multiple healthcare institutions. A sample size of 200 participants will be selected for the quantitative phase, and 20 healthcare professionals will be interviewed for the qualitative phase.",
      dataCollection: "Quantitative data will be collected through diagnostic tests and AI-assisted diagnostic tools. Qualitative data will be collected through semi-structured interviews with healthcare professionals. All data will be anonymized to protect participants' privacy. Additionally, surveys will be conducted to gather broader insights from a larger group of healthcare professionals regarding their experiences and perceptions of AI.",
      dataAnalysis: "Quantitative data will be analyzed using statistical methods such as t-tests and regression analysis. Qualitative data will be analyzed using thematic analysis to identify common themes and patterns related to the ethical and privacy considerations of AI in healthcare. Advanced analytics, including machine learning techniques, will be used to identify trends and correlations within the data.",
      ethics: "Ethical considerations include obtaining informed consent from all participants, ensuring data privacy and confidentiality, and addressing any potential conflicts of interest. The study will be reviewed and approved by an institutional review board (IRB) to ensure ethical compliance. Special attention will be given to the ethical implications of AI in healthcare, such as bias, fairness, and transparency.",
      results: "Preliminary results indicate that AI-assisted diagnostic tools significantly improve diagnostic accuracy compared to traditional methods. The qualitative analysis reveals that healthcare professionals are generally optimistic about the potential of AI but express concerns about data privacy and the need for clear regulatory guidelines. Further analysis will provide a detailed understanding of the effectiveness of AI across different clinical scenarios and patient demographics.",
      discussion: "The discussion will focus on interpreting the findings in the context of existing literature and the implications for clinical practice. The potential benefits of AI in healthcare include improved diagnostic accuracy, personalized treatment plans, and increased efficiency. However, the research also highlights the need for addressing ethical and privacy concerns and developing robust regulatory frameworks to ensure the responsible use of AI in healthcare.",
      conclusion: "The study concludes that AI has a positive impact on diagnostic accuracy and treatment efficiency in healthcare. However, successful integration of AI requires addressing ethical, privacy, and implementation challenges. The research provides valuable insights for healthcare practitioners, policymakers, and AI developers on the effective and ethical use of AI in clinical practice.",
      references: "1. Esteva, A., Kuprel, B., Novoa, R. A., Ko, J., Swetter, S. M., Blau, H. M., & Thrun, S. (2017). Dermatologist-level classification of skin cancer with deep neural networks. Nature, 542(7639), 115-118.\n2. Rajpurkar, P., Irvin, J., Zhu, K., Yang, B., Mehta, H., Duan, T., ... & Ng, A. Y. (2017). CheXNet: Radiologist-level pneumonia detection on chest X-rays with deep learning. arXiv preprint arXiv:1711.05225.\n3. Topol, E. (2019). Deep Medicine: How Artificial Intelligence Can Make Healthcare Human Again. Basic Books.",
      appendices: "Appendix A: Survey Questionnaire\nAppendix B: Interview Guide\nAppendix C: Data Collection Tools",
      acknowledgements: "The authors acknowledge the support of the National Institute of Health (NIH), the participating healthcare institutions, and all study participants.",
      feedback: [
        { studentId: "S123", feedback: "This is a well-structured research proposal." },
        { studentId: "S124", feedback: "The abstract provides a clear overview of the research." },
        { studentId: "S125", feedback: "I appreciate the comprehensive literature review and detailed methodology." },
        { studentId: "S126", feedback: "The ethical considerations section is thorough and well-articulated." }
      ]
    },
    // Add more objects as needed
  ];
  

const ProposalsPosts = () => {
  const [proposals, setProposals] = useState(initialProposals);
  const [newFeedback, setNewFeedback] = useState(proposals.map(() => ({ studentId: '', feedback: '' })));

  const handleAddFeedback = (index) => {
    if (newFeedback[index].studentId && newFeedback[index].feedback) {
      const updatedProposals = proposals.map((proposal, i) => {
        if (i === index) {
          return {
            ...proposal,
            feedback: [...proposal.feedback, newFeedback[index]]
          };
        }
        return proposal;
      });

      setProposals(updatedProposals);
      setNewFeedback(newFeedback.map((feedback, i) => (i === index ? { studentId: '', feedback: '' } : feedback)));
    }
  };

  return (
    <Layout className="layout">
      <Header />
      <Content style={{ padding: '0 50px',}}>
        <div className="site-layout-content">
          {proposals.map((proposal, index) => (
            <Card
              key={index}
              title={<span style={{ color:"#918350", fontSize: '18px', fontWeight: 'bold' }}>{proposal.title}</span>}
              style={{
                marginBottom: '20px',
                borderRadius: '10px',
                border: 'none'
              }}
            >
              <div style={{ padding: '10px', background: '#fff', borderRadius: '10px' }}>
                <Paragraph>
                  <Text strong> 
                   <h5 style={{color:"#918350"}}> Author(s)</h5> </Text>{proposal.authors}
                </Paragraph>
              
                <Paragraph>
                  <Text strong><h5 style={{color:"#918350"}}>Date</h5> </Text>{proposal.date}
                </Paragraph>
             <Divider/>
                <Paragraph>
                  <Text strong><h5 style={{color:"#918350"}}>Abstract</h5>  </Text>
                  <div style={{ padding: '10px', borderRadius: '5px' }}>
                    {proposal.abstract}
                  </div>
                </Paragraph>
               
                <Paragraph>
                  <Text strong> <h5 style={{color:"#918350"}}>Background Information</h5> </Text>
                  <div style={{ padding: '10px', borderRadius: '5px' }}>
                    {proposal.background}
                  </div>
                </Paragraph>
              
                <Paragraph>
                  <Text strong><h5 style={{color:"#918350"}}>Problem Statement</h5>  </Text>
                  <div style={{ padding: '10px', borderRadius: '5px' }}>
                    {proposal.problem}
                  </div>
                </Paragraph>
              
                <Paragraph>
                  <Text strong><h5 style={{color:"#918350"}}>Research Questions or Hypotheses: </h5> </Text>
                  <div style={{ padding: '10px', borderRadius: '5px' }}>
                    {proposal.questions}
                  </div>
                </Paragraph>
               
                <Paragraph>
                  <Text strong><h5 style={{color:"#918350"}}>Objectives of the Study</h5>  </Text>
                  <div style={{ padding: '10px', borderRadius: '5px' }}>
                    {proposal.objectives}
                  </div>
                </Paragraph>
               
                <Paragraph>
                  <Text strong><h5 style={{color:"#918350"}}> Significance of the Study</h5> </Text>
                  <div style={{ padding: '10px', borderRadius: '5px' }}>
                    {proposal.significance}
                  </div>
                </Paragraph>
               
                <Paragraph>
                  <Text strong> <h5 style={{color:"#918350"}}> Literature Review: </h5></Text>
                  <div style={{ padding: '10px', borderRadius: '5px' }}>
                    {proposal.literature}
                  </div>
                </Paragraph>
            
                <Paragraph>
                  <Text strong> <h5 style={{color:"#918350"}}>Research Design</h5> </Text>
                  <div style={{ padding: '10px', borderRadius: '5px' }}>
                    {proposal.design}
                  </div>
                </Paragraph>
          
                <Paragraph>
                  <Text strong><h5 style={{color:"#918350"}}> Population and Sample</h5> </Text>
                  <div style={{ padding: '10px', borderRadius: '5px' }}>
                    {proposal.population}
                  </div>
                </Paragraph>
             
                <Paragraph>
                  <Text strong><h5 style={{color:"#918350"}}>Data Collection Methods: </h5> </Text>
                  <div style={{ padding: '10px', borderRadius: '5px' }}>
                    {proposal.dataCollection}
                  </div>
                </Paragraph>
           
                <Paragraph>
                  <Text strong><h5 style={{color:"#918350"}}>Data Analysis Techniques: </h5> </Text>
                  <div style={{ padding: '10px', borderRadius: '5px' }}>
                    {proposal.dataAnalysis}
                  </div>
                </Paragraph>
            
                <Paragraph>
                  <Text strong><h5 style={{color:"#918350"}}>Ethical Considerations: </h5> </Text>
                  <div style={{ padding: '10px', borderRadius: '5px' }}>
                    {proposal.ethics}
                  </div>
                </Paragraph>
               
                <Paragraph>
                  <Text strong><h5 style={{color:"#918350"}}> Results</h5> </Text>
                  <div style={{ padding: '10px', borderRadius: '5px' }}>
                    {proposal.results}
                  </div>
                </Paragraph>
              
                <Paragraph>
                  <Text strong><h5 style={{color:"#918350"}}>Discussion: </h5> </Text>
                  <div style={{ padding: '10px', borderRadius: '5px' }}>
                    {proposal.discussion}
                  </div>
                </Paragraph>
               
                <Paragraph>
                  <Text strong><h5 style={{color:"#918350"}}>Conclusion: </h5> </Text>
                  <div style={{ padding: '10px', borderRadius: '5px' }}>
                    {proposal.conclusion}
                  </div>
                </Paragraph>
                <Paragraph>
                  <Text strong><h5 style={{color:"#918350"}}> References</h5> </Text>
                  <div style={{ padding: '10px', borderRadius: '5px' }}>
                    {proposal.references}
                  </div>
                </Paragraph>
                <Paragraph>
                  <Text strong><h5 style={{color:"#918350"}}> Appendices</h5> </Text>
                  <div style={{ padding: '10px', borderRadius: '5px' }}>
                    {proposal.appendices}
                  </div>
                </Paragraph>
                <Paragraph>
                  <Text strong><h5 style={{color:"#918350"}}> Acknowledgements</h5> </Text>
                  <div style={{ padding: '10px', borderRadius: '5px' }}>
                    {proposal.acknowledgements}
                  </div>
                </Paragraph>
                <Divider />
                <Paragraph>
                  <Text strong><h5 style={{color:"#918350"}}> Feedback</h5></Text>
                  {proposal.feedback.map((feedback, idx) => (
                    <div key={idx} style={{ marginTop: '10px', background: '#9183502b', padding: '10px', borderRadius: '5px' }}>
                      <Text strong>Student ID: </Text>{feedback.studentId}<br />
                      <Text strong>Feedback: </Text>{feedback.feedback}
                    </div>
                  ))}
                  <div style={{ marginTop: '20px' }}>
                    <Input
                      placeholder="Student ID"
                      value={newFeedback[index].studentId}
                      onChange={(e) => {
                        const updatedFeedback = [...newFeedback];
                        updatedFeedback[index].studentId = e.target.value;
                        setNewFeedback(updatedFeedback);
                      }}
                      style={{ marginBottom: '10px' }}
                    />
                    <Input.TextArea
                      placeholder="Feedback"
                      value={newFeedback[index].feedback}
                      onChange={(e) => {
                        const updatedFeedback = [...newFeedback];
                        updatedFeedback[index].feedback = e.target.value;
                        setNewFeedback(updatedFeedback);
                      }}
                      rows={4}
                      style={{ marginBottom: '10px' }}
                    />
                    <Button
                      type="primary"
                      onClick={() => handleAddFeedback(index)}
                    >
                      Add Feedback
                    </Button>
                  </div>
                </Paragraph>
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
