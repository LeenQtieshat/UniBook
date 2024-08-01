import React from 'react';
import { Card, Layout, Menu, Typography, Divider } from 'antd';


const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;

const proposals = [
  {
    "title": "Research on AI in Healthcare",
    "authors": "John Doe",
    "date": "2024-07-20",
    "abstract": "This research explores the applications of AI in healthcare...",
    "background": "The background of AI in healthcare includes...",
    "problem": "The problem addressed is the lack of integration...",
    "questions": "1. How can AI improve diagnostics?\n2. What are the ethical considerations?",
    "objectives": "The objectives are to identify key areas where AI can assist...",
    "significance": "This study is significant because it highlights...",
    "literature": "Several studies have shown the impact of AI on healthcare...",
    "design": "This research will use a qualitative design...",
    "population": "The population will include healthcare professionals...",
    "dataCollection": "Data will be collected through surveys and interviews...",
    "dataAnalysis": "Data will be analyzed using thematic analysis...",
    "ethics": "Ethical considerations include informed consent...",
    "results": "The results indicate that AI can significantly reduce errors...",
    "discussion": "The discussion will focus on the implications of the results...",
    "conclusion": "The study concludes that AI has a positive impact...",
    "references": "1. Smith, J. (2022). AI in Healthcare. Journal of Medical AI...",
    "appendices": "Appendix A: Survey Questionnaire...",
    "acknowledgements": "The author acknowledges the support of..."
  },
  {
    "title": "Climate Change and Its Impact on Marine Life",
    "authors": "Jane Smith",
    "date": "2024-07-21",
    "abstract": "This study examines the effects of climate change on marine ecosystems...",
    "background": "Marine life is increasingly affected by climate change...",
    "problem": "The problem is the rising temperatures and ocean acidification...",
    "questions": "1. What species are most affected by climate change?\n2. How can we mitigate these effects?",
    "objectives": "To identify the most vulnerable species and propose mitigation strategies...",
    "significance": "Understanding the impact of climate change on marine life is crucial for...",
    "literature": "Extensive research has shown the correlation between climate change and marine health...",
    "design": "A mixed-methods approach will be used...",
    "population": "The study will focus on marine biologists and environmental scientists...",
    "dataCollection": "Data will be gathered through field observations and lab experiments...",
    "dataAnalysis": "Statistical analysis will be used to interpret the data...",
    "ethics": "Ethical considerations include minimizing harm to marine life...",
    "results": "Preliminary results suggest significant changes in marine biodiversity...",
    "discussion": "The discussion will address the broader implications of the findings...",
    "conclusion": "The study concludes that immediate action is required...",
    "references": "1. Johnson, R. (2023). Climate Change and Marine Life. Marine Ecology Review...",
    "appendices": "Appendix B: Data Collection Protocols...",
    "acknowledgements": "Thanks to the marine biology department for their support..."
  },
  // Add 8 more objects similar to the above two
];

