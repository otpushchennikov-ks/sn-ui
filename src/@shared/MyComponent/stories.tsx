import React from 'react';
import styled from 'styled-components';
import { Story, Meta } from '@storybook/react';
import MyComponent from './index';
import { IMyComponentProps } from './interface';


const Template: Story<IMyComponentProps> = args => <MyComponent {...args}/>;

const StyledDecorator = styled.div`
  padding: 20px;
  background-color: blue;
`;

export default {
  title: 'Shared/MyComponent',
  component: MyComponent,
  decorators: [
    Story => (
      <StyledDecorator>
        <Story/>
      </StyledDecorator>
    ),
  ],
  parameters: {
    backgrounds: {
      default: 'red',
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
  },
} as Meta;

export const Normal = Template.bind({});

Normal.args = {
  header: 'Lorem Ipsum Text',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In iaculis nunc sed augue lacus viverra vitae congue. Risus viverra adipiscing at in tellus integer feugiat scelerisque. Vitae auctor eu augue ut lectus. Tempus egestas sed sed risus. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Pulvinar pellentesque habitant morbi tristique senectus et. Ultrices tincidunt arcu non sodales neque sodales ut. Sapien pellentesque habitant morbi tristique senectus et netus et. Mauris in aliquam sem fringilla ut morbi tincidunt augue. Amet mauris commodo quis imperdiet. Enim ut tellus elementum sagittis vitae et leo. Elementum eu facilisis sed odio morbi quis commodo odio aenean. Risus nullam eget felis eget nunc lobortis mattis aliquam. Convallis convallis tellus id interdum velit laoreet id donec ultrices.',
  size: 'normal',
};

export const Small = Template.bind({});

Small.args = {
  ...Normal.args,
  size: 'small',
};

Small.parameters = {
  viewport: {
    viewports: {
      iphone5: {
        name: 'Iphone 5',
        styles: {
          width: '600px',
          height: '963px',
        },
      },
      iphone10: {
        name: 'Iphone 10',
        styles: {
          width: '533px',
          height: '801px',
        },
      },
    },
  },
};
