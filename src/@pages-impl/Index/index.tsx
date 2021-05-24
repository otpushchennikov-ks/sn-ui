import Link from 'next/link';
import { FC } from 'react';


const RootPage: FC  = () => {
  return (
    <div>
      <div>Root</div>
      <Link href="/profile"><a>Profile</a></Link>
    </div>
  );
};

export default RootPage;