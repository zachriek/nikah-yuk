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
          <a className="btn btn-primary" href="https://goo.gl/maps/VQkfemxTAWJBn21y8" target="_blank" rel="noreferrer noopener">
            <MdLocationOn className="text-white" />
            <span className="ml-2">Google Map</span>
          </a>
        </div>
        <iframe
          title="map"
          className="w-full h-[500px] mt-12"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63555.490538271646!2d105.24430149134044!3d-5.383679250305551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40db78c9ab3151%3A0x86d9409fa4591f4e!2sPerumahan%20Nusantara%20Permai!5e0!3m2!1sen!2sid!4v1680320500973!5m2!1sen!2sid"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default MapSection;
