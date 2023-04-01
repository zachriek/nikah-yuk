interface Props {
  name: string;
  message: string;
}

const WishesCard = ({ name, message }: Props) => {
  return (
    <div className="w-full max-w-md bg-white mx-auto px-12 py-6 border border-zinc-300 border-t-[5px] border-t-zinc-800 shadow-xl mt-12">
      <img src={`https://api.dicebear.com/5.x/initials/svg?seed=${name}`} alt="avatar" className="w-[75px] rounded-full mx-auto mb-2" />
      <h5 className="font-medium text-zinc-800 text-center text-[20px]">{name}</h5>
      <p className="text-zinc-600 text-center mt-4">{message}</p>
    </div>
  );
};

export default WishesCard;
