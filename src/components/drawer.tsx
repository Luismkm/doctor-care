import { TfiClose } from 'react-icons/tfi';
import { FaInstagram } from 'react-icons/fa';
import { FiFacebook } from 'react-icons/fi';
import { SlSocialYoutube } from 'react-icons/sl';

import { NavLink } from 'react-router-dom';
import logoWhite from '../assets/logo-white.svg';

function Drawer() {
  return (
    <div className="offcanvas offcanvas-end fixed bottom-0 flex flex-col w-screen bg-green-700 invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 right-0 border-none" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div className="h-[72px] offcanvas-header flex items-center justify-between px-6">
        <img src={logoWhite} className="w-[132px]" alt="Logo da Doctor Care" />
        <button className="p-1" type="button" data-bs-dismiss="offcanvas" aria-label="Close">
          <TfiClose size={20} color="#FFFFFF" />
        </button>
      </div>
      <div className="flex flex-col items-center offcanvas-body flex-grow p-4 overflow-y-auto">
        <nav>
          <ul className="flex flex-col gap-12 mt-[60px] text-center font-bold text-2xl text-green-100">
            <li data-bs-dismiss="offcanvas" aria-label="Close">
              <NavLink to="/">Início</NavLink>
            </li>
            <li data-bs-dismiss="offcanvas" aria-label="Close">
              <NavLink to="/about">Sobre</NavLink>
            </li>
            <li data-bs-dismiss="offcanvas" aria-label="Close">
              <NavLink to="/services">Serviços</NavLink>
            </li>
            <li data-bs-dismiss="offcanvas" aria-label="Close">
              <NavLink to="/testimonial">Depoimentos</NavLink>
            </li>
          </ul>
        </nav>
        <button className="w-[274px] h-[55px] bg-white-100 rounded-[40px] uppercase text-green-700 text-lg font-bold mt-12 mb-[60px]">
          Agende sua consulta
        </button>
        <div className="flex gap-8">
          <FaInstagram color="#FFFAF1" size={24} />
          <FiFacebook color="#FFFAF1" size={24} />
          <SlSocialYoutube color="#FFFAF1" size={24} />
        </div>
      </div>
    </div>
  );
}

export { Drawer };
