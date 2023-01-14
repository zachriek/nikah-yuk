import Fancybox from '../../components/Fancybox';

const GallerySection = () => {
  return (
    <section className="section" id="galeri">
      <div className="container mx-auto flex flex-col">
        <h2 className="text-6xl font-secondary font-bold text-center text-zinc-800 leading-tight mb-4" data-aos="fade-down">
          Galeri Foto
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[50px] mt-12">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
            <Fancybox key={index} options={{ infinite: false }}>
              <img
                data-fancybox="gallery"
                data-src={`./assets/images/gallery-${item}.jpg`}
                src={`./assets/images/gallery-${item}.jpg`}
                alt="gallery"
                className="w-full"
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
