import React from 'react';
import { Story, Meta } from '@storybook/react';
import List from '@shared/List';
import { IListProps } from '@shared/List/interface';
import ListItem from '@shared/ListItem';
import { IListItemProps } from '@shared/ListItem/interface';
import { NotCompleted, Completed } from '@shared/ListItem/stories';
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs/blocks';


const Template: Story<{ items: IListItemProps[] } & IListProps> = ({ items, ...args }) => {
  return (
    <List {...args}>
      {items.map(args => <ListItem {...args}/>)}
    </List>
  );
};

export default {
  title: 'v1/List/List',
  component: List,
  subcomponents: { ListItem },
} as Meta;

export const Empty = Template.bind({});
Empty.args = {
  items: [],
  description: 'Описание пустого списка',
};
Empty.parameters = {
  docs: {
    page: () => {
      return (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      );
    },
  },
};

export const SeveralItems = Template.bind({});
SeveralItems.args = {
  items: [{
    text: Completed.args!.text!,
    completed: Completed.args!.completed!,
  }, {
    text: NotCompleted.args!.text!,
    completed: NotCompleted.args!.completed!,
  }],
  description: 'Описание непустого списка',
};
