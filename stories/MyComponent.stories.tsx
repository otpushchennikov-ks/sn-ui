import React, { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react';
import MyComponent from '../src/@shared/MyComponent';
import { IMyComponentProps } from '@shared/MyComponent/interface';


const Template: Story<IMyComponentProps> = args => <MyComponent {...args}/>;

export default {
  title: 'Shared/MyComponent',
  component: MyComponent,
} as Meta;


export const Normal = Template.bind({});
Normal.args = {
  size: 'normal',
  header: 'Big header',
  content: 'Big content',
} as IMyComponentProps;

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  header: 'Small header',
  content: 'Small content',
} as IMyComponentProps;
