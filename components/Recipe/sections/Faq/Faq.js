import classes from "./Faq.module.css";
import { Collapse } from "antd";

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const Faq = ({ faqData }) => {
  return (
    <div className={classes.faqMain}>
      <h2 className={classes.faqHeading}>faq</h2>
      <Collapse defaultActiveKey={["0"]} ghost expandIconPosition="right">
        {faqData.map((fq, i) => (
          <Panel
            header={<h2 className={classes.faqQuestion}>{fq.question}</h2>}
            key={i}
            className={classes.panel}
          >
            <p>{fq.answer}</p>
          </Panel>
        ))}
      </Collapse>
      ,
    </div>
  );
};
export default Faq;
