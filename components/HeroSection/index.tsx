const HeroSection = () => {
  return (
    <section className="h-screen bg-hero bg-cover bg-center bg-no-repeat bg-fixed relative" id="beranda">
      <div className="overlay"></div>
      <div className="container relative mx-auto h-full flex flex-col justify-center items-center">
        <h1 className="sm:text-6xl md:text-8xl text-5xl font-secondary text-zinc-50 leading-tight mt-[200px] mb-4" data-aos="fade-down">
          Ali & Zahra
        </h1>
        <p className="text-zinc-200 text-center sm:text-[20px] mb-8" data-aos="fade-down" data-aos-delay="300">
          Akan Segera Melangsungkan Pernikahan Suci
        </p>
        <h3 className="sm:text-[32px] text-[24px] font-medium text-zinc-100 leading-tight" data-aos="fade-down" data-aos-delay="800">
          Minggu, 30 April 2023
        </h3>
      </div>
    </section>
  );
};

export default HeroSection;
