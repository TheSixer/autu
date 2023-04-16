import React from "react";

import FuturesImg from "../assets/images/market/futures@2x.png";
import GoldImg from "../assets/images/market/gold@2x.png";
import OilImg from "../assets/images/market/oil@2x.png";

const FuturesAndSpot = () => {
  return (
    <section className="futures-spot">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="futures-spot_header wow flipInX">
              <h2>商品期货与现货</h2>
              <h4>大宗商品 • 贵金属• 能源产品</h4>
              <p>将黄金、白银等其他金属纳入投资组合，平衡单一投资风险<br/>参与全球能源市场，交易全球最热商品，捕捉世界经济波动带来的机遇</p>
            </div>
          </div>
          <div className="d-flex col-lg-6">
            <div className="futures-spot_image wow fadeInUp">
              <img
                src={FuturesImg}
                alt=""
              />
            </div>
          </div>
          <div className="d-flex col-lg-6 ">
            <div className="futures-spot_list wow fadeInDown">
              <div className="futures-spot_list-item">
                <div className="futures-spot_list-img">
                  <img
                    src={OilImg}
                    alt=""
                  />
                </div>
                <ul>
                  <li>
                    <p>美国西得克萨斯原油</p>
                  </li>
                  <li>
                    <p>英国布伦特原油</p>
                  </li>
                  <li>
                    <p>天然气</p>
                  </li>
                </ul>
              </div>
              <div className="futures-spot_list-item">
                <div className="futures-spot_list-img">
                  <img
                    src={GoldImg}
                    alt=""
                  />
                </div>
                <ul>
                  <li>
                    <p>黄金</p>
                  </li>
                  <li>
                    <p>白银</p>
                  </li>
                  <li>
                    <p>铜</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuturesAndSpot;
