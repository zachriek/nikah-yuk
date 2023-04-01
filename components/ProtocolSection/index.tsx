import { FaHandsWash } from 'react-icons/fa';
import { MdSocialDistance, MdMasks } from 'react-icons/md';

const protocols = [
  { icon: <FaHandsWash />, text: 'Mencuci Tangan' },
  { icon: <MdSocialDistance />, text: 'Menjaga Jarak' },
  { icon: <MdMasks />, text: 'Memakai Masker' },
];

const ProtocolSection = () => {
  return (
    <section className="section" id="prokes">
      <div className="container mx-auto flex flex-col">
        <h2 className="sm:text-6xl text-5xl font-secondary font-bold text-center text-zinc-800 leading-tight mb-4" data-aos="fade-down" data-aos-delay="300">
          Protokol Kesehatan
        </h2>
        <p className="text-zinc-600 text-center sm:text-[18px] max-w-[750px] mx-auto" data-aos="fade-down" data-aos-delay="600">
          Tanpa mengurangi rasa hormat demi mengurangi penyebaran pandemi, mohon untuk tetap mengikuti protokol kesehatan dan datang tepat waktu sesuai dengan jam yang sudah tertera diundangan.
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[50px] mt-12">
          {protocols.map((protocol, index) => (
            <div key={index} className="flex flex-col items-center" data-aos="fade-down" data-aos-delay={600 + 300 * (index + 1)}>
              <div className="text-[150px] text-zinc-800 mb-4">{protocol.icon}</div>
              <p className="text-zinc-600 text-center sm:text-[18px] max-w-[750px] mx-auto">{protocol.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProtocolSection;
