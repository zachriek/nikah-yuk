import { MdLocationOn } from 'react-icons/md';

const MapSection = () => {
  return (
    <section className="section" id="lokasi">
      <div className="container mx-auto flex flex-col">
        <h2 className="text-6xl font-secondary font-bold text-center text-zinc-800 leading-tight mb-4" data-aos="fade-down" data-aos-delay="300">
          Peta Lokasi
        </h2>
        <p className="text-zinc-600 text-center sm:text-[18px] max-w-[750px] mx-auto" data-aos="fade-down" data-aos-delay="600">
          Anda dapat menuju lokasi acara kami dengan bantuan peta dibawah ini atau anda bisa buka di
        </p>
        <div className="flex justify-center mt-4" data-aos="fade-down" data-aos-delay="1000">
          <a className="btn btn-primary" href="https://goo.gl/maps/YccHkzkqPG6FEH2P7" target="_blank" rel="noreferrer noopener">
            <MdLocationOn className="text-white" />
            <span className="mx-2">Google Map</span>
          </a>
        </div>
        <iframe
          title="map"
          className="w-full h-[500px] mt-12"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d371.44738726663593!2d105.26516862222601!3d-5.368870922520248!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40dad573dcf7ef%3A0x312fc384b055b5a5!2sJ7J8%2BG25%2C%20Sepang%20Jaya%2C%20Kedaton%2C%20Bandar%20Lampung%20City%2C%20Lampung%2035136!5e0!3m2!1sen!2sid!4v1673533243482!5m2!1sen!2sid"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default MapSection;
