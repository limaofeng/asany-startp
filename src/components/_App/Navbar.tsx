import React, { useEffect } from 'react';

import * as Icon from 'react-feather';
import classnames from 'classnames';

import Link from '../../utils/ActiveLink';
import { MenuData } from '../../../types';

type NavbarProps = {
  style?: 'default' | 'fluid';
  menus: MenuData[];
};

type NavItemProps = {
  data: MenuData;
  toggleNavbar: () => void;
};

function NavItem(props: NavItemProps) {
  const { data, toggleNavbar } = props;
  const isFather = !!data.children && !!data.children.length;
  return (
    <li className="nav-item">
      <Link
        onClick={toggleNavbar}
        to={`/it-startup/${data.name}`}
        className="nav-link"
        activeClassName="active"
      >
        {data.name} {isFather && <Icon.ChevronDown />}
      </Link>
      {isFather && (
        <ul className="dropdown-menu">
          {data.children!.map((item) => (
            <NavItem key={item.id} data={item} toggleNavbar={toggleNavbar} />
          ))}
        </ul>
      )}
    </li>
  );
}

const Navbar = (props: NavbarProps) => {
  const { style, menus } = props;
  const [menu, setMenu] = React.useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    let elementId = document.getElementById('header')!;
    const handleScroll = () => {
      if (window.scrollY > 170) {
        elementId.classList.add('is-sticky');
      } else {
        elementId.classList.remove('is-sticky');
      }
    };
    document.addEventListener('scroll', handleScroll);
    window.scrollTo(0, 0);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const classOne = menu
    ? 'collapse navbar-collapse'
    : 'collapse navbar-collapse show';
  const classTwo = menu
    ? 'navbar-toggler navbar-toggler-right collapsed'
    : 'navbar-toggler navbar-toggler-right';

  return (
    <header
      id="header"
      className={classnames('headroom', {
        'navbar-style-three': style === 'fluid',
      })}
    >
      <div className="startp-nav">
        <div
          className={classnames({
            container: style === 'default',
            'container-fluid': style === 'fluid',
          })}
        >
          <nav className="navbar navbar-expand-md navbar-light">
            <Link
              to="/it-startup"
              onClick={toggleNavbar}
              className="navbar-brand"
            >
              <img
                src={`${__webpack_public_path__}/images/logo.png`}
                alt="logo"
              />
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
              <ul className="navbar-nav ms-auto menu-item mega-menu mega-menu-full sub-menu">
                <li className="nav-item">
                  <Link to="/" className="nav-link" activeClassName="active">
                    首页 <Icon.ChevronDown />
                  </Link>
                </li>
                {menus.map((menu) => (
                  <NavItem
                    key={menu.id}
                    data={menu}
                    toggleNavbar={toggleNavbar}
                  />
                ))}
              </ul>
            </div>

            <div className="others-option">
              <ul className="header-extras d-none d-sm-flex mx-auto mx-md-0 mb-4 mb-md-0">
                <li>
                  <Icon.Phone />
                  <div className="he-text fw-normal">
                    咨询热线:
                    <span>
                      <a href="tel:+111-22-33-44" className="fw-medium">
                        +111 22-33-44
                      </a>
                    </span>
                  </div>
                </li>
                <li>
                  <Icon.Mail />
                  <div className="he-text fw-normal">
                    邮箱:
                    <span>
                      <a
                        href="mailto:limaofeng@msn.com"
                        target="_top"
                        className="fw-medium"
                      >
                        info@msn.com
                      </a>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
