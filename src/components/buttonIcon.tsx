import { BsWhatsapp } from 'react-icons/bs';

function ButtonIcon() {
  return (
    <button className=" flex mt-8 text-white-100 text-sm uppercase rounded-[40px] font-bold px-8 py-[17px] bg-green-700 hover:bg-green-900 transition-colors">
      <BsWhatsapp size={20} className="mr-4" />
      Agende sua consulta
    </button>
  );
}

export { ButtonIcon };
