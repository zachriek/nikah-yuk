import dynamic from 'next/dynamic';
import { useState } from 'react';
import { AiFillGift } from 'react-icons/ai';
const GiftModal = dynamic(() => import('@/components/GiftModal'));

const GiftSection = () => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  return (
    <section className="section" id="kado">
      <div className="container mx-auto flex flex-col">
        <div className="w-full bg-white mx-auto px-12 py-20 border border-zinc-300 border-t-[5px] border-t-zinc-800 shadow-xl text-center flex flex-col items-center">
          <h2 className="sm:text-6xl text-5xl font-secondary font-bold text-zinc-800 leading-tight mb-4" data-aos="fade-down" data-aos-delay="500">
            Kirim Kado
          </h2>
          <p className="text-zinc-600 sm:text-[18px] max-w-[750px] mx-auto mb-6" data-aos="fade-down" data-aos-delay="800">
            Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Dan jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara cashless.
          </p>
          <button className="btn btn-primary" onClick={() => setIsShowModal(true)}>
            <AiFillGift />
            <span className="ml-2">Kado Digital</span>
          </button>
        </div>
      </div>
      <GiftModal isShowModal={isShowModal} setIsShowModal={setIsShowModal} />
    </section>
  );
};

export default GiftSection;
