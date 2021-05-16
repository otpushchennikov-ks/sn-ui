import { FunctionComponent, ClassicComponent } from 'react';
import { useQuery, DocumentNode, QueryResult } from '@apollo/client';
import { GetServerSidePropsResult } from 'next/types';



// const withQuery = <T extends { data: any }>(query: DocumentNode, options: Parameters<typeof useQuery>[1] = {}) => {
//   return (Component: FunctionComponent | ClassicComponent) => {
//     const C = (props: GetServerSidePropsResult<T>) => {
//       const initial = props.data;
//       const { data, loading, error } = useQuery(query, options);

//       // return <Component {...props} data={loading ? initial : data} loading={loading} error={error} />;
//       return null;
//     };

//     C.displayName = `withQuery(${Component.displayName || Component.name})`;
//     C.wrappedComponent = Component;

//     return hoistStatics(C, Component);
//   };
// };