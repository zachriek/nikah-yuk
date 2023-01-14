import { useState, useRef } from 'react';
import { MusicPlayer } from '../../components';
import { BrideSection, CoverSection, EventSection, GallerySection, HeroSection, MapSection, MessageSection, ProtocolSection } from '../../sections';

const Invitation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isPlay, setIsPlay] = useState<boolean>(true);

  const audioRef = useRef<any>();

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handlePlayMusic = () => {
    if (audioRef.current.paused || !isPlay) {
      setIsPlay(true);
      audioRef.current.play();
    } else {
      setIsPlay(false);
      audioRef.current.pause();
    }
  };

  return (
    <>
      {!isOpen ? (
        <CoverSection handlePlayMusic={handlePlayMusic} handleOpen={handleOpen} />
      ) : (
        <>
          <HeroSection />
          <BrideSection />
          <GallerySection />
          <EventSection />
          <ProtocolSection />
          <MapSection />
          <MessageSection />
          <MusicPlayer handlePlayMusic={handlePlayMusic} isPlay={isPlay} />
          <audio ref={audioRef} autoPlay loop>
            <source src="./assets/audio/music1.mp3" type="audio/mp3" />
          </audio>
        </>
      )}
    </>
  );
};

export default Invitation;
