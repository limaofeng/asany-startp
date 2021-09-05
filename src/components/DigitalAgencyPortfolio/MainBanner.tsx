import React from 'react';

import OwlCarousel from 'react-owl-carousel3';

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

const BannerItem = function ({ item }: any) {
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

const MainBanner = () => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);

  const banners = [
    {
      background: 'images/agency-portfolio-main-banner/ap-main-banner-img1.jpg',
      title: 'Digital Agency',
      subtitle: 'We are Creative',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore.`,
      getstarted: {
        url: '#',
        title: '',
      },
    },
    {
      background: 'images/agency-portfolio-main-banner/ap-main-banner-img1.jpg',
      title: 'UX/UI Design',
      subtitle: 'We are Digital',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore.`,
      getstarted: {
        url: '#',
        title: '',
      },
    },
    {
      background: 'images/agency-portfolio-main-banner/ap-main-banner-img1.jpg',
      title: 'Digital Marketing',
      subtitle: 'We are Agency',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore.`,
      getstarted: {
        url: '#',
        title: '',
      },
    },
  ];

  return (
    <>
      {display && (
        <OwlCarousel
          className="agency-portfolio-home-slides owl-carousel owl-theme"
          {...options}
        >
          {banners.map((item) => (
            <BannerItem item={item} />
          ))}
        </OwlCarousel>
      )}
    </>
  );
};

export default MainBanner;
