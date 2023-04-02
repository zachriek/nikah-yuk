import Image from 'next/image';

const GallerySection = () => {
  return (
    <section className="section" id="galeri">
      <div className="container mx-auto flex flex-col">
        <h2 className="sm:text-6xl text-5xl font-secondary font-bold text-center text-zinc-800 leading-tight mb-4" data-aos="fade-down">
          Galeri Foto
        </h2>
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-[50px] mt-12">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
            <Image key={index} src={`/assets/images/gallery-${item}.jpeg`} alt="gallery" width={0} height={0} sizes="100vw" className="w-full shadow" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
