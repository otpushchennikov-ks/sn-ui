import { FC, useEffect } from 'react';
import { ILoginDialogueProps } from './interface';
import { Modal, Button } from 'antd';
import { GithubOutlined, LogoutOutlined } from '@ant-design/icons';
import { gql } from '@apollo/client';
import apolloClient from '@lib/apolloClient';
import { useRouter } from 'next/router';
import cookieAPI from 'js-cookie';


const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`;

const ME_QUERY = gql`
  query me {
    me {
      githubLogin
      name
      avatar
    }
  }
`;

const GITHUB_AUTH_MUTATION = gql`
  mutation githubAuth($code: String!) {
    githubAuth(code: $code) {
      githubToken
      user {
        githubLogin
        name
        avatar
      }
    }
  }
`;

const LoginDialogue: FC<ILoginDialogueProps> = ({ onCancel, isOpen }) => {
  const router = useRouter();

  useEffect(() => {
    const code = router.query.code;
    if (!code) return;

    apolloClient.mutate({
      mutation: GITHUB_AUTH_MUTATION,
      variables: { code: code as string },
    })
      .then(({ data }) => {
        const {
          githubAuth: {
            githubToken,
            user,
          },
        } = data;

        cookieAPI.set('github-token', githubToken);
        apolloClient.cache.writeQuery({ query: ME_QUERY, data: { me: user }});
        router.replace('/');
      });
  }, [router]);

  return (
    <Modal
      title="Аутентификация"
      visible={isOpen}
      onCancel={onCancel}
      footer={null}
    >
      <Button onClick={() => window.location.replace(githubAuthUrl)}>
        <span>Log in with GitHub</span>
        <GithubOutlined style={{ marginLeft: 10 }} />
      </Button>
      <Button
        onClick={() => {
          cookieAPI.remove('github-token');
          apolloClient.cache.writeQuery({ query: ME_QUERY, data: { me: null }});
          onCancel();
        }}
        style={{ marginLeft: 10 }}
      >
        <span>Log out</span>
        <LogoutOutlined style={{ marginLeft: 10 }} />
      </Button>
    </Modal>
  );
};

export default LoginDialogue;
