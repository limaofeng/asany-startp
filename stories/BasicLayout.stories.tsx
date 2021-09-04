import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Meta, Story } from '@storybook/react';

import { BasicLayout } from '../src';

const meta: Meta = {
  title: '组件/布局',
  parameters: {
    options: { showPanel: false },
  },
};

export default meta;

const Template: Story<any> = (_args) => {
  return (
    <Router>
      <BasicLayout />
    </Router>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.storyName = '布局';

Default.args = {};
