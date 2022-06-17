import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const NotFound: NextPage = () => {
  return (
    <div>
      <h1>404</h1>
      <h2>could not find {useRouter().asPath}</h2>
    </div>
  );
};

export default NotFound;
