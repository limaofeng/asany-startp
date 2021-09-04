import React from 'react';

import * as Icon from 'react-feather';

import Link from '../../utils/ActiveLink';

const NavbarStyleSix = () => {
  const [menu, setMenu] = React.useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById('header')!;
    document.addEventListener('scroll', () => {
      if (window.scrollY > 170) {
        elementId.classList.add('is-sticky');
      } else {
        elementId.classList.remove('is-sticky');
      }
    });
    window.scrollTo(0, 0);
  });

  const classOne = menu
    ? 'collapse navbar-collapse'
    : 'collapse navbar-collapse show';
  const classTwo = menu
    ? 'navbar-toggler navbar-toggler-right collapsed'
    : 'navbar-toggler navbar-toggler-right';

  return (
    <header id="header" className="headroom navbar-style-three">
      <div className="startp-nav">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-md navbar-light">
            <Link to="/it-startup">
              <a onClick={toggleNavbar} className="navbar-brand">
                <img src="/images/logo.png" alt="logo" />
              </a>
            </Link>

            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav m-auto">
                <li className="nav-item">
                  <Link to="/#" activeClassName="active">
                    <a onClick={(e) => e.preventDefault()} className="nav-link">
                      Home <Icon.ChevronDown />
                    </a>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link to="/it-startup" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          IT Startup
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to="/it-startup-2" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          IT Startup Two
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to="/iot" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          IOT
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to="/hosting" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          Hosting
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to="/machine-learning" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          Machine Learning
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to="/machine-learning-2" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          Machine Learning 2
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to="/bigdata-analytics" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          Bigdata Analytics
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to="/digital-agency" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          Digital Agency
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/digital-agency-portfolio"
                        activeClassName="active"
                      >
                        <a onClick={toggleNavbar} className="nav-link">
                          Digital Agency Portfolio
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to="/pc-repair" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          PC Repair
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link to="/#">
                    <a onClick={(e) => e.preventDefault()} className="nav-link">
                      About <Icon.ChevronDown />
                    </a>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link to="/about-1" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          About Style 1
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to="/about-2" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          About Style 2
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to="/about-3" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          About Style 3
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link to="/#">
                    <a onClick={(e) => e.preventDefault()} className="nav-link">
                      Pages <Icon.ChevronDown />
                    </a>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link to="/#" activeClassName="active">
                        <a
                          onClick={(e) => e.preventDefault()}
                          className="nav-link"
                        >
                          Features <Icon.ChevronDown />
                        </a>
                      </Link>

                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link to="/features" activeClassName="active">
                            <a onClick={toggleNavbar} className="nav-link">
                              Features
                            </a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link to="/feature-details" activeClassName="active">
                            <a onClick={toggleNavbar} className="nav-link">
                              Features Details
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link to="/#" activeClassName="active">
                        <a
                          onClick={(e) => e.preventDefault()}
                          className="nav-link"
                        >
                          Services <Icon.ChevronDown />
                        </a>
                      </Link>

                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link to="/services-1" activeClassName="active">
                            <a onClick={toggleNavbar} className="nav-link">
                              Services Style 1
                            </a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link to="/services-2" activeClassName="active">
                            <a onClick={toggleNavbar} className="nav-link">
                              Services Style 2
                            </a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link to="/services-3" activeClassName="active">
                            <a onClick={toggleNavbar} className="nav-link">
                              Services Style 3
                            </a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link to="/services-4" activeClassName="active">
                            <a onClick={toggleNavbar} className="nav-link">
                              Services Style 4
                            </a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link to="/services-5" activeClassName="active">
                            <a onClick={toggleNavbar} className="nav-link">
                              Services Style 5
                            </a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link to="/service-details" activeClassName="active">
                            <a onClick={toggleNavbar} className="nav-link">
                              Services Details
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link to="/feedback" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          Feedback
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to="/#" activeClassName="active">
                        <a
                          onClick={(e) => e.preventDefault()}
                          className="nav-link"
                        >
                          Projects <Icon.ChevronDown />
                        </a>
                      </Link>

                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link to="/projects-1" activeClassName="active">
                            <a onClick={toggleNavbar} className="nav-link">
                              Project Style 1
                            </a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link to="/projects-2" activeClassName="active">
                            <a onClick={toggleNavbar} className="nav-link">
                              Project Style 1
                            </a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link to="/project-details" activeClassName="active">
                            <a onClick={toggleNavbar} className="nav-link">
                              Project Details
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link to="/team" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          Team
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to="/pricing" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          Pricing
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to="/#" activeClassName="active">
                        <a
                          onClick={(e) => e.preventDefault()}
                          className="nav-link"
                        >
                          User <Icon.ChevronDown />
                        </a>
                      </Link>

                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link to="/login" activeClassName="active">
                            <a onClick={toggleNavbar} className="nav-link">
                              Login
                            </a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link to="/sign-up" activeClassName="active">
                            <a onClick={toggleNavbar} className="nav-link">
                              Sign Up
                            </a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link to="/forgot-password" activeClassName="active">
                            <a onClick={toggleNavbar} className="nav-link">
                              Forgot Password
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link to="/faq" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          FAQ's
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to="/coming-soon" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          Coming Soon
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to="/404" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          404 Error Page
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link to="/#" activeClassName="active">
                    <a onClick={(e) => e.preventDefault()} className="nav-link">
                      Shop <Icon.ChevronDown />
                    </a>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link to="/shop" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          Shop
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to="/product-details" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          Products Details
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to="/cart" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          Cart
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to="/checkout" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          Checkout
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link to="/#">
                    <a onClick={(e) => e.preventDefault()} className="nav-link">
                      Blog <Icon.ChevronDown />
                    </a>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link to="/blog-1" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          Blog Grid
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to="/blog-2" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          Blog Right Sidebar
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to="/blog-3" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          Blog Grid 2
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to="/blog-4" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          Blog Right Sidebar 2
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to="/blog-5" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          Blog Grid 3
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to="/blog-6" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          Blog Right Sidebar 3
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to="/blog-details" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          Blog Details
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link to="/contact" activeClassName="active">
                    <a onClick={toggleNavbar} className="nav-link">
                      Contact
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="others-option">
              <Link to="/cart">
                <a className="cart-wrapper-btn">
                  <Icon.ShoppingCart />
                  <span>0</span>
                </a>
              </Link>

              <Link to="/contact">
                <a className="btn btn-light">Support</a>
              </Link>

              <Link to="/login">
                <a className="btn btn-primary">Login</a>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavbarStyleSix;
