import React, { memo } from "react";
import { FooterWrapper } from "./style";

import footerData from "@/assets/data/footer.json";
import IconLitterLogo from "@/assets/svg/icon_litter_logo";
import IconWeibo from "@/assets/svg/icon_weibo";
import IconWeixin from "@/assets/svg/icon_weixin";

const AppFooter = memo(() => {
  return (
    <FooterWrapper>
      <div className="wrapper">
        <div className="service">
          {footerData.map((item) => {
            return (
              <div className="item" key={item.name}>
                <h2 className="name">{item.name}</h2>
                <ul className="list">
                  {item.list.map((iten) => {
                    return (
                      <li className="iten" key={iten}>
                        <a href="#/">{iten}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="statement">
          <div className="filing">
            <IconLitterLogo />
            <span className="text">
              京ICP备16017121号 京ICP证 160773号 中国公安局标志 京公网安备
              11010502032345号 安彼迎网络（北京）有限公司 中国电子营业执照标志
              营业执照 © 2022 Airbnb, Inc. All rights reserved. 条款 · 隐私政策
              · 网站地图 · 全国旅游投诉渠道 12301
            </span>
          </div>
          <div className="jump">
            <span>
              <a
                target="_blank"
                href="http://www.weibo.com/airbnb"
                rel="noreferrer"
              >
                <IconWeibo />
              </a>
            </span>
            <span>
              <IconWeixin />
            </span>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
});

export default AppFooter;
