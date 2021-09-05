import React from 'react';

import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';

import { BlogData } from '../../../types';

const options = {
  loop: true,
  nav: false,
  dots: true,
  autoplayHoverPause: true,
  autoplay: true,
  smartSpeed: 1000,
  autoplayTimeout: 5000,
  margin: 30,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    992: {
      items: 3,
    },
  },
};

type OurRecentNewsProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  blogs: BlogData[];
};

function OurRecentNews(props: OurRecentNewsProps) {
  const { title, subtitle, description, blogs } = props;

  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);

  return (
    <div className="blog-area ptb-80">
      <div className="container">
        <div className="section-title text-left">
          {subtitle && <span className="sub-title">{subtitle}</span>}
          <h2 dangerouslySetInnerHTML={{ __html: title! }} />
          {description && <p>{description}</p>}
        </div>

        {display && (
          <OwlCarousel
            className="blog-slides owl-carousel owl-theme"
            {...options}
          >
            {blogs.map((item) => (
              <div key={item.id} className="single-blog-item">
                <div className="post-image">
                  <Link to="/blog-details">
                    <img
                      src={`${__webpack_public_path__}images/blog-image/blog1.jpg`}
                      alt={item.title}
                    />
                  </Link>
                </div>

                <div className="post-content">
                  <ul className="post-meta">
                    <li>
                      By <a href={item.url}>{item.author}</a>
                    </li>
                    <li>{item.releaseDate}</li>
                  </ul>
                  <h3>
                    <Link to="/blog-details">{item.title}</Link>
                  </h3>
                </div>
              </div>
            ))}
          </OwlCarousel>
        )}
      </div>
    </div>
  );
}

OurRecentNews.defaultProps = {
  title: '<span>最新</span>动态',
};

export default OurRecentNews;
