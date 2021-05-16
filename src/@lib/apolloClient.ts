import { GetServerSidePropsContext } from 'next/types';
import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client';
import cookie from 'cookie';
import cookieAPI from 'js-cookie';
import { persistCacheSync, LocalStorageWrapper } from 'apollo3-cache-persist';


function initApollo(ssrContext?: GetServerSidePropsContext) {
  const ssrMode = typeof window === 'undefined';
  const storageKey = 'apollo-cache-persist';
  
  const cache = new InMemoryCache();
  
  if (!ssrMode) {
    persistCacheSync({
      cache,
      storage: new LocalStorageWrapper(window.localStorage),
      key: storageKey,
    });
  }

  if (!ssrMode && window.localStorage.getItem(storageKey)) {
    cache.restore(JSON.parse(window.localStorage.getItem(storageKey)!));
  }

  const httpLink = new HttpLink({ uri: 'http://localhost:4000/graphql' });

  const authLink = new ApolloLink((operation, forward) => {
    const githubToken = (!ssrMode ?
      cookieAPI.get('github-token') ?? ''
      :
      cookie.parse(ssrContext?.req.headers.cookie ?? '')['github-token'] ?? ''
    );

    operation.setContext({
      headers: {
        'github-token': githubToken,
      },
    });
    return forward(operation);
  });

  const httpAuthLink = authLink.concat(httpLink);

  const apolloClient = new ApolloClient({
    link: httpAuthLink,
    credentials: 'include',
    cache,
    connectToDevTools: true,
    ssrMode,
  });

  return apolloClient;
}

const apolloClient = initApollo();

export default apolloClient;
export { initApollo };
