import dynamic from 'next/dynamic';
const EventCard = dynamic(() => import('@/components/EventCard'));

const EventSection = () => {
  return (
    <section className="section" id="acara">
      <div className="container mx-auto flex flex-col">
        <h2 className="sm:text-6xl text-5xl font-secondary font-bold text-center text-zinc-800 leading-tight mb-4" data-aos="fade-down" data-aos-delay="500">
          Jadwal Acara
        </h2>
        <p className="text-zinc-600 text-center sm:text-[18px] max-w-[750px] mx-auto" data-aos="fade-down" data-aos-delay="800">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila bapak/ ibu/saudara/i berkenan hadir di acara Pernikahan putra putri kami.
        </p>
        <h3 className="text-[24px] text-center font-medium text-zinc-800 leading-tight my-6" data-aos="fade-down" data-aos-delay="1100">
          yang Insya Allah akan dilaksanakan pada:
        </h3>
        <div className="flex flex-wrap justify-center gap-x-10" data-aos="fade-down" data-aos-delay="1400">
          <EventCard
            title="Akad Nikah"
            date="30 April 2023"
            time="08.00 - Selesai"
            place="Bertempat di Kediaman Mempelai Wanita"
            location="Perumahan Nusantara Blok B8 No.34, Sukabumi, Bandar Lampung"
            locationHref="https://goo.gl/maps/SPNzBYszhqLiFmTZ6"
            data-aos="fade-down"
          />
          <EventCard
            title="Resepsi Nikah"
            date="30 April 2023"
            time="10.00 - Selesai"
            place="Bertempat di Kediaman Mempelai Wanita"
            location="Perumahan Nusantara Blok B8 No.34, Sukabumi, Bandar Lampung"
            locationHref="https://goo.gl/maps/SPNzBYszhqLiFmTZ6"
            data-aos="fade-down"
          />
        </div>
      </div>
    </section>
  );
};

export default EventSection;
