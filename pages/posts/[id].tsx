import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { gql, useQuery } from '@apollo/client';

const Posts: NextPage = () => {
  const query = gql`
    query post($id: ID!) {
      post(id: $id)
    }
  `;

  const { id } = useRouter().query;
  const { error, loading, data } = useQuery(query, { variables: { id: id } });

  if (loading) return <h1>loading</h1>;
  if (error) return <h1>error</h1>;

  console.log(data);

  return (
    <div>
      <h1>posts id: {data.post}</h1>
    </div>
  );
};

export default Posts;
