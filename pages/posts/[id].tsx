import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { gql, useQuery } from '@apollo/client';

const Posts: NextPage = () => {
  const query = gql`
    query post($id: ID!) {
      post(id: $id) {
        id
        title
        content
      }
    }
  `;

  const { id } = useRouter().query;
  const { error, loading, data } = useQuery(query, { variables: { id: id } });

  if (loading) return <h1>loading</h1>;
  if (error) return <h1>error</h1>;

  console.log(data);

  return (
    <div>
      <h1>title: {data.post.title}</h1>
      <h2>content: {data.post.content}</h2>
      <h2>id: {data.post.id}</h2>
    </div>
  );
};

export default Posts;
