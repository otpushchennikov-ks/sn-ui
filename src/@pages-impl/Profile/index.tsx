import Link from 'next/link';
import { FC } from 'react';


const ProfilePage: FC = () => {
  return (
    <div>
      <div>Profile</div>
      <Link href="/"><a>Home</a></Link>
    </div>
  );
};

export default ProfilePage;
