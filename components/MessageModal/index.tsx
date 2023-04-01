import dynamic from 'next/dynamic';
import { useState } from 'react';
import Alert from '@/utils/Alert';
const Loading = dynamic(() => import('@/components/Loading'));

interface IProps {
  isShowModal: boolean;
  setIsShowModal: any;
}

interface IWish {
  name: string;
  body: string;
}

const MessageModal = ({ isShowModal, setIsShowModal }: IProps) => {
  const [formData, setFormData] = useState<IWish>({
    name: '',
    body: '',
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wishes`, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    setIsLoading(false);
    if (!response.ok) {
      return Alert({ title: 'Failed', text: 'Something went wrong', icon: 'error' });
    }
    Alert({ title: 'Success', text: data.message, icon: 'success' });
    setIsShowModal(false);
    setFormData({
      name: '',
      body: '',
    });
  };

  return (
    <div className={`fixed inset-0 bg-black/50 z-[999] flex justify-center items-center p-4 ${isShowModal ? '' : 'hidden'}`}>
      <div className="w-full max-w-2xl bg-white mx-auto px-12 py-20 border border-zinc-300 border-t-[5px] border-t-zinc-800 shadow-xl">
        <h2 className="sm:text-6xl text-5xl font-secondary font-bold text-zinc-800 leading-tight text-center mb-4">Buat Ucapan</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nama</label>
            <input type="text" className="form-input w-full focus:ring-zinc-900" id="name" name="name" placeholder="Masukkan Nama" onChange={handleChange} value={formData.name} />
          </div>
          <div className="form-group">
            <label htmlFor="body">Ucapan</label>
            <textarea
              name="body"
              id="body"
              cols={30}
              rows={10}
              className="form-input w-full focus:ring-zinc-900"
              placeholder="Masukkan Ucapan"
              onChange={handleChange}
              value={formData.body}
            ></textarea>
          </div>
          <div className="flex justify-center items-center mt-12 gap-x-3">
            <button type="button" className="btn btn-outline" onClick={() => setIsShowModal(false)}>
              Kembali
            </button>
            <button type="submit" className="btn btn-primary">
              {isLoading ? <Loading /> : 'Simpan'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MessageModal;
