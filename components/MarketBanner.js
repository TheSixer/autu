import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import GpzsImg from "../assets/images/market/gpzs.png";
import SqphImg from "../assets/images/market/spqh.png";
import NycpImg from "../assets/images/market/nycp.png";
import GjsImg from "../assets/images/market/gjs.png";
import GggpImg from "../assets/images/market/gggp.png";
import JmhbImg from "../assets/images/market/jmhb.png";
import HbdImg from "../assets/images/market/hbd.png";

const MarketBanner = (props) => {

  return (
    <section className="market-banner">
      <Container>
        <Row>
          <Col xl={12}>
            <h4 className="market-banner-title wow bounceInDown">Autu使客户能够通过衍生品、期货和期权等工具投资于全球范围内的各种金融市场产品
            <span>如全球股票、股票指数、商品期货、加密资产和货币对</span>等</h4>

            <div className="market-banner_list">
              <div className="market-banner_list_item wow fadeInDown">
                <img src={GpzsImg} alt="" />
                <span>股票市场</span>
              </div>
              <div className="market-banner_list_item wow fadeInUp">
                <img src={SqphImg} alt="" />
                <span>商品期货</span>
              </div>
              <div className="market-banner_list_item wow fadeInDown">
                <img src={NycpImg} alt="" />
                <span>能源产品</span>
              </div>
              <div className="market-banner_list_item wow fadeInUp">
                <img src={GjsImg} alt="" />
                <span>贵金属</span>
              </div>
              <div className="market-banner_list_item wow fadeInDown">
                <img src={GggpImg} alt="" />
                <span>各国股票</span>
              </div>
              <div className="market-banner_list_item wow fadeInUp">
                <img src={JmhbImg} alt="" />
                <span>加密资产</span>
              </div>
              <div className="market-banner_list_item wow fadeInDown">
                <img src={HbdImg} alt="" />
                <span>货币对</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MarketBanner;
