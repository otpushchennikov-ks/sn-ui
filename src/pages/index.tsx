import React, { FC } from 'react';
import MainLayout from '@shared/MainLayout';
import Link from 'next/link';


const Index: FC = () => {
  return (
    <MainLayout>
      Index page
      <Link href="/profile"><a>Profile</a></Link>
    </MainLayout>
  );
}

export default Index;
