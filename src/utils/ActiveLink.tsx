import React, { ComponentType } from 'react';

import { Link, RouteComponentProps, withRouter } from 'react-router-dom';

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
}: ActiveLinkProps & RouteComponentProps) => {
  const {
    location: { pathname },
  } = props;

  if (pathname === props.href && activeClassName) {
    className = `${className} ${activeClassName}`.trim();
  }

  return (
    <Link {...props} className={className}>
      {children}
    </Link>
  );
};

export default withRouter(ActiveLink) as ComponentType<ActiveLinkProps>;
