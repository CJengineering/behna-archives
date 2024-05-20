import { EyeIcon } from "@heroicons/react/16/solid";


const CustomButton = ({text} :{text:string}) => {
  return (
    <button className="flex px-9 py-3 justify-center items-center gap-3 rounded bg-blue-600 text-white">
      <EyeIcon className="w-5 h-5" />
        {text}
    </button>
  );
};

export default CustomButton;