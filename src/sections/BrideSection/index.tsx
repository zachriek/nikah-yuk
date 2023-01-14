const BrideSection = () => {
  return (
    <section className="section" id="mempelai">
      <div className="container mx-auto flex flex-col">
        <h2 className="text-6xl font-secondary font-bold text-center text-zinc-800 leading-tight mb-4" data-aos="fade-down">
          Assalamu'alaikum Warahmatullah
        </h2>
        <p className="text-zinc-600 text-center sm:text-[18px]" data-aos="fade-down" data-aos-delay="300">
          Dengan Rahmat Allah yang Maha Kuasa InsyaAllah kami akan melangsungkan pernikahan pada:
        </p>
        <h3 className="sm:text-[32px] text-[24px] text-center font-medium text-zinc-800 leading-tight my-6" data-aos="fade-down" data-aos-delay="800">
          Sabtu, 17 Desember 2022
        </h3>
        <p className="text-zinc-600 text-center sm:text-[18px]" data-aos="fade-down" data-aos-delay="1100">
          di Kediaman Mempelai Wanita
        </p>
        <div className="flex flex-col sm:flex-row justify-center mt-12" data-aos="fade-down" data-aos-delay="1500">
          <div className="flex flex-1 flex-col items-center mb-12 sm:mb-0">
            <img src="./assets/images/groom.jpg" alt="groom" className="w-[250px] rounded-full mb-8" />
            <h5 className="text-4xl font-secondary text-center text-zinc-800 leading-tight mb-2">Muhammad Zachrie Kurniawan</h5>
            <p className="text-zinc-600 text-center">Putra Bapak Yanto dan Ibu Supri</p>
          </div>
          <div className="flex flex-1 flex-col items-center">
            <img src="./assets/images/bride.jpg" alt="bride" className="w-[250px] rounded-full mb-8" />
            <h5 className="text-4xl font-secondary text-center text-zinc-800 leading-tight mb-2">Rachmi Kurniati</h5>
            <p className="text-zinc-600 text-center">Putra Bapak Yanto dan Ibu Supri</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrideSection;
