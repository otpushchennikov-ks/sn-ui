import { GetServerSideProps, InferGetServerSidePropsType } from 'next/types';
import Link from 'next/link';
import { FC, useEffect } from 'react';
import { gql } from '@apollo/client';
import IUser from '@interfaces/IUser';
import apolloClient, { initApollo } from '@lib/apolloClient';


const ME_QUERY = gql`
  query me {
    me {
      githubLogin
      name
      avatar
    }
  }
`;

const Profile: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ me }) => {
  // useEffect(() => {
  //   apolloClient.query({ query: ME_QUERY, fetchPolicy: 'cache-first' })
  //     .then(data => {
  //       console.log('client side me data', data);
  //       console.log('client side cache', apolloClient.cache.readQuery({ query: ME_QUERY }));
  //     });
  // }, []);

  return (
    <div>
      Profile {me?.name}
      <Link href="/"><a>Home</a></Link>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<{ me: IUser | null }> = async context => {
  const apolloClient = initApollo(context);
  const { data } = await apolloClient.query({ query: ME_QUERY });

  return {
    props: {
      me: data.me
    },
  };
};

export default Profile;
