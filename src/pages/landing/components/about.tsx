import doctor from '../../../assets/doctor.png';

function About() {
  return (
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
  );
}

export { About };
