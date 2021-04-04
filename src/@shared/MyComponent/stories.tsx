import React from 'react';
import { Story, Meta } from '@storybook/react';
import MyComponent from './index';
import { IMyComponentProps } from './interface';


const Template: Story<IMyComponentProps> = args => <MyComponent {...args}/>;

export default {
  title: 'Shared/MyComponent',
  component: MyComponent,
} as Meta;


const reusableArgs = {
  header: 'Lorem Ipsum Text',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In iaculis nunc sed augue lacus viverra vitae congue. Risus viverra adipiscing at in tellus integer feugiat scelerisque. Vitae auctor eu augue ut lectus. Tempus egestas sed sed risus. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Pulvinar pellentesque habitant morbi tristique senectus et. Ultrices tincidunt arcu non sodales neque sodales ut. Sapien pellentesque habitant morbi tristique senectus et netus et. Mauris in aliquam sem fringilla ut morbi tincidunt augue. Amet mauris commodo quis imperdiet. Enim ut tellus elementum sagittis vitae et leo. Elementum eu facilisis sed odio morbi quis commodo odio aenean. Risus nullam eget felis eget nunc lobortis mattis aliquam. Convallis convallis tellus id interdum velit laoreet id donec ultrices.',
};

export const Normal = Template.bind({});
Normal.args = {
  ...reusableArgs,
  size: 'normal',
} as IMyComponentProps;

export const Small = Template.bind({});
Small.args = {
  ...reusableArgs,
  size: 'small',
} as IMyComponentProps;
