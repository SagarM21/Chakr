export default function TopCard({ title, value, desc, image, name, company }) {
  return title === "Top buyer" ? (
    <div className="flex flex-col bg-black-100 shadow-sm overflow-hidden gap-6 rounded-[16px] mt-4 ">
      <div className="p-4 flex flex-col gap-5 text-gray-darkGray ">
        <div className="flex items-start gap-2 font-bold opacity-60">
          <span>{title}</span>
        </div>
        <div className="flex flex-col ">
          <img src={image} className="w-8 h-8" alt="" />
          <span className="text-sm font-medium text-black">{name}</span>
          <span className="text-xs">{company}</span>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex flex-col bg-black-100 shadow-sm overflow-hidden gap-6 rounded-[16px] mt-4 ">
      <div className="p-4 flex flex-col gap-5 text-gray-darkGray ">
        <div className="flex items-start gap-2 font-bold opacity-60">
          <span>{title}</span>
        </div>
        <div className="flex flex-col pt-6">
          <span className="text-orange-darkOrange font-bold text-xl">
            {value}
          </span>
          <span
            className={`${
              desc === "2019"
                ? "text-orange-lightOrange text-sm"
                : "text-gray-darkGray text-sm"
            }`}
          >
            {desc}
          </span>
        </div>
      </div>
    </div>
  );
}
