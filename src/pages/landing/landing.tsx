import { useEffect, useState } from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { SlLocationPin, SlSocialYoutube } from 'react-icons/sl';
import { BiEnvelope } from 'react-icons/bi';
import { FaInstagram } from 'react-icons/fa';
import { FiFacebook } from 'react-icons/fi';
import check from '../../assets/check.svg';
import logoImg from '../../assets/logo.svg';
import logoWhite from '../../assets/logo-white.svg';
import menuIcon from '../../assets/menu.svg';
import menuIconWhite from '../../assets/menuWhite.svg';

import woman from '../../assets/woman.png';
import man from '../../assets/man.png';
import doctor from '../../assets/doctor.png';

function Landing() {
  const [onScroll, setOnScroll] = useState(false);

  const changeBackground = () => {
    window.scrollY >= 5 ? setOnScroll(true) : setOnScroll(false);
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener('scroll', changeBackground);
  });

  return (
    <div className="w-screen h-screen">
      <header className={`w-screen h-[72px] my-0 mx-auto bg-green-400 transition-colors duration-1000 ${onScroll && 'fixed bg-green-850 transition-colors duration-1000'}`}>
        <div className="flex justify-between items-center max-w-[1120px] mx-auto">
          {
          onScroll
            ? <img src={logoWhite} className="w-[132px]" alt="Logo da Doctor Care" />
            : <img src={logoImg} className="w-[132px]" alt="Logo da Doctor Care" />
        }
          <nav className="hidden lg:block">
            <ul className={`flex justify-around gap-8 text-green-800 mt-[26px] ${onScroll && 'text-green-200'}`}>
              <li className={`font-bold border-b-2 border-b-green-800 pb-[20px] cursor-pointer ${onScroll && 'border-b-white'}`}>Início</li>
              <li>Sobre</li>
              <li>Serviços</li>
              <li>Depoimentos</li>
            </ul>
          </nav>
          <button className={`hidden lg:block text-green-800 text-sm uppercase border-[1px] rounded-[40px] font-bold px-5 py-[10px] border-green-800 hover:text-white hover:bg-green-800 transition-colors ${onScroll && 'border-white text-[#FFF]'}`}>
            Agendar Consulta
          </button>
          {
          onScroll
            ? <img src={menuIconWhite} className="w-10 h-10 lg:hidden cursor-pointer" alt="Menu burger" />
            : <img src={menuIcon} className="w-10 h-10 lg:hidden cursor-pointer" alt="Menu burger" />
        }
        </div>
      </header>

      <div className="bg-green-400 h-[678px]">
        <div className="max-w-[1120px] grid grid-cols-[650px,420px] gap-18 mx-auto items-center">
          <div>
            <span className="font-bold text-sm text-green-800 inline-block uppercase">
              BOAS-VINDAS A DOCTORCARE 👋
            </span>
            <h1 className="font-bold text-gray-900 text-[3.25rem] leading-[130%] mt-4">
              Assistência médica simplificada para todos
            </h1>
            <p className="mt-6 text-lg leading-[150%] text-gray-700">
              Os médicos da DoctorCare vão além dos sintomas para tratar a causa
              <br />
              raiz de sua doença e proporcionar uma cura a longo prazo.
            </p>
            <button className=" flex mt-8 text-white text-sm uppercase rounded-[40px] font-bold px-8 py-[17px] bg-green-800 hover:bg-green-900 transition-colors">
              <BsWhatsapp size={20} className="mr-4" />
              Agende sua consulta
            </button>
          </div>
          <div className="w-[420px]">
            <img src={woman} alt="Mulher jovem, está usando uma blusa verde de gola alta, brinco de argola grandes, está sorrindo com as duas mãos no coração" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5 px-[80px] place-items-center max-w-[1120px] h-[210px] mx-auto mt-[-132px] bg-green-100 border border-green-400">
        <div className="flex flex-col justify-center items-center">
          <span className="font-bold text-5xl text-gray-900">+3.500</span>
          <span className="text-green-800 mt-5">Pacientes atendidos</span>
        </div>
        <div className="w-px h-20 bg-green-900" />

        <div className="flex flex-col justify-center items-center">
          <span className="font-bold text-5xl text-gray-900">+15</span>
          <span className="text-green-800 mt-5">Especialistas disponíveis</span>
        </div>
        <div className="w-px h-20 bg-green-900" />

        <div className="flex flex-col justify-center items-center">
          <span className="font-bold text-5xl text-gray-900">+10</span>
          <span className="text-green-800 mt-5">Anos no mercado</span>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center max-w-[1120px] mx-auto">
        <span className="text-green-800 uppercase text-sm font-bold mt-40">
          SERVIÇOS
        </span>
        <strong className="text-[2.5rem] text-center font-bold leading-[52px] text-gray-900 mt-4">
          Como podemos ajudá-lo
          <br />
          a se sentir melhor?
        </strong>

        <div className="grid grid-cols-3 gap-10 mt-16 mb-40">
          <div className="border border-green-400 rounded-md p-6">
            <img src={check} alt="" />
            <span className="text-gray-900 font-bold text-2xl mt-4 block">
              Problemas digestivos
            </span>
            <p className="text-gray-700 leading-[150%] mt-4">
              Amet minim mollit non deserunt ullamco est sit
              aliqua dolor do amet sint. Velit officia consequat duis enim.
            </p>
          </div>
          <div className="border border-green-400 rounded-md p-6">
            <img src={check} alt="" />
            <span className="text-gray-900 font-bold text-2xl mt-4 block">
              Problemas digestivos
            </span>
            <p className="text-gray-700 leading-[150%] mt-4">
              Amet minim mollit non deserunt ullamco est sit
              aliqua dolor do amet sint. Velit officia consequat duis enim.
            </p>
          </div>
          <div className="border border-green-400 rounded-md p-6">
            <img src={check} alt="" />
            <span className="text-gray-900 font-bold text-2xl mt-4 block">
              Problemas digestivos
            </span>
            <p className="text-gray-700 leading-[150%] mt-4">
              Amet minim mollit non deserunt ullamco est sit
              aliqua dolor do amet sint. Velit officia consequat duis enim.
            </p>
          </div>
          <div className="border border-green-400 rounded-md p-6">
            <img src={check} alt="" />
            <span className="text-gray-900 font-bold text-2xl mt-4 block">
              Problemas digestivos
            </span>
            <p className="text-gray-700 leading-[150%] mt-4">
              Amet minim mollit non deserunt ullamco est sit
              aliqua dolor do amet sint. Velit officia consequat duis enim.
            </p>
          </div>
          <div className="border border-green-400 rounded-md p-6">
            <img src={check} alt="" />
            <span className="text-gray-900 font-bold text-2xl mt-4 block">
              Problemas digestivos
            </span>
            <p className="text-gray-700 leading-[150%] mt-4">
              Amet minim mollit non deserunt ullamco est sit
              aliqua dolor do amet sint. Velit officia consequat duis enim.
            </p>
          </div>
          <div className="border border-green-400 rounded-md p-6">
            <img src={check} alt="" />
            <span className="text-gray-900 font-bold text-2xl mt-4 block">
              Problemas digestivos
            </span>
            <p className="text-gray-700 leading-[150%] mt-4">
              Amet minim mollit non deserunt ullamco est sit
              aliqua dolor do amet sint. Velit officia consequat duis enim.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1120px] h-[734px] mx-auto">
        <div className=" grid grid-cols-2 gap-16 mt-40">
          <img src={doctor} alt="Médico veste um jaleco branco com uma prancheta na mão, ao lado esquerdo está uma mãe com sua filha no colo, ambas estão olhando para o doutor e sorrindo." />
          <div className="flex flex-col">
            <span className="text-green-800 uppercase text-sm font-bold">
              SOBRE NÓS
            </span>
            <strong className="text-[2.5rem] font-bold leading-[52px] text-gray-900 mt-[10px] text-start">
              Entenda quem somos e por que existimos
            </strong>
            <p className="text-gray-700 leading-[150%] mt-6">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
              consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1120px] h-[599px] mx-auto">
        <div className="grid grid-cols-2 items-center">
          <div>
            <strong className="text-[2.5rem] font-bold leading-[52px] text-gray-900 mt-[10px] text-start mb-10 block">
              Entre em contato
              <br />
              com a gente!
            </strong>
            <div className="flex flex-col justify-center gap-4">
              <span>
                <SlLocationPin className="inline mr-2" color="#00856F" size={24} />
                <span>R. Amauri Souza, 346</span>
              </span>
              <span>
                <BiEnvelope className="inline mr-2" color="#00856F" size={24} />
                <span>contato@doctorcare.com</span>
              </span>
            </div>
            <button className=" flex mt-8 text-white text-sm uppercase rounded-[40px] font-bold px-8 py-[17px] bg-green-800 hover:bg-green-900 transition-colors">
              <BsWhatsapp size={20} className="mr-4" />
              Agende sua consulta
            </button>
          </div>
          <div>
            <img src={man} alt="Homem sentado, vestindo uma blusa bege mexendo no celular." />
          </div>
        </div>
      </div>

      <div className="bg-green-800">
        <div className="flex justify-between items-center max-w-[1120px] h-[268px] mx-auto">
          <div>
            <img src={logoWhite} className="h-8" alt="" />
            <span className="mt-6 mb-4 text-sm text-green-100 block">©2022 - DoctorCare.</span>
            <span className="text-green-100 text-sm">Todos os direitos reservados.</span>
          </div>
          <div className="flex gap-8">
            <FaInstagram color="#FFFAF1" size={24} />
            <FiFacebook color="#FFFAF1" size={24} />
            <SlSocialYoutube color="#FFFAF1" size={24} />
          </div>
        </div>
      </div>

    </div>

  );
}

export { Landing };
