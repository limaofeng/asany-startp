import React from 'react';

import Navbar from './components/_App/Navbar';

function BasicLayout() {
  return (
    <div className="stretched">
      <div id="wrapper" className="clearfix">
        <Navbar />
      </div>
    </div>
  );
}

export default BasicLayout;
