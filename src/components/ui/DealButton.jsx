import { PlusSquare } from "lucide-react";

export default function DealButton({ text, active }) {
  return (
    <button
      data-state={active ? "active" : "inactive"}
      className="flex gap-2 items-center justify-center pt-[12px] pr-[16px] pb-[12px] pl-[12px] rounded-[16px] bg-orange-secondary text-sm font-medium cursor-pointer hover:bg-orange-lightestOrange   text-black-50 hover:text-gray-darkGray"
    >
      <PlusSquare color="#FFA500" className="rounded" size={18} />
      {text}
    </button>
  );
}
