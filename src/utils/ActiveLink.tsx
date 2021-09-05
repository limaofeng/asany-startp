import React from 'react';

import { Link, useLocation } from 'react-router-dom';

interface ActiveLinkProps {
  to: string;
  href?: string;
  onClick?: () => void;
  activeClassName?: string;
  className?: string;
  children?: React.ReactNode;
}

const ActiveLink = ({
  children,
  className,
  activeClassName,
  ...props
}: ActiveLinkProps) => {
  const { pathname } = useLocation();

  if (pathname === props.href && activeClassName) {
    className = `${className} ${activeClassName}`.trim();
  }

  return (
    <Link {...props} className={className}>
      {children}
    </Link>
  );
};

export default ActiveLink;
