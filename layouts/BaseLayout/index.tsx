import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
const Navbar = dynamic(() => import('@/components/Navbar'));

interface IProps {
  title: string;
  children: React.ReactNode;
}

const BaseLayout = ({ title, children }: IProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="bg-zinc-50">
        <Navbar />
        {children}
      </div>
    </>
  );
};

export default BaseLayout;
