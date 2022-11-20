function Score() {
  return (
    <div className="grid md:grid-cols-5 md:px-[80px] place-items-center max-w-[1120px]
    md:max-w-[1120px] h-[470px] md:h-[210px] mx-4 lg:mx-auto mt-[-289px] md:mt-[-132px] bg-green-100 border border-green-400"
    >
      <div className="flex flex-col md:flex-col justify-center items-center">
        <span className="font-bold text-5xl text-gray-900">+3.500</span>
        <span className="text-green-700 mt-5">Pacientes atendidos</span>
      </div>
      <div className="hidden md:block w-px h-20 bg-green-900" />

      <div className="flex flex-col justify-center items-center">
        <span className="font-bold text-5xl text-gray-900">+15</span>
        <span className="text-green-700 mt-5 w-52 text-center">Especialistas disponíveis</span>
      </div>
      <div className="hidden md:block w-px h-20 bg-green-900" />

      <div className="flex flex-col justify-center items-center">
        <span className="font-bold text-5xl text-gray-900">+10</span>
        <span className="text-green-700 w-[188px] mt-5 text-center">Anos no mercado</span>
      </div>
    </div>
  );
}

export { Score };
