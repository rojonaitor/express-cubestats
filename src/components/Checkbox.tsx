import Check from "@/icons/Check";
import { useState } from "react";

export default function Checkbox() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };
  return (
    <button
      onClick={handleCheckboxClick}
      aria-pressed={isChecked}
      type="button"
      className={`w-6 h-6 mx-auto rounded-md border ${
        isChecked
          ? "bg-white text-black"
          : "border-zinc-800 text-transparent hover:bg-zinc-900"
      } text-sm flex justify-center items-center`}
    >
      <Check />
    </button>
  );
}