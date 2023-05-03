import React from "react";
import { ButtonProps } from "../../../types/types";

function ButtonOutlined({ title, disabled }: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className="px-4 py-1 border border-gray hover:text-gray rounded-[4px] disabled:text-darkBlack disabled:border-blue text-darkBlack text-[15px] font-normal"
    >
      {title}
    </button>
  );
}

export default ButtonOutlined;
