import React, { FC } from 'react';
import MainLayout from '@shared/MainLayout';
import Link from 'next/link';
import indexStyles from '@styled/index.module.css';


const Index: FC = () => {
  return (
    <MainLayout>
      <div className={indexStyles.indexBg}>Index page</div>
      <Link href="/profile"><a>Profile</a></Link>
    </MainLayout>
  );
}

export default Index;
