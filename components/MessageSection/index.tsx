import { useState } from 'react';
import dynamic from 'next/dynamic';
import useSWR from 'swr';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GiLovers } from 'react-icons/gi';
const WishesCard = dynamic(() => import('@/components/WishesCard'));
const MessageModal = dynamic(() => import('@/components/MessageModal'));
const Loading = dynamic(() => import('@/components/Loading'));
import 'swiper/css';
import 'swiper/css/pagination';

const fetcher = (url: any) => fetch(url).then((res) => res.json());

const MessageSection = () => {
  const { data, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/wishes`, fetcher);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  return (
    <section className="section pb-[200px]" id="ucapan">
      <div className="container mx-auto flex flex-col">
        <h2 className="sm:text-6xl text-5xl font-secondary font-bold text-center text-zinc-800 leading-tight mb-8" data-aos="fade-down" data-aos-delay="300">
          Ucapan dan Doa
        </h2>
        <div className="flex justify-center mb-6" data-aos="fade-down" data-aos-delay="1000">
          <button className="btn btn-primary" onClick={() => setIsShowModal(true)}>
            <GiLovers />
            <span className="ml-2">Buat Ucapan</span>
          </button>
        </div>
        <div className="w-full" data-aos="fade-down" data-aos-delay="600">
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={30}
            grabCursor={true}
            loop={true}
            pagination={{ clickable: true }}
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
            {isLoading && <Loading />}
            {data?.data?.wishes?.map((message: any, index: any) => (
              <SwiperSlide key={index}>
                <WishesCard name={message.name} message={message.body} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <MessageModal isShowModal={isShowModal} setIsShowModal={setIsShowModal} />
    </section>
  );
};

export default MessageSection;
