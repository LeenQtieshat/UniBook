import React from "react";
import { Card, Rate } from "antd";
import { HeartFilled } from "@ant-design/icons";
const { Meta } = Card;
const App = ({ title, author }) => (
  <div style={{ position: "relative" }}>
    <div
      style={{
        position: "absolute",
        top: "10px",
        right: "10px",
        zIndex: "1",
        fontSize: "25px",
        cursor: "pointer",
      }}
    >
      <HeartFilled style={{ color: "#d93c3", verticalAlign: "middle" }} />
    </div>
    <Card
      hoverable
      style={{
        width: 178,
      }}
      cover={<img alt="example" src="/book.jpg" height={"210px"} />}
      styles={{ height: "320px" }}
    >
      <Meta
        title={title}
        description={(() => (
          <>
            <div>{author}</div>
            <div>
              <Rate allowHalf defaultValue={2.5} />
            </div>
          </>
        ))()}
      />
    </Card>
  </div>
);
export default App;
