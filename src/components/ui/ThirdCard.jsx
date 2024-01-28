import ChatAvatar1 from "../../assets/Chat/ChatAvatar-1.svg";
import ChatAvatar2 from "../../assets/Chat/ChatAvatar-2.svg";
import ChatAvatar3 from "../../assets/Chat/ChatAvatar-3.svg";
import ChatAvatar4 from "../../assets/Chat/ChatAvatar-4.svg";
import DealButton from "./DealButton";

export default function ThirdCard({ title, desc }) {
  return (
    <div className="flex flex-col bg-black-100 shadow-sm overflow-hidden gap-6 rounded-[16px]">
      <div className="p-5 flex flex-col gap-5 text-black">
        <div className="flex flex-col gap-1 font-bold">
          <span>{title}</span>
          <span className="text-xs opacity-30">{desc}</span>
        </div>
        {title === "Chats" ? (
          <div className="flex items-center gap-8">
            <div className="bg-orange-lightestOrange rounded-xl p-2">
              <img src={ChatAvatar1} className="w-10 h-10" alt="" />
            </div>
            <div className="bg-orange-lightestOrange rounded-xl p-2">
              <img src={ChatAvatar2} className="w-10 h-10" alt="" />
            </div>
            <img src={ChatAvatar3} className="w-10 h-10" alt="" />
            <img src={ChatAvatar4} className="w-10 h-10" alt="" />
          </div>
        ) : title === "Top states" ? (
          <div className="flex flex-col gap-2.5 text-black-1">
            <div className="flex items-center justify-between px-[8px] py-[6px] bg-orange-gradient rounded-[4px] text-black-1 w-full">
              <span className="font-bold">NY</span>
              <span className="text-xs font-medium">120K</span>
            </div>
            <div className="flex items-center justify-between px-[8px] py-[6px] bg-orange-gradient rounded-[4px] text-black-1 w-[85%]">
              <span className="font-bold">MA</span>
              <span className="text-xs font-medium">80K</span>
            </div>
            <div className="flex items-center justify-between px-[8px] py-[6px] bg-orange-gradient rounded-[4px] w-[70%]">
              <span className="font-bold">NH</span>
              <span className="text-xs font-medium">70K</span>
            </div>
            <div className="flex items-center justify-between px-[8px] py-[6px] bg-orange-gradient rounded-[4px] w-[55%]">
              <span className="font-bold">OR</span>
              <span className="text-xs font-medium">50K</span>
            </div>
          </div>
        ) : (
          title === "New deals" && (
            <div className="flex gap-2 items-center flex-wrap">
              <DealButton text="Fruit2Go" />
              <DealButton text="Target" />
              <DealButton text="CCNT" />
              <DealButton text="Marshall's MKT" />
              <DealButton text="Joana Mini-market" />
              <DealButton text="Little Brazil Vegan" />
              <DealButton text="Organic Place" />
              <DealButton text="Morello's" />
            </div>
          )
        )}
      </div>
    </div>
  );
}
