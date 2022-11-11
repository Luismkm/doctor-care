import { ServiceBox } from './serviceBox';

function Service() {
  return (
    <div className="flex flex-col justify-center items-center max-w-[1120px] mx-auto">
      <span className="text-green-700 uppercase text-sm font-bold mt-24 lg:mt-40">
        SERVIÇOS
      </span>
      <strong className="text-3xl lg:text-[2.5rem] w-[314px] lg:w-[497px] text-center font-bold leading-[39px] lg:leading-[52px] text-gray-900 mt-4">
        Como podemos ajudá-lo a se sentir melhor?
      </strong>

      <div className="grid grid-rows-3 lg:grid-cols-3 px-6 lg:px-0 gap-10 mt-16">
        <ServiceBox
          title="Problemas digestivos"
          description="Amet minim mollit non deserunt ullamco est sit
            aliqua dolor do amet sint. Velit officia consequat duis enim."
        />

        <ServiceBox
          title="Saúde Hormonal"
          description="Amet minim mollit non deserunt ullamco est sit
            aliqua dolor do amet sint. Velit officia consequat duis enim."
        />
        <ServiceBox
          title="Bem-estar mental"
          description="Amet minim mollit non deserunt ullamco est
            sit aliqua dolor do amet sint. Velit officia consequat duis enim."
        />
        <ServiceBox
          title="Cuidados Pediátricos"
          description="Amet minim mollit non deserunt ullamco est
            sit aliqua dolor do amet sint. Velit officia consequat duis enim."
        />
        <ServiceBox
          title="Autoimune e Inflamação"
          description="Amet minim mollit non deserunt ullamco est
            sit aliqua dolor do amet sint. Velit officia consequat duis enim."
        />
        <ServiceBox
          title="Saúde do Coração"
          description="Amet minim mollit non deserunt ullamco est
            sit aliqua dolor do amet sint. Velit officia consequat duis enim."
        />
      </div>
    </div>
  );
}

export { Service };
