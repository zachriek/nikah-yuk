import { TbMusic, TbMusicOff } from 'react-icons/tb';

interface Props {
  isPlay: boolean;
  handlePlayMusic: () => void;
}

const MusicPlayer = ({ handlePlayMusic, isPlay }: Props) => {
  return (
    <div className="fixed bottom-[120px] right-[30px] w-[50px] h-[50px] text-white bg-black/70 flex items-center justify-center rounded-full cursor-pointer z-[999]" onClick={handlePlayMusic}>
      {isPlay ? <TbMusic /> : <TbMusicOff />}
    </div>
  );
};

export default MusicPlayer;
