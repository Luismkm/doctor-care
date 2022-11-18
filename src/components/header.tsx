import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
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
          <ul className={`pb-[20px] flex justify-around gap-8 mt-[26px] ${onScroll ? 'text-green-200' : 'text-green-700'}`}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'font-bold border-b-2 w-[42px] pb-[21px] ' : '')}
              >
                Início
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? 'font-bold border-b-2 w-[42px]  pb-[21px]' : undefined)}
              >
                Sobre
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) => (isActive ? 'font-bold border-b-2 w-[42px]  pb-[21px]' : undefined)}
              >
                Serviços
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/testimonial"
                className={({ isActive }) => (isActive ? 'font-bold border-b-2 w-[42px]  pb-[21px]' : undefined)}
              >
                Depoimentos
              </NavLink>
            </li>
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
