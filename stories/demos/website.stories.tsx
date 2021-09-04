import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Meta, Story } from '@storybook/react';
import { Provider } from 'react-redux';
import { ToastProvider } from 'react-toast-notifications';

import Layout from '../../src/components/_App/Layout';
import { useStore } from './store';

import services from './data/services.json';
import blogs from './data/blogs.json';

import Navbar from '../../src/components/_App/Navbar';
import AboutUs from '../../src/components/AboutUs';
import Services from '../../src/components/Services';
import OurRecentNews from '../../src/components/Blog/OurRecentNews';
import MainBanner from '../../src/components/DigitalAgencyPortfolio/MainBanner';
import Cta from '../../src/components/IOT/Cta';
import FeedbackStyleFive from '../../src/components/Common/FeedbackStyleFive';
import Partner from '../../src/components/DigitalAgencyPortfolio/Partner';
import BlogPostStyleThree from '../../src/components/Common/BlogPostStyleThree';
import CreativeArea from '../../src/components/DigitalAgencyPortfolio/CreativeArea';
import Footer from '../../src/components/_App/Footer';

import '../../src/style/index.scss';

const meta: Meta = {
  title: '演示/网站',
  parameters: {
    options: { showPanel: false },
  },
};

export default meta;

const Template: Story<any> = (_args) => {
  const store = useStore({});
  return (
    <Router>
      <ToastProvider
        placement="bottom-left"
        autoDismissTimeout={6000}
        autoDismiss
      >
        <Provider store={store}>
          <Layout>
            <Navbar style="fluid" />
            <MainBanner />
            <AboutUs />
            <Services services={services} itemMinHeight={270} />
            <OurRecentNews blogs={blogs} title="新闻动态" />
            <Cta />
            <FeedbackStyleFive />
            <Partner />
            <CreativeArea />
            <Footer />
          </Layout>
        </Provider>
      </ToastProvider>
    </Router>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.storyName = '网站';

Default.args = {};
