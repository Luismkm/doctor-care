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
    <header className={`w-screen my-0 mx-auto transition-colors duration-1000 ${onScroll ? 'fixed bg-green-700' : 'bg-green-400'}`}>
      <div className="flex justify-between items-center max-w-[1120px] h-[72px] px-6 mx-auto">
        {
          onScroll
            ? <img src={logoWhite} className="w-[132px]" alt="Logo da Doctor Care" />
            : <img src={logoImg} className="w-[132px]" alt="Logo da Doctor Care" />
        }
        <nav className="hidden md:block">
          <ul className={`flex justify-around gap-8 mt-[26px] ${onScroll ? 'text-green-200' : 'text-green-700'}`}>
            <li className={`font-bold border-b-2 w-[42px]  pb-[20px] cursor-pointer ${onScroll ? 'border-b-white-100' : 'border-b-green-700'}`}>Início</li>
            <li className="cursor-pointer w-[44px] hover:font-bold">Sobre</li>
            <li className="cursor-pointer w-[63px] hover:font-bold">Serviços</li>
            <li className="cursor-pointer w-[100px] hover:font-bold">Depoimentos</li>
          </ul>
        </nav>
        <button className={`hidden md:block lg:block text-sm uppercase border-[1px] rounded-[40px] font-bold px-5 py-[10px] transition-colors ${onScroll ? 'border-white-100 text-white-100 hover:bg-green-400 hover:text-green-700' : 'border-green-700 text-green-700 hover:text-white-100 hover:bg-green-700'}`}>
          Agendar Consulta
        </button>
        {
          onScroll
            ? (
              <img
                src={menuIconWhite}
                className="w-10 h-10 md:hidden cursor-pointer"
                alt="Menu burger"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
              />
            )
            : (
              <img
                src={menuIcon}
                className="w-10 h-10 md:hidden cursor-pointer"
                alt="Menu burger"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
              />
            )
        }
      </div>
    </header>
  );
}

export { Header };
