import React from 'react';

import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';

import { BlogData } from '../../../types';

type BlogGridProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  blogs: BlogData[];
};

function BlogGrid(props: BlogGridProps) {
  const { title, subtitle, description, blogs } = props;
  return (
    <div className="blog-area ptb-80">
      <div className="container">
        <div className="row">
          {title && (
            <div className="section-title">
              {subtitle && <span className="sub-title">{subtitle}</span>}
              <h2>{title}</h2>
              <div className="bar"></div>
              {description && <p>{description}</p>}
            </div>
          )}

          {blogs.map((item) => (
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post-item">
                <div className="post-image">
                  <Link to="/blog-details">
                    <img src="/images/blog-image/blog1.jpg" alt="image" />
                  </Link>
                </div>

                <div className="post-content">
                  <ul className="post-meta">
                    <li>
                      <a href="#">{item.author}</a>
                    </li>
                    <li>{item.releaseDate}</li>
                  </ul>
                  <h3>
                    <Link to="/blog-details">{item.title}</Link>
                  </h3>

                  <Link to="/blog-details" className="read-more-btn">
                    Read More <Icon.PlusCircle />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Shape Images */}
      <div className="shape2 rotateme">
        <img src="/images/shape2.svg" alt="shape" />
      </div>
      <div className="shape3">
        <img src="/images/shape3.svg" alt="shape" />
      </div>
      <div className="shape4">
        <img src="/images/shape4.svg" alt="shape" />
      </div>
      <div className="shape6 rotateme">
        <img src="/images/shape4.svg" alt="shape" />
      </div>
      <div className="shape7">
        <img src="/images/shape4.svg" alt="shape" />
      </div>
      <div className="shape8 rotateme">
        <img src="/images/shape2.svg" alt="shape" />
      </div>
    </div>
  );
}

export default BlogGrid;
