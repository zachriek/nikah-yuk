import { useRef, useState } from 'react';
import Image from 'next/image';

interface IProps {
  isShowModal: boolean;
  setIsShowModal: any;
}

const GiftModal = ({ isShowModal, setIsShowModal }: IProps) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const norekRef = useRef<any>(null);

  const handleCopyClipboard = async () => {
    if ('clipboard' in navigator) {
      await navigator.clipboard.writeText(norekRef.current.textContent);
    } else {
      document.execCommand('copy', true, norekRef.current.textContent);
    }
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div className={`fixed inset-0 bg-black/50 z-[999] flex justify-center items-center p-4 ${isShowModal ? '' : 'hidden'}`}>
      <div className="w-full max-w-2xl bg-white mx-auto px-12 py-20 border border-zinc-300 border-t-[5px] border-t-zinc-800 shadow-xl text-center">
        <h2 className="sm:text-6xl text-5xl font-secondary font-bold text-zinc-800 leading-tight mb-4">Kado Digital</h2>
        <p className="text-zinc-600 sm:text-[18px] max-w-[750px] mb-12">Bagi yang ingin memberikan hadiah untuk pernikahan kami, silakan transfer ke rekening ya</p>
        <Image src="/assets/images/mandiri.png" alt="mandiri" width={0} height={0} sizes="100vw" className="w-[150px] h-auto mx-auto mb-6" />
        <p className="text-zinc-700 font-medium sm:text-[18px] max-w-[750px]">Ali Akbar Afriyanto</p>
        <p className="text-zinc-700 font-bold sm:text-[18px] max-w-[750px]" ref={norekRef}>
          1140021222297
        </p>
        <div className="flex justify-center items-center mt-12 gap-x-3">
          <button className="btn btn-outline" onClick={() => setIsShowModal(false)}>
            Kembali
          </button>
          <button className="btn btn-primary" onClick={handleCopyClipboard}>
            {isCopied ? 'Berhasil Disalin' : 'Salin'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GiftModal;
