import dynamic from 'next/dynamic';
import { NextPage } from 'next';
import Link from 'next/link';
import Lottie from 'lottie-react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import InvitationAnimation from '../assets/lotties/send-invitation.json';
const BaseLayout = dynamic(() => import('@/layouts/BaseLayout'));

const Home: NextPage = () => {
  return (
    <BaseLayout title="Beranda">
      <section className="h-screen">
        <div className="container mx-auto h-full flex justify-center items-center">
          <div className="flex-1 flex flex-col items-start">
            <h1 className="text-[64px] font-bold text-zinc-800 leading-tight">
              Buat Undangan <br /> Lebih Mudah
            </h1>
            <Link href="/ali-zahra" className="btn btn-primary mt-6">
              <AiOutlineArrowRight />
              <span className="ml-2">Mulai Sekarang</span>
            </Link>
          </div>
          <div className="flex-1">
            <Lottie animationData={InvitationAnimation} loop={true}></Lottie>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
};

export default Home;