const ProposalsPosts = () => {
  return (
    <Layout className="layout">
     <Content style={{ padding: '0 50px', }}>
        <div className="site-layout-content">
        
          {proposals.map((proposal, index) => (
            <Card key={index}  title={<span style={{ color: '#4096ff', fontSize: '18px', fontWeight: 'bold' }}>{proposal.title}</span>} style={{  backgroundColor: '#4096ff',
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
                  <div style={{ background: '#e6f7ff', padding: '10px', borderRadius: '5px' }}>
                    {proposal.abstract}
                  </div>
                </Paragraph>
                <Divider />
                <Paragraph>
                  <Text strong>Background Information: </Text>
                  <div style={{ background: '#e6f7ff', padding: '10px', borderRadius: '5px' }}>
                    {proposal.background}
                  </div>
                </Paragraph>
                <Divider />
                <Paragraph>
                  <Text strong>Problem Statement: </Text>
                  <div style={{ background: '#e6f7ff', padding: '10px', borderRadius: '5px' }}>
                    {proposal.problem}
                  </div>
                </Paragraph>
                <Divider />
                <Paragraph>
                  <Text strong>Research Questions or Hypotheses: </Text>
                  <div style={{ background: '#e6f7ff', padding: '10px', borderRadius: '5px' }}>
                    {proposal.questions}
                  </div>
                </Paragraph>
                <Divider />
                <Paragraph>
                  <Text strong>Objectives of the Study: </Text>
                  <div style={{ background: '#e6f7ff', padding: '10px', borderRadius: '5px' }}>
                    {proposal.objectives}
                  </div>
                </Paragraph>
                <Divider />
                <Paragraph>
                  <Text strong>Significance of the Study: </Text>
                  <div style={{ background: '#e6f7ff', padding: '10px', borderRadius: '5px' }}>
                    {proposal.significance}
                  </div>
                </Paragraph>
                <Divider />
                <Paragraph>
                  <Text strong>Literature Review: </Text>
                  <div style={{ background: '#e6f7ff', padding: '10px', borderRadius: '5px' }}>
                    {proposal.literature}
                  </div>
                </Paragraph>
                <Divider />
                <Paragraph>
                  <Text strong>Research Design: </Text>
                  <div style={{ background: '#e6f7ff', padding: '10px', borderRadius: '5px' }}>
                    {proposal.design}
                  </div>
                </Paragraph>
                <Divider />
                <Paragraph>
                  <Text strong>Population and Sample: </Text>
                  <div style={{ background: '#e6f7ff', padding: '10px', borderRadius: '5px' }}>
                    {proposal.population}
                  </div>
                </Paragraph>
                <Divider />
                <Paragraph>
                  <Text strong>Data Collection Methods: </Text>
                  <div style={{ background: '#e6f7ff', padding: '10px', borderRadius: '5px' }}>
                    {proposal.dataCollection}
                  </div>
                </Paragraph>
                <Divider />
                <Paragraph>
                  <Text strong>Data Analysis Techniques: </Text>
                  <div style={{ background: '#e6f7ff', padding: '10px', borderRadius: '5px' }}>
                    {proposal.dataAnalysis}
                  </div>
                </Paragraph>
                <Divider />
                <Paragraph>
                  <Text strong>Ethical Considerations: </Text>
                  <div style={{ background: '#e6f7ff', padding: '10px', borderRadius: '5px' }}>
                    {proposal.ethics}
                  </div>
                </Paragraph>
                <Divider />
                <Paragraph>
                  <Text strong>Results: </Text>
                  <div style={{ background: '#e6f7ff', padding: '10px', borderRadius: '5px' }}>
                    {proposal.results}
                  </div>
                </Paragraph>
                <Divider />
                <Paragraph>
                  <Text strong>Discussion: </Text>
                  <div style={{ background: '#e6f7ff', padding: '10px', borderRadius: '5px' }}>
                    {proposal.discussion}
                  </div>
                </Paragraph>
                <Divider />
                <Paragraph>
                  <Text strong>Conclusion: </Text>
                  <div style={{ background: '#e6f7ff', padding: '10px', borderRadius: '5px' }}>
                    {proposal.conclusion}
                  </div>
                </Paragraph>
                <Divider />
                <Paragraph>
                  <Text strong>References: </Text>
                  <div style={{ background: '#e6f7ff', padding: '10px', borderRadius: '5px' }}>
                    {proposal.references}
                  </div>
                </Paragraph>
                <Divider />
                <Paragraph>
                  <Text strong>Appendices: </Text>
                  <div style={{ background: '#e6f7ff', padding: '10px', borderRadius: '5px' }}>
                    {proposal.appendices}
                  </div>
                </Paragraph>
                <Divider />
                <Paragraph>
                  <Text strong>Acknowledgements: </Text>
                  <div style={{ background: '#e6f7ff', padding: '10px', borderRadius: '5px' }}>
                    {proposal.acknowledgements}
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

export default Proposimport React from 'react';
import { Card, Layout, Menu, Typography, Divider } from 'antd';


const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;

const proposals = [
  {
    "title": "Research on AI in Healthcare",
    "authors": "John Doe",
    "date": "2024-07-20",
    "abstract": "This research explores the applications of AI in healthcare...",
    "background": "The background of AI in healthcare includes...",
    "problem": "The problem addressed is the lack of integration...",
    "questions": "1. How can AI improve diagnostics?\n2. What are the ethical considerations?",
    "objectives": "The objectives are to identify key areas where AI can assist...",
    "significance": "This study is significant because it highlights...",
    "literature": "Several studies have shown the impact of AI on healthcare...",
    "design": "This research will use a qualitative design...",
    "population": "The population will include healthcare professionals...",
    "dataCollection": "Data will be collected through surveys and interviews...",
    "dataAnalysis": "Data will be analyzed using thematic analysis...",
    "ethics": "Ethical considerations include informed consent...",
    "results": "The results indicate that AI can significantly reduce errors...",
    "discussion": "The discussion will focus on the implications of the results...",
    "conclusion": "The study concludes that AI has a positive impact...",
    "references": "1. Smith, J. (2022). AI in Healthcare. Journal of Medical AI...",
    "appendices": "Appendix A: Survey Questionnaire...",
    "acknowledgements": "The author acknowledges the support of..."
  },
  {
    "title": "Climate Change and Its Impact on Marine Life",
    "authors": "Jane Smith",
    "date": "2024-07-21",
    "abstract": "This study examines the effects of climate change on marine ecosystems...",
    "background": "Marine life is increasingly affected by climate change...",
    "problem": "The problem is the rising temperatures and ocean acidification...",
    "questions": "1. What species are most affected by climate change?\n2. How can we mitigate these effects?",
    "objectives": "To identify the most vulnerable species and propose mitigation strategies...",
    "significance": "Understanding the impact of climate change on marine life is crucial for...",
    "literature": "Extensive research has shown the correlation between climate change and marine health...",
    "design": "A mixed-methods approach will be used...",
    "population": "The study will focus on marine biologists and environmental scientists...",
    "dataCollection": "Data will be gathered through field observations and lab experiments...",
    "dataAnalysis": "Statistical analysis will be used to interpret the data...",
    "ethics": "Ethical considerations include minimizing harm to marine life...",
    "results": "Preliminary results suggest significant changes in marine biodiversity...",
    "discussion": "The discussion will address the broader implications of the findings...",
    "conclusion": "The study concludes that immediate action is required...",
    "references": "1. Johnson, R. (2023). Climate Change and Marine Life. Marine Ecology Review...",
    "appendices": "Appendix B: Data Collection Protocols...",
    "acknowledgements": "Thanks to the marine biology department for their support..."
  },
  // Add 8 more objects similar to the above two
];

const ProposalsPosts = () => {
  return (
    <Layout className="layout">
     <Content style={{ padding: '0 50px', }}>
        <div className="site-layout-content">
        
          {proposals.map((proposal, index) => (
            <Card key={index}  title={<span style={{ color: '#4096ff', fontSize: '18px', fontWeight: 'bold' }}>{proposal.title}</span>} title= style={{  backgroundColor: '#4096ff',
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
                  <div style={{ background: '#e6f7ff', padding: '10px', borderRadius: '5px' }}>
                    {proposal.abstract}
                  </div>
                </Paragraph>
                <Divider />
                <Paragraph>
                  <Text strong>Background Information: </Text>
                  <div style={{ background: '#e6f7ff', padding: '10px', borderRadius: '5px' }}>
                    {proposal.background}
                  </div>
                </Paragraph>
                <Divider />
                <Paragraph>
                  <Text strong>Problem Statement: </Text>
                  <div style={{ background: '#e6f7ff', padding: '10px', borderRadius: '5px' }}>
                    {proposal.problem}
                  </div>
                </Paragraph>
                <Divider />
                <Paragraph>
                  <Text strong>Research Questions or Hypotheses: </Text>
                  <div style={{ background: '#e6f7ff', padding: '10px', borderRadius: '5px' }}>
                    {proposal.questions}
                  </div>
                </Paragraph>
                <Divider />
                <Paragraph>
                  <Text strong>Objectives of the Study: </Text>
                  <div style={{ background: '#e6f7ff', padding: '10px', borderRadius: '5px' }}>
                    {proposal.objectives}
                  </div>
                </Paragraph>
                <Divider />
                <Paragraph>
                  <Text strong>Significance of the Study: </Text>
                  <div style={{ background: '#e6f7ff', padding: '10px', borderRadius: '5px' }}>
                    {proposal.significance}
                  </div>
                </Paragraph>
                <Divider />
                <Paragraph>
                  <Text strong>Literature Review: </Text>
                  <div style={{ background: '#e6f7ff', padding: '10px', borderRadius: '5px' }}>
                    {proposal.literature}
                  </div>
                </Paragraph>
                <Divider />
                <Paragraph>
                  <Text strong>Research Design: </Text>
                  <div style={{ background: '#e6f7ff', padding: '10px', borderRadius: '5px' }}>
                    {proposal.design}
                  </div>
                </Paragraph>
                <Divider />
                <Paragraph>
                  <Text strong>Population and Sample: </Text>
                  <div style={{ background: '#e6f7ff', padding: '10px', borderRadius: '5px' }}>
                    {proposal.population}
                  </div>
                </Paragraph>
                <Divider />
                <Paragraph>
                  <Text strong>Data Collection Methods: </Text>
                  <div style={{ background: '#e6f7ff', padding: '10px', borderRadius: '5px' }}>
                    {proposal.dataCollection}
                  </div>
                </Paragraph>
                <Divider />
                <Paragraph>
                  <Text strong>Data Analysis Techniques: </Text>
                  <div style={{ background: '#e6f7ff', padding: '10px', borderRadius: '5px' }}>
                    {proposal.dataAnalysis}
                  </div>
                </Paragraph>
                <Divider />
                <Paragraph>
                  <Text strong>Ethical Considerations: </Text>
                  <div style={{ background: '#e6f7ff', padding: '10px', borderRadius: '5px' }}>
                    {proposal.ethics}
                  </div>
                </Paragraph>
                <Divider />
                <Paragraph>
                  <Text strong>Results: </Text>
                  <div style={{ background: '#e6f7ff', padding: '10px', borderRadius: '5px' }}>
                    {proposal.results}
                  </div>
                </Paragraph>
                <Divider />
                <Paragraph>
                  <Text strong>Discussion: </Text>
                  <div style={{ background: '#e6f7ff', padding: '10px', borderRadius: '5px' }}>
                    {proposal.discussion}
                  </div>
                </Paragraph>
                <Divider />
                <Paragraph>
                  <Text strong>Conclusion: </Text>
                  <div style={{ background: '#e6f7ff', padding: '10px', borderRadius: '5px' }}>
                    {proposal.conclusion}
                  </div>
                </Paragraph>
                <Divider />
                <Paragraph>
                  <Text strong>References: </Text>
                  <div style={{ background: '#e6f7ff', padding: '10px', borderRadius: '5px' }}>
                    {proposal.references}
                  </div>
                </Paragraph>
                <Divider />
                <Paragraph>
                  <Text strong>Appendices: </Text>
                  <div style={{ background: '#e6f7ff', padding: '10px', borderRadius: '5px' }}>
                    {proposal.appendices}
                  </div>
                </Paragraph>
                <Divider />
                <Paragraph>
                  <Text strong>Acknowledgements: </Text>
                  <div style={{ background: '#e6f7ff', padding: '10px', borderRadius: '5px' }}>
                    {proposal.acknowledgements}
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

export default ProposalsPosts;alsPosts;