import { useEffect } from 'react';
import { MdArrowDownward } from 'react-icons/md';

interface Props {
  handlePlayMusic: () => void;
  handleOpen: () => void;
}

const CoverSection = ({ handlePlayMusic, handleOpen }: Props) => {
  const handleOpenInvitation = () => {
    document.body.classList.remove('overflow-hidden');
    handleOpen();
    handlePlayMusic();
  };

  useEffect(() => {
    document.body.classList.add('overflow-hidden');
  }, []);

  return (
    <section className="flex justify-center items-center fixed top-0 left-0 w-full h-screen bg-white z-[999]">
      <div className="container mx-auto h-full flex flex-col justify-center items-center">
        <h3 className="sm:text-[32px] text-[24px] font-medium text-zinc-800 leading-tight mb-4" data-aos="fade-down">
          The Wedding of
        </h3>
        <h1 className="sm:text-8xl text-6xl font-secondary text-zinc-800 leading-tight mb-6" data-aos="fade-down" data-aos-delay="300">
          Ari & Nia
        </h1>
        <button className="btn btn-primary" onClick={handleOpenInvitation} data-aos="fade-down" data-aos-delay="800">
          <span className="mx-2">Buka Undangan</span>
          <MdArrowDownward />
        </button>
      </div>
    </section>
  );
};

export default CoverSection;
