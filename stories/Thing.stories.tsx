import React, { useMemo } from 'react';

import { Meta, Story } from '@storybook/react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { IconProvider } from '@asany/icons';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Sunmao, { SunmaoProvider } from 'sunmao';
import SunmaoEditor from 'sunmao-editor';

import canvas from '../src';

const meta: Meta = {
  title: 'Welcome',
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const client = new ApolloClient({
  uri: 'https://api.asany.cn/graphql',
  cache: new InMemoryCache(),
});

const Template: Story<any> = ({ testing }) => {
  const sunmao = useMemo(() => {
    const sunmao = new Sunmao();
    sunmao.addLibrary(...canvas);
    return sunmao;
  }, []);

  const demoPage = (
    <DndProvider backend={HTML5Backend}>
      <SunmaoProvider sunmao={sunmao}>
        <IconProvider>
          <SunmaoEditor
            id="0"
            name="测试1"
            data={{
              template: 'cn.asany.ui.theme.canvas.BasicLayout',
              blocks: [
                {
                  key: 'xxx',
                  props: { title: '观自在菩萨' },
                },
              ],
            }}
          />
        </IconProvider>
      </SunmaoProvider>
    </DndProvider>
  );

  if (testing) {
    return demoPage;
  }

  return <ApolloProvider client={client}>{demoPage}</ApolloProvider>;
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
