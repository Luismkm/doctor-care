function Score() {
  return (
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
  );
}

export { Score };
