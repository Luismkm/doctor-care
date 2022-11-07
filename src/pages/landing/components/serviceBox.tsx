import check from '../../../assets/check.svg';

interface ServiceBoxProps {
  title: string;
  description: string;
}

function ServiceBox({ title, description }:ServiceBoxProps) {
  return (
    <div className="border border-green-400 rounded-md p-6">
      <img src={check} alt="" />
      <span className="text-gray-900 font-bold text-2xl mt-4 block">
        {title}
      </span>
      <p className="text-gray-700 leading-[150%] mt-4">
        {description}
      </p>
    </div>
  );
}

export { ServiceBox };
