import Image from 'next/image';
import { useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Lightbox, { ImagesListType } from 'react-spring-lightbox';

const images: ImagesListType = [
  {
    src: '/assets/images/gallery-1.jpeg',
    loading: 'lazy',
    alt: 'Gallery 1',
  },
  {
    src: '/assets/images/gallery-2.jpeg',
    loading: 'lazy',
    alt: 'Gallery 2',
  },
  {
    src: '/assets/images/gallery-3.jpeg',
    loading: 'lazy',
    alt: 'Gallery 3',
  },
  {
    src: '/assets/images/gallery-4.jpeg',
    loading: 'lazy',
    alt: 'Gallery 4',
  },
  {
    src: '/assets/images/gallery-5.jpeg',
    loading: 'lazy',
    alt: 'Gallery 5',
  },
  {
    src: '/assets/images/gallery-6.jpeg',
    loading: 'lazy',
    alt: 'Gallery 6',
  },
  {
    src: '/assets/images/gallery-7.jpeg',
    loading: 'lazy',
    alt: 'Gallery 7',
  },
  {
    src: '/assets/images/gallery-8.jpeg',
    loading: 'lazy',
    alt: 'Gallery 8',
  },
];

const GallerySection = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentImageIndex, setCurrentIndex] = useState<number>(0);

  const gotoPrevious = () => currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);

  const gotoNext = () => currentImageIndex + 1 < images.length && setCurrentIndex(currentImageIndex + 1);

  return (
    <section className="section" id="galeri">
      <div className="container mx-auto flex flex-col">
        <h2 className="sm:text-6xl text-5xl font-secondary font-bold text-center text-zinc-800 leading-tight mb-4" data-aos="fade-down">
          Galeri Foto
        </h2>
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-[50px] mt-12">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
            <Image
              key={index}
              src={`/assets/images/gallery-${item}.jpeg`}
              alt={`gallery-${item}`}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full shadow cursor-pointer"
              onClick={() => {
                setCurrentIndex(index);
                setIsOpen(true);
              }}
            />
          ))}
        </div>
        <Lightbox
          isOpen={isOpen}
          onPrev={gotoPrevious}
          onNext={gotoNext}
          images={images}
          currentIndex={currentImageIndex}
          renderPrevButton={() => <AiOutlineArrowLeft className="text-5xl sm:ml-10 text-white" />}
          renderNextButton={() => <AiOutlineArrowRight className="text-5xl sm:mr-10 text-white" />}
          className="bg-zinc-900"
          onClose={() => setIsOpen(false)}
          pageTransitionConfig={{
            from: { transform: 'scale(0.75)', opacity: 0 },
            enter: { transform: 'scale(1)', opacity: 1 },
            leave: { transform: 'scale(0.75)', opacity: 0 },
            config: { mass: 1, tension: 320, friction: 32 },
          }}
        />
      </div>
    </section>
  );
};

export default GallerySection;
