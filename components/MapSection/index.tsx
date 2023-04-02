import { MdLocationOn } from 'react-icons/md';

const MapSection = () => {
  return (
    <section className="section" id="lokasi">
      <div className="container mx-auto flex flex-col">
        <h2 className="sm:text-6xl text-5xl font-secondary font-bold text-center text-zinc-800 leading-tight mb-4" data-aos="fade-down" data-aos-delay="300">
          Peta Lokasi
        </h2>
        <p className="text-zinc-600 text-center sm:text-[18px] max-w-[750px] mx-auto" data-aos="fade-down" data-aos-delay="600">
          Anda dapat menuju lokasi acara kami dengan bantuan peta dibawah ini atau anda bisa buka di
        </p>
        <div className="flex justify-center mt-4" data-aos="fade-down" data-aos-delay="1000">
          <a className="btn btn-primary" href="https://goo.gl/maps/SPNzBYszhqLiFmTZ6" target="_blank" rel="noreferrer noopener">
            <MdLocationOn className="text-white" />
            <span className="ml-2">Google Map</span>
          </a>
        </div>
        <iframe
          title="map"
          className="w-full h-[500px] mt-12"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3972.0860976780314!2d105.30753482133149!3d-5.4038543689180765!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40db7f2bead923%3A0x78ea0b47d6fc60d0!2sJl.%20Merpati%20No.35%2C%20Campang%20Raya%2C%20Kec.%20Tanjungkarang%20Timur%2C%20Kota%20Bandar%20Lampung%2C%20Lampung%2035122!5e0!3m2!1sid!2sid!4v1680447699919!5m2!1sid!2sid"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default MapSection;
