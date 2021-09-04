import React from 'react';

function About() {
  return (
    <div className="about-area ptb-80">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="about-image">
              <img src="/images/about-one.png" alt="image" />
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="about-content">
              <div className="section-title">
                <h2>关于我们</h2>
                <div className="bar"></div>
                <p>
                  XXX（北京）有限公司成立于2001年，19年来一直致力于成为一家提供专业、高效计算机外包服务的全球性企业。
                </p>
              </div>

              <p>
                目前群思拥有北京、上海、广州、武汉、香港、台湾、澳门、新加坡、马来西亚九大运营中心；在亚太区设有60多个技术服务站点；并在日本东京和印尼雅加达拥有合作伙伴可提供IT技术支持。群思已在美国、欧盟、澳大利亚、马来西亚、新加坡、日本、香港、台湾、澳门等地区注册了Fwone商标。
              </p>

              <p>
                凭借着丰富的服务经验和规范的服务流程，群思赢得了众多用户的信任和选择，正为他们提供科学化的定制服务。
              </p>
            </div>
          </div>
        </div>

        <div className="about-inner-area">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="about-text">
                <h3>我们的历史</h3>
                <p>
                  Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In
                  sagittis eg esta ante, sed viverra nunc tinci dunt nec elei
                  fend et tiram.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="about-text">
                <h3>我们的使命</h3>
                <p>
                  Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In
                  sagittis eg esta ante, sed viverra nunc tinci dunt nec elei
                  fend et tiram.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="about-text">
                <h3>我们是谁</h3>
                <p>
                  Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In
                  sagittis eg esta ante, sed viverra nunc tinci dunt nec elei
                  fend et tiram.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
