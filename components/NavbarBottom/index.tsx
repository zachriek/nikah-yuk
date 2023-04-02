import { useState } from 'react';
import { AiFillGift } from 'react-icons/ai';
import { FaHome, FaUserFriends } from 'react-icons/fa';
import { MdEventNote, MdLocationOn, MdMessage, MdPhotoLibrary, MdSecurity } from 'react-icons/md';

const links = [
  {
    name: 'Beranda',
    icon: <FaHome />,
    href: '#beranda',
  },
  {
    name: 'Mempelai',
    icon: <FaUserFriends />,
    href: '#mempelai',
  },
  {
    name: 'Galeri',
    icon: <MdPhotoLibrary />,
    href: '#galeri',
  },
  {
    name: 'Acara',
    icon: <MdEventNote />,
    href: '#acara',
  },
  {
    name: 'Kado',
    icon: <AiFillGift />,
    href: '#kado',
  },
  {
    name: 'Prokes',
    icon: <MdSecurity />,
    href: '#prokes',
  },
  {
    name: 'Lokasi',
    icon: <MdLocationOn />,
    href: '#lokasi',
  },
  {
    name: 'Ucapan',
    icon: <MdMessage />,
    href: '#ucapan',
  },
];

const NavbarBottom = () => {
  const [active, setActive] = useState<string>('#beranda');

  const handleActiveNavLink = (e: any, id: string) => {
    e.stopPropagation();
    setActive(id);
  };

  return (
    <nav className="w-full py-4 fixed bottom-0 left-0 bg-white border-t-[3px] border-t-zinc-200 z-[99] overflow-scroll">
      <div className="container h-full">
        <ul className="h-full flex md:justify-center items-center gap-x-[50px]">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className={`flex flex-col items-center justify-center hover:text-zinc-800 active:text-zinc-800 ${active === link.href ? 'text-zinc-800' : 'text-zinc-500'}`}
                onClick={(e: any) => handleActiveNavLink(e, link.href)}
              >
                <div className="text-[20px] mb-1">{link.icon}</div>
                <span className="text-[14px]">{link.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavbarBottom;
