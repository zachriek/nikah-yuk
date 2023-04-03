import { MdLocationOn } from 'react-icons/md';

interface Props {
  title: string;
  date: string;
  time: string;
  place: string;
  location: string;
  locationHref: string;
}

const EventCard = ({ title, date, time, place, location, locationHref }: Props) => {
  return (
    <div className="w-full max-w-md bg-white mx-auto px-12 py-6 border border-zinc-300 border-t-[5px] border-t-zinc-800 shadow-xl mt-12">
      <h2 className="text-5xl font-secondary text-center text-zinc-800 leading-tight">{title}</h2>
      <hr className="my-4" />
      <div className="flex justify-between items-center">
        <div className="flex-1 flex flex-col justify-center items-center text-center">
          <h6 className="font-medium text-zinc-600">Tanggal</h6>
          <h5 className="font-medium text-zinc-800">{date}</h5>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center text-center">
          <h6 className="font-medium text-zinc-600">Pukul</h6>
          <h5 className="font-medium text-zinc-800">{time}</h5>
        </div>
      </div>
      <p className="text-zinc-600 text-center mt-8">{place}</p>
      <p className="text-zinc-800 font-medium text-center mt-2">{location}</p>
      <div className="flex justify-center mt-8">
        <a href={locationHref} className="btn btn-primary" target="_blank" rel="noreferrer noopener">
          <MdLocationOn className="text-white" />
          <span className="ml-2">Google Map</span>
        </a>
      </div>
    </div>
  );
};

export default EventCard;
