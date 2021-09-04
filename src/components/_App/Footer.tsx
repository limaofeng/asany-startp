import React from 'react';

import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-area bg-f7fafd">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="single-footer-widget">
              <div className="logo">
                <Link to="/it-startup">
                  <a>
                    <img src="/images/logo.png" alt="logo" />
                  </a>
                </Link>
              </div>
              <p>公司简介, 品牌说明</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="single-footer-widget pl-5">
              <h3>XXX</h3>
              <ul className="list">
                <li>
                  <Link to="/about-1">关于 XXX</Link>
                </li>
                <li>
                  <Link to="/services-1">产品与服务</Link>
                </li>
                <li>
                  <Link to="/features">新闻动态</Link>
                </li>
                <li>
                  <Link to="/pricing">Our Pricing</Link>
                </li>
                <li>
                  <Link to="/blog-1">加入 XXX</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="single-footer-widget">
              <h3>支持</h3>
              <ul className="list">
                <li>
                  <Link to="/faq">常见问题解答</Link>
                </li>
                <li>
                  <Link to="/privacy-policy">私隐政策</Link>
                </li>
                <li>
                  <Link to="/term-condition">会员条列</Link>
                </li>
                <li>
                  <Link to="/team">团队</Link>
                </li>
                <li>
                  <Link to="/contact">联系我们</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="single-footer-widget">
              <h3>公司地址</h3>

              <ul className="footer-contact-info">
                <li>
                  <Icon.MapPin />
                  27 Division St, New York, <br /> NY 10002, USA
                </li>
                <li>
                  <Icon.Mail />
                  邮箱: <a href="mailto:startp@gmail.com">startp@gmail.com</a>
                </li>
                <li>
                  <Icon.PhoneCall />
                  电话: <a href="tel:321984754">+ (321) 984 754</a>
                </li>
              </ul>
              <ul className="social-links">
                <li>
                  <Link to="#" className="facebook" target="_blank">
                    <Icon.Facebook />
                  </Link>
                </li>
                <li>
                  <Link to="" className="twitter" target="_blank">
                    <Icon.Twitter />
                  </Link>
                </li>
                <li>
                  <Link to="#" className="instagram" target="_blank">
                    <Icon.Instagram />
                  </Link>
                </li>
                <li>
                  <Link to="#" className="linkedin" target="_blank">
                    <Icon.Linkedin />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-12 col-md-12">
            <div className="copyright-area">
              <p>
                Copyright &copy; {currentYear} StartP. All rights reserved by
                <a
                  href="https://envytheme.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  XXX 备案信息
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <img src="/images/map.png" className="map" alt="map" />

      {/* Shape Images */}
      <div className="shape1">
        <img src="/images/shape1.png" alt="shape" />
      </div>
      <div className="shape8 rotateme">
        <img src="/images/shape2.svg" alt="shape" />
      </div>
    </footer>
  );
};

export default Footer;
