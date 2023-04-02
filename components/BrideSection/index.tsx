import Image from 'next/image';

const BrideSection = () => {
  return (
    <section className="section" id="mempelai">
      <div className="container mx-auto flex flex-col">
        <h2 className="sm:text-6xl text-5xl font-secondary font-bold text-center text-zinc-800 leading-tight mb-4" data-aos="fade-down">
          Assalamualaikum Warahmatullah
        </h2>
        <p className="text-zinc-600 text-center sm:text-[18px]" data-aos="fade-down" data-aos-delay="300">
          Dengan Rahmat Allah yang Maha Kuasa InsyaAllah kami akan melangsungkan pernikahan pada:
        </p>
        <h3 className="sm:text-[32px] text-[24px] text-center font-medium text-zinc-800 leading-tight my-6" data-aos="fade-down" data-aos-delay="800">
          Minggu, 30 April 2023
        </h3>
        <p className="text-zinc-600 text-center sm:text-[18px]" data-aos="fade-down" data-aos-delay="1100">
          di Kediaman Mempelai Wanita
        </p>
        <div className="flex flex-col sm:flex-row justify-center mt-12" data-aos="fade-down" data-aos-delay="1500">
          <div className="flex flex-1 flex-col items-center mb-12 sm:mb-0">
            <Image src="/assets/images/groom.jpg" alt="groom" width={0} height={0} sizes="100vw" className="w-[250px] h-auto rounded-full mb-8" />
            <h5 className="text-4xl font-secondary text-center text-zinc-800 leading-tight mb-4">Ali Akbar Afriyanto S.Pd</h5>
            <p className="text-zinc-700 font-medium text-center">Putra Keempat</p>
            <p className="text-zinc-600 text-center">Bapak Selamet Heriyanto (Alm) dan Ibu Suminah (Alm)</p>
          </div>
          <div className="flex flex-1 flex-col items-center">
            <Image src="/assets/images/bride.jpg" alt="bride" width={0} height={0} sizes="100vw" className="w-[250px] h-auto rounded-full mb-8" />
            <h5 className="text-4xl font-secondary text-center text-zinc-800 leading-tight mb-4">Mahdiyyah Zahra, Amd.Keb</h5>
            <p className="text-zinc-700 font-medium text-center">Putri Pertama</p>
            <p className="text-zinc-600 text-center">Bapak Irfan Sutojo dan Ibu Eliya Indrayana</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrideSection;
