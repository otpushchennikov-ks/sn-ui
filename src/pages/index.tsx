import MyComponent from '@shared/MyComponent';
import { useState } from 'react';
import DictsContext from '@context/DictsContext';
import List from '@shared/List';
import ListItem from '@shared/ListItem';
import { IListItemProps } from '@shared/ListItem/interface';
import { GetStaticProps, GetServerSideProps, GetStaticPaths } from 'next/types';


interface IIndexProps {
  foo: string
  bar?: number
}

export default function Index({}: IIndexProps) {
  const [listData] = useState<IListItemProps[]>([
    {
      text: 'Элемент 1',
      completed: false,
    },
    {
      text: 'Элемент 2',
      completed: false,
    },
    {
      text: 'Элемент 3',
      completed: true,
    },
  ]);

  return (
    <DictsContext.Provider value={{
      district: [
        { name: 'ЗАО' },
        { name: 'ВАО' },
      ],
    }}>
      <div>Index</div>
      <MyComponent
        size="normal"
        header="Normal header"
        mapHeader={header => header.toUpperCase()}
        content="Normal content"
        onClick={() => console.log('clicked')}
      />
      <List>
        {listData.map(({ text, completed }, i) => {
          return (
            <ListItem
              key={text + i}
              text={text}
              completed={completed}
            />
          );
        })}
      </List>
    </DictsContext.Provider>
  );
}

export const getStaticProps: GetStaticProps<IIndexProps> = async ({ params }) => {
  return {
    props: {
      foo: 'sometext',
    },
    redirect: 1,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: '1' }}],
    fallback: true,
  };
};
