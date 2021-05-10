import React, { ComponentProps } from 'react';
import { withNextRouter } from 'storybook-addon-next-router';
import MainLayout from './index';
import { IMainLayoutProps } from './interface';
import { Story, Meta } from '@storybook/react';


const Template: Story<ComponentProps<typeof MainLayout>> = ({ children, ...rest }) => {
  return (
    <MainLayout {...rest}>
      {children}
    </MainLayout>
  );
};

export default {
  title: 'Shared/Layout',
  subtitle: 'some',
  component: MainLayout,
  decorators: [withNextRouter],
  parameters: {
    nextRouter: {
      path: '/',
      asPath: '/',
      query: {
        code: '',
      },
    },
  },
} as Meta;

export const Default = Template.bind({});
Default.args = {
  children: (
    <div>
      my some custom content
    </div>
  ),
};
