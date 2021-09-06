import React from 'react';

import OwlCarousel from 'react-owl-carousel3';

import { BannerData } from '../../../types';

const options = {
  loop: true,
  nav: true,
  smartSpeed: 1000,
  autoplayTimeout: 5000,
  dots: false,
  animateOut: 'fadeOut',
  autoplayHoverPause: true,
  autoplay: true,
  items: 1,
  navText: [
    "<i class='bx bx-chevron-left'></i>",
    "<i class='bx bx-chevron-right'></i>",
  ],
};

const Banner = function ({ item }: { item: BannerData }) {
  return (
    <div
      className="agency-portfolio-main-banner"
      style={{
        backgroundImage: `url(${__webpack_public_path__ + item.background}`,
      }}
    >
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="portfolio-banner-content">
              <span className="sub-title">{item.subtitle}</span>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              {item.getstarted && (
                <a href={item.getstarted.url} className="btn btn-secondary">
                  {item.getstarted.title || 'Get Started'}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

type PortfolioProps = {
  banners: BannerData[];
};

const HeroCarousel = (props: PortfolioProps) => {
  const { banners } = props;
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);

  return (
    <>
      {display && (
        <OwlCarousel
          className="agency-portfolio-home-slides owl-carousel owl-theme"
          {...options}
        >
          {banners.map((item) => (
            <Banner item={item} />
          ))}
        </OwlCarousel>
      )}
    </>
  );
};

export default HeroCarousel;
