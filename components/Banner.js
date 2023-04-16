import React from "react";
import { Container, Row } from "react-bootstrap";
import SwiperCore, { Pagination } from "swiper";
SwiperCore.use([Pagination]);
import Swiper from "react-id-swiper";

import banner1 from '../assets/images/banner1@2x.png';
import banner2 from '../assets/images/banner2@2x.png';
import banner3 from '../assets/images/banner3@2x.png';

const AppScreen = () => {
  const params = {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  };
  return (
    <Swiper {...params} id="home">
      <div className="item swiper-home-item first">
        <img src={banner1} width="100%" alt="Awesome Image" />
        <div className="text main-title">
          <h2>全球首家短视频社交投资平台</h2>
          <p>学习其他成功交易者的方法提高自己的投资技能</p>
        </div>
        <p className="text sub-title">学习顶级交易者的洞察力</p>
        <p className="text other-title">随时随地，博采众长，互通有无</p>
      </div>
      <div className="item swiper-home-item second">
        <img src={banner2} width="100%" alt="Awesome Image" />
        <p className="text main-title">为交易员服务<br/>精准报价 直连交易所</p>
        <p className="text sub-title">超便捷方式生成量化策略<br />GPT的正确打开方式</p>
      </div>
      <div className="item swiper-home-item third">
        <img src={banner3} width="100%" alt="Awesome Image" />
        <p className="text main-title">Autu Securities 通过衍生品提供全球金融市场的投资机会，<br/>包括股票、期货、商品、指数、加密货币等</p>
      </div>
    </Swiper>
  );
};

export default AppScreen;
