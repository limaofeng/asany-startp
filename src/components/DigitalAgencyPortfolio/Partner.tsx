import React from 'react';

import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';

const options = {
  loop: true,
  nav: false,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  margin: 30,
  responsive: {
    0: {
      items: 2,
    },
    576: {
      items: 4,
    },
    768: {
      items: 4,
    },
    992: {
      items: 6,
    },
  },
};

const Partner = () => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);

  return (
    <div className="agency-portfolio-partner-area ptb-80">
      <div className="container">
        {display ? (
          <OwlCarousel
            className="agency-portfolio-partner-slides owl-carousel owl-theme"
            {...options}
          >
            <div className="single-agency-portfolio-partner">
              <Link to="#">
                <a target="_blank">
                  <img
                    src="/images/agency-portfolio-partner-image/ap-partner1.png"
                    alt="image"
                  />
                </a>
              </Link>
            </div>
            <div className="single-agency-portfolio-partner">
              <Link to="#">
                <a target="_blank">
                  <img
                    src="/images/agency-portfolio-partner-image/ap-partner2.png"
                    alt="image"
                  />
                </a>
              </Link>
            </div>
            <div className="single-agency-portfolio-partner">
              <Link to="#">
                <a target="_blank">
                  <img
                    src="/images/agency-portfolio-partner-image/ap-partner3.png"
                    alt="image"
                  />
                </a>
              </Link>
            </div>
            <div className="single-agency-portfolio-partner">
              <Link to="#">
                <a target="_blank">
                  <img
                    src="/images/agency-portfolio-partner-image/ap-partner4.png"
                    alt="image"
                  />
                </a>
              </Link>
            </div>
            <div className="single-agency-portfolio-partner">
              <Link to="#">
                <a target="_blank">
                  <img
                    src="/images/agency-portfolio-partner-image/ap-partner5.png"
                    alt="image"
                  />
                </a>
              </Link>
            </div>
            <div className="single-agency-portfolio-partner">
              <Link to="#">
                <a href="#">
                  <img
                    src="/images/agency-portfolio-partner-image/ap-partner6.png"
                    alt="image"
                  />
                </a>
              </Link>
            </div>
          </OwlCarousel>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Partner;
