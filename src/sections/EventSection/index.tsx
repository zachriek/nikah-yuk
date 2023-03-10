import EventCard from '../../components/EventCard';

const EventSection = () => {
  return (
    <section className="section" id="acara">
      <div className="container mx-auto flex flex-col">
        <h2 className="text-6xl font-secondary font-bold text-center text-zinc-800 leading-tight mb-4" data-aos="fade-down" data-aos-delay="500">
          Jadwal Acara
        </h2>
        <p className="text-zinc-600 text-center sm:text-[18px] max-w-[750px] mx-auto" data-aos="fade-down" data-aos-delay="800">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila bapak/ ibu/saudara/i berkenan hadir di acara Unduh Mantu putra putri kami.
        </p>
        <h3 className="text-[24px] text-center font-medium text-zinc-800 leading-tight my-6" data-aos="fade-down" data-aos-delay="1100">
          yang Insya Allah akan dilaksanakan pada:
        </h3>
        <div className="flex flex-wrap justify-center gap-x-10" data-aos="fade-down" data-aos-delay="1400">
          <EventCard title="Akad Nikah" date="19 Februari 2023" time="10.00 - Selesai" locationHref="https://goo.gl/maps/YccHkzkqPG6FEH2P7" data-aos="fade-down" />
          <EventCard title="Resepsi Nikah" date="19 Februari 2023" time="10.00 - Selesai" locationHref="https://goo.gl/maps/YccHkzkqPG6FEH2P7" data-aos="fade-down" />
        </div>
      </div>
    </section>
  );
};

export default EventSection;
