import woman from '../../../assets/woman.png';

import { ButtonIcon } from '../../../components/buttonIcon';

function SubHeader() {
  return (
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
          <ButtonIcon />
        </div>
        <div className="w-[420px]">
          <img src={woman} alt="Mulher jovem, está usando uma blusa verde de gola alta, brinco de argola grandes, está sorrindo com as duas mãos no coração" />
        </div>
      </div>
    </div>
  );
}

export { SubHeader };
