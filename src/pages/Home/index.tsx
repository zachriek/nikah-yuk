import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Lottie from 'lottie-react';
import InvitationAnimation from '../../assets/lotties/send-invitation.json';

const Home = () => {
  return (
    <section className="h-screen">
      <div className="container mx-auto h-full flex justify-center items-center">
        <div className="flex-1 flex flex-col items-start">
          <h1 className="text-[64px] font-bold text-zinc-800 leading-tight">
            Buat Undangan <br /> Lebih Mudah
          </h1>
          <Link to="/ari-nia" className="btn btn-primary mt-6">
            <span className="mx-2">Mulai Sekarang</span>
            <AiOutlineArrowRight />
          </Link>
        </div>
        <div className="flex-1">
          <Lottie animationData={InvitationAnimation} loop={true}></Lottie>
        </div>
      </div>
    </section>
  );
};

export default Home;
