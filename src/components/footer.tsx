import { SlSocialYoutube } from 'react-icons/sl';
import { FaInstagram } from 'react-icons/fa';
import { FiFacebook } from 'react-icons/fi';
import logoWhite from '../assets/logo-white.svg';

function Footer() {
  return (
    <div className="bg-green-700">
      <div className="flex justify-between items-center max-w-[1120px] h-[268px] mx-auto">
        <div>
          <img src={logoWhite} className="h-8" alt="" />
          <span className="mt-6 mb-4 text-sm text-green-100 block">©2022 - DoctorCare.</span>
          <span className="text-green-100 text-sm">Todos os direitos reservados.</span>
        </div>
        <div className="flex gap-8">
          <FaInstagram className="cursor-pointer" color="#FFFAF1" size={24} />
          <FiFacebook className="cursor-pointer" color="#FFFAF1" size={24} />
          <SlSocialYoutube className="cursor-pointer" color="#FFFAF1" size={24} />
        </div>
      </div>
    </div>
  );
}

export { Footer };
