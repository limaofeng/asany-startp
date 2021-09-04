import React from 'react';

import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';

import { IService } from '../../../types';

type ServicesProps = {
  title?: string;
  subtitle?: string;
  itemMinHeight?: number;
  services: IService[];
};

function Services(props: ServicesProps) {
  const { title, subtitle, services = [], itemMinHeight } = props;
  return (
    <div className="services-area-two pt-80 pb-50 bg-f9f6f6">
      <div className="container">
        <div className="section-title">
          <h2>{title} </h2>
          <div className="bar"></div>
          <p>{subtitle}</p>
        </div>

        <div className="row justify-content-center">
          {services.map((item) => (
            <div className="col-lg-4 col-sm-6">
              <div
                className="single-services-box"
                style={{ minHeight: itemMinHeight }}
              >
                <div className="ser-title">
                  <div className="icon">
                    {item.icon ? (
                      React.createElement((Icon as any)[item.icon] as any)
                    ) : (
                      <Icon.Settings />
                    )}
                  </div>
                  <h3>
                    <Link to="/service-details">{item.name}</Link>
                  </h3>
                </div>
                <p>{item.description}</p>
                <Link to="/service-details" className="learn-more-btn">
                  <Icon.PlusCircle /> 了解更多
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Services.defaultProps = {
  title: '产品与服务',
  subtitle: '本部分描述并定义了将用于管理目录请求以将服务器部署到楼层的流',
};

export default Services;
