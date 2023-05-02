import { ButtonProps } from "../../types/types";

function ButtonFilled({ title, disabled }: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className="px-4 py-4 bg-blue hover:bg-lightBlue hover:border-darkBlue hover:rounded-[4px] disabled:rounded-[4px] disabled:bg-darkGray text-lightGray hover:text-white font-medium text-[15px]"
    >
      {title}
    </button>
  );
}

export default ButtonFilled;
