import React from 'react';
import { Story, Meta } from '@storybook/react';
import List from '@shared/List';
import { IListProps } from '@shared/List/interface';
import ListItem from '@shared/ListItem';
import { IListItemProps } from '@shared/ListItem/interface';
import { NotCompleted, Completed } from '@shared/ListItem/stories';


const Template: Story<{ items: IListItemProps[] } & IListProps> = ({ items, ...args }) => {
  return (
    <List {...args}>
      {items.map(args => <ListItem {...args}/>)}
    </List>
  );
};

export default {
  title: 'Shared/List',
  component: List,
} as Meta;

export const Empty = Template.bind({});

export const SeveralItems = Template.bind({});
SeveralItems.args = {
  items: [{
    text: Completed.args!.text!,
    completed: Completed.args!.completed!,
  }, {
    text: NotCompleted.args!.text!,
    completed: NotCompleted.args!.completed!,
  }],
  description: 'Описание списка',
};
