import React from 'react';

import GoTop from './GoTop';

type LayoutProps = {
  children: React.ReactNode;
};

function Head({ children }: LayoutProps) {
  console.warn('需要实现 Head 组件', children);
  // TODO: 需要实现 Head 组件
  return <></>;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
          StartP - React Next IT Startups & Digital Services Template
        </title>
      </Head>
      {children}

      <GoTop scrollStepInPx="100" delayInMs="10.50" />
    </>
  );
};

export default Layout;
