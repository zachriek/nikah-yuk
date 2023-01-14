const HeroSection = () => {
  return (
    <section className="h-screen bg-hero bg-cover bg-left bg-fixed relative" id="beranda">
      <div className="overlay"></div>
      <div className="container relative mx-auto h-full flex flex-col justify-center items-center">
        <h1 className="sm:text-8xl text-6xl font-secondary text-zinc-50 leading-tight mb-2" data-aos="fade-down">
          Ari & Nia
        </h1>
        <p className="text-zinc-200 text-center sm:text-[20px] mb-4" data-aos="fade-down" data-aos-delay="300">
          Akan Segera Melangsungkan Pernikahan Suci
        </p>
        <h3 className="sm:text-[32px] text-[24px] font-medium text-zinc-100 leading-tight" data-aos="fade-down" data-aos-delay="800">
          Senin, 20 Februari 2023
        </h3>
      </div>
    </section>
  );
};

export default HeroSection;
