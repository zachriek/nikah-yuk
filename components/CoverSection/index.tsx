import { useEffect } from 'react';
import { MdArrowDownward } from 'react-icons/md';

interface Props {
  handlePlayMusic: () => void;
  handleOpen: () => void;
  namaTamu: string | any;
}

const CoverSection = ({ handlePlayMusic, handleOpen, namaTamu }: Props) => {
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
        <h1 className="sm:text-8xl text-6xl font-secondary text-zinc-800 leading-tight mb-2" data-aos="fade-down" data-aos-delay="300">
          Ali & Zahra
        </h1>
        <p>Kepada Yth.</p>
        <p>Bapak/Ibu/Sahabat:</p>
        <p className="mb-10 font-semibold capitalize">{namaTamu}</p>
        <button className="btn btn-primary" onClick={handleOpenInvitation} data-aos="fade-down" data-aos-delay="800">
          <MdArrowDownward />
          <span className="ml-2">Buka Undangan</span>
        </button>
      </div>
    </section>
  );
};

export default CoverSection;
