import woman from '../../../assets/woman.png';

import { ButtonIcon } from '../../../components/buttonIcon';

function SubHeader() {
  return (
    <div className="bg-green-400 h-[1080px] lg:h-[678px]">
      <div className="max-w-[1120px] px-5 grid grid-rows-2 lg:grid-cols-[650px,420px] lg:gap-18 mx-auto items-center">
        <div className="flex flex-col justify-center items-center lg:items-start mt-10 lg:mt-0">
          <span className="font-bold text-sm text-green-700 inline-block uppercase">
            BOAS-VINDAS A DOCTORCARE 👋
          </span>
          <h1 className="font-bold w-[327px] lg:w-[605px] text-center lg:text-start text-gray-900 text-[2.125rem] lg:text-[3.25rem] leading-[130%] mt-4">
            Assistência médica simplificada para todos
          </h1>
          <p className="mt-6 w-[327px] lg:w-[585px] text-lg lg:text-lg leading-[150%] text-gray-700 text-center lg:text-start">
            Os médicos da DoctorCare vão além dos sintomas para tratar a causa
            raiz de sua doença e proporcionar uma cura a longo prazo.
          </p>
          <ButtonIcon />
        </div>
        <div className="mx-auto">
          <img className="w-[261px] h-[342px] lg:w-[420px] lg:h-[547px]" src={woman} alt="Mulher jovem, está usando uma blusa verde de gola alta, brinco de argola grandes, está sorrindo com as duas mãos no coração" />
        </div>
      </div>
    </div>
  );
}

export { SubHeader };
