import dynamic from 'next/dynamic';
const Fancybox = dynamic(() => import('@/components/Fancybox'));

const GallerySection = () => {
  return (
    <section className="section" id="galeri">
      <div className="container mx-auto flex flex-col">
        <h2 className="sm:text-6xl text-5xl font-secondary font-bold text-center text-zinc-800 leading-tight mb-4" data-aos="fade-down">
          Galeri Foto
        </h2>
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-[50px] mt-12">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
            <Fancybox
              key={index}
              options={{
                Carousel: {
                  infinite: false,
                },
              }}
            >
              <img
                data-fancybox="gallery"
                data-src={`/assets/images/gallery-${item}.jpeg`}
                src={`/assets/images/gallery-${item}.jpeg`}
                alt="gallery"
                className="w-full cursor-pointer shadow"
                data-aos="fade-down"
                data-aos-delay={item * 300}
              />
            </Fancybox>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
