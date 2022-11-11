import { BiEnvelope } from 'react-icons/bi';
import { SlLocationPin } from 'react-icons/sl';

import man from '../../../assets/man.png';
import { ButtonIcon } from '../../../components/buttonIcon';

function Contact() {
  return (
    <div className="max-w-[1120px] h-[735px] lg:h-[599px] px-6 lg:px-0 mx-auto">
      <div className="grid grid-row-2 lg:grid-cols-2 items-center">
        <div>
          <strong className="text-3xl lg:text-[2.5rem] font-bold leading-[39px] lg:leading-[52px] text-gray-900 mt-[10px] text-start mb-10 block">
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
          <ButtonIcon />
        </div>
        <div>
          <img className="mt-[60px] lg:mt-0" src={man} alt="Homem sentado, vestindo uma blusa bege mexendo no celular." />
        </div>
      </div>
    </div>
  );
}

export { Contact };
