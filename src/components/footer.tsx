import { SlSocialYoutube } from 'react-icons/sl';
import { FaInstagram } from 'react-icons/fa';
import { FiFacebook } from 'react-icons/fi';
import logoWhite from '../assets/logo-white.svg';

function Footer() {
  return (
    <div className="bg-green-700">
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-start lg:items-center max-w-[1120px] h-[285px] lg:h-[268px] px-6 mx-auto">
        <div className="text-base lg:text-sm">
          <img src={logoWhite} className="h-8" alt="" />
          <span className="mt-6 mb-4 text-green-100 block">©2022 - DoctorCare.</span>
          <span className="text-green-100">Todos os direitos reservados.</span>
        </div>
        <div className="flex gap-8 mt-8 lg:mt-0">
          <FaInstagram className="cursor-pointer" color="#FFFAF1" size={24} />
          <FiFacebook className="cursor-pointer" color="#FFFAF1" size={24} />
          <SlSocialYoutube className="cursor-pointer" color="#FFFAF1" size={24} />
        </div>
      </div>
    </div>
  );
}

export { Footer };
