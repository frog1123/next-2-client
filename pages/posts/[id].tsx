import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import { gql } from '@apollo/client';
import client from '../../apollo-client';

const Posts: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState<any>(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data } = await client.query({
        query: gql`
          query {
            post(id: "asdas")
          }
        `
      });
      setData(data);
      setLoading(false);

      // console.log(data);
    };

    fetchData();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <div>
      <h1>posts id: {data.post}</h1>
    </div>
  );
};

export default Posts;
