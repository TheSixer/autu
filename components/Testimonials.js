import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlockTitle from "./BlockTitle";

import PhoneImg from "../assets/images/home/phone@2x.png";

const Testimonials = (props) => {

  return (
    <section className="testimonials-one">
      <Container>
        <Row>
          <Col xl={12}>
            <BlockTitle
              textAlign="center"
              titleText="Autu Securities是一家受监管的在线交易平台，通过衍生品、期货和期权方式提供投资全球几乎所有金融市场产品的投资通道，以下是在Autu Securities交易的优势"
            />
          </Col>
          <Col xl={6}>
            <div className="testimonials-one__thumb-carousel-wrap wow fadeInDown">
              <div className="testimonials-one__image">
                <img src={PhoneImg} className="move" alt="Awesome Image" />
              </div>
            </div>
          </Col>
          <Col xl={6} className="d-flex">
            <div className="my-auto wow fadeInUp">
              <h4 className="my-auto-title">低交易成本</h4>
              <div className="testimonials-one__carousel">
                <p className="testimonials-one__text">提供业内最具价格竞争力的无点差交易模式及零佣<br/>金交易模式<br/>透明报价历史<br/>自由选择的杠杆比例，增益资金使用效果</p>
                <p className="testimonials-one__text primary-txt">客户的持续盈利是我们的成功的基础</p>
              </div>
              <a href="#" className={`thm-btn main-nav__btn active`}>
                <span>开立账户</span>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
