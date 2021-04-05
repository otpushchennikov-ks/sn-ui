import React from 'react';
import { Story, Meta } from '@storybook/react';
import ListItem from '@shared/ListItem';
import { IListItemProps } from '@shared/ListItem/interface';


const Template: Story<IListItemProps> = args => <ListItem {...args}/>;

export default {
  title: 'Shared/ListItem',
  component: ListItem,
} as Meta;

export const NotCompleted = Template.bind({});

NotCompleted.args = {
  text: 'Элемент списка',
  completed: false,
};

export const Completed = Template.bind({});

Completed.args = {
  ...NotCompleted.args,
  completed: true,
};
