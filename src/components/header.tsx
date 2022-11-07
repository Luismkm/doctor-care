import { useEffect, useState } from 'react';
import logoImg from '../assets/logo.svg';
import menuIcon from '../assets/menu.svg';
import menuIconWhite from '../assets/menuWhite.svg';
import logoWhite from '../assets/logo-white.svg';

function Header() {
  const [onScroll, setOnScroll] = useState(false);

  const changeBackground = () => {
    window.scrollY >= 5 ? setOnScroll(true) : setOnScroll(false);
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener('scroll', changeBackground);
  });

  return (
    <header className={`w-screen h-[72px] my-0 mx-auto bg-green-400 transition-colors duration-1000 ${onScroll && 'fixed bg-green-700 transition-colors duration-1000'}`}>
      <div className="flex justify-between items-center max-w-[1120px] mx-auto">
        {
          onScroll
            ? <img src={logoWhite} className="w-[132px]" alt="Logo da Doctor Care" />
            : <img src={logoImg} className="w-[132px]" alt="Logo da Doctor Care" />
        }
        <nav className="hidden lg:block">
          <ul className={`flex justify-around gap-8 mt-[26px] ${onScroll ? 'text-green-200' : 'text-green-700'}`}>
            <li className={`font-bold border-b-2 w-[42px] border-b-green-700 pb-[21px] cursor-pointer ${onScroll && 'border-b-white-100'}`}>Início</li>
            <li className="cursor-pointer w-[44px] hover:font-bold">Sobre</li>
            <li className="cursor-pointer w-[63px] hover:font-bold">Serviços</li>
            <li className="cursor-pointer w-[100px] hover:font-bold">Depoimentos</li>
          </ul>
        </nav>
        <button className={`hidden lg:block text-green-700 text-sm uppercase border-[1px] rounded-[40px] font-bold px-5 py-[10px] border-green-700  hover:bg-green-700 transition-colors ${onScroll ? 'border-white-100 text-white-100 hover:bg-green-400 hover:text-green-700' : 'hover:text-white-100'}`}>
          Agendar Consulta
        </button>
        {
          onScroll
            ? <img src={menuIconWhite} className="w-10 h-10 lg:hidden cursor-pointer" alt="Menu burger" />
            : <img src={menuIcon} className="w-10 h-10 lg:hidden cursor-pointer" alt="Menu burger" />
        }
      </div>
    </header>
  );
}

export { Header };
