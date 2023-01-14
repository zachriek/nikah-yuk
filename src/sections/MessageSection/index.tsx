import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { WishesCard } from '../../components';

const messages = [
  {
    name: 'Adi Nugroho',
    message:
      'May your marriage be filled with all the right ingredients: a heap of love, a dash of humor, a touch or romance and a spoonful of understanding. May your joy last forever. Congratulation!🕊️',
  },
  {
    name: 'Shas Aprilian',
    message: 'Congratulations my sweetie, wish you both the best',
  },
  {
    name: 'Stevy Winnie Jimshoney',
    message: 'Congratulations to Bride and Groom! May You enjoy much love and happiness throughout your lives together.',
  },
];

const MessageSection = () => {
  return (
    <section className="section pb-[200px]" id="ucapan">
      <div className="container mx-auto flex flex-col">
        <h2 className="text-6xl font-secondary font-bold text-center text-zinc-800 leading-tight mb-4" data-aos="fade-down" data-aos-delay="300">
          Ucapan dan Doa
        </h2>
        <div className="w-full" data-aos="fade-down" data-aos-delay="600">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            grabCursor={true}
            loop={true}
            breakpoints={{
              576: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
              1170: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {messages.map((message, index) => (
              <SwiperSlide key={index}>
                <WishesCard name={message.name} message={message.message} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;
