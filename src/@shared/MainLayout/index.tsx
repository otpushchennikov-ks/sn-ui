import React, { useEffect, useCallback } from 'react';
import { PageHeader, Button } from 'antd';
import { IMainLayoutProps } from './interface';
import { gql, useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { LoginOutlined, LogoutOutlined } from '@ant-design/icons';


const ME_QUERY = gql`
  query me {
    me {
      name
      avatar
      githubLogin
    }
  }
`;

const GITHUB_AUTH_MUTATION = gql`
  mutation auth($code: String!) {
    githubAuth(code: $code) {
      token
    }
  }
`;

export default function MainLayout({ children }: IMainLayoutProps) {
  const router = useRouter();
  const { data, loading, refetch: refetchMe } = useQuery(ME_QUERY);
  const [githubAuth, { data: authData }] = useMutation(GITHUB_AUTH_MUTATION);
  
  const token = authData?.githubAuth?.token;
  
  useEffect(() => {
    const { query: { code }, route } = router;
    if (!code) return;
    router.replace(route);
    githubAuth({ variables: { code }})
      .then(({ data }) => {
        localStorage.setItem('github-token', data.githubAuth.token);
        refetchMe();
      });
  }, [router]);

  const handleLogin = useCallback(() => {
    // client_id: is a public key: https://docs.github.com/en/developers/apps/authorizing-oauth-apps
    window.location.replace('https://github.com/login/oauth/authorize?client_id=f4eb8cb00931c3bf639e');
  }, []);

  const handleLogout = useCallback(() => {
    localStorage.removeItem('github-token');
    refetchMe();
  }, [router]);

  return (
    <PageHeader
      title={!loading && data.me?.name}
      subTitle={!loading && data.me?.githubLogin}
      avatar={{ size: 60, src: loading ? undefined : (data.me?.avatar ?? undefined) }}
      extra={loading ? null : (
        !data.me ?
          <Button onClick={handleLogin}>
            <LoginOutlined />
            Log in
          </Button>
          :
          <Button onClick={handleLogout}>
            <LogoutOutlined />
            Log out
          </Button>
      )}
    >
      {children}
    </PageHeader>
  );
}
