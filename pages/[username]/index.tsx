import { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
const InvitationLayout = dynamic(() => import('@/layouts/InvitationLayout'));
const CoverSection = dynamic(() => import('@/components/CoverSection'));
const HeroSection = dynamic(() => import('@/components/HeroSection'));
const BrideSection = dynamic(() => import('@/components/BrideSection'));
const GallerySection = dynamic(() => import('@/components/GallerySection'));
const EventSection = dynamic(() => import('@/components/EventSection'));
const GiftSection = dynamic(() => import('@/components/GiftSection'));
const ProtocolSection = dynamic(() => import('@/components/ProtocolSection'));
const MapSection = dynamic(() => import('@/components/MapSection'));
const MessageSection = dynamic(() => import('@/components/MessageSection'));
const MusicPlayer = dynamic(() => import('@/components/MusicPlayer'));

const Invitation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isPlay, setIsPlay] = useState<boolean>(true);

  const audioRef = useRef<any>();
  const router = useRouter();
  const { nama } = router.query;

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handlePlayMusic = () => {
    audioRef.current?.pause();
    if (!audioRef.current?.paused || !isPlay) {
      setIsPlay(true);
      audioRef.current?.play();
    } else {
      setIsPlay(false);
      audioRef.current?.pause();
    }
  };

  return (
    <InvitationLayout title="Ali & Zahra">
      {!isOpen ? (
        <CoverSection namaTamu={nama} handlePlayMusic={handlePlayMusic} handleOpen={handleOpen} />
      ) : (
        <>
          <HeroSection />
          <BrideSection />
          <GallerySection />
          <EventSection />
          <GiftSection />
          <ProtocolSection />
          <MapSection />
          <MessageSection />
          <MusicPlayer handlePlayMusic={handlePlayMusic} isPlay={isPlay} />
          <audio ref={audioRef} autoPlay loop>
            <source src="./assets/audio/music1.mp3" type="audio/mp3" />
          </audio>
        </>
      )}
    </InvitationLayout>
  );
};

export default Invitation;
