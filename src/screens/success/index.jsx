import { Result, Button } from 'antd';

const Success = () => <Result
    status="success"
    title="Successfully Purchased Cloud Server ECS!"
    subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
    extra={[
      <Button type="primary" key="console">
   Back To Home
      </Button>,
   
    ]}
  />

  export default Success
