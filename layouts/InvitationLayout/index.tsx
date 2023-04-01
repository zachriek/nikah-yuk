import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
const NavbarBottom = dynamic(() => import('@/components/NavbarBottom'));

interface IProps {
  title: string;
  children: React.ReactNode;
}

const InvitationLayout = ({ title, children }: IProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <NavbarBottom />
      {children}
    </>
  );
};

export default InvitationLayout;
