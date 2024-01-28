import { Link } from "react-router-dom";
import { ArrowUpRight, MoveRight } from "lucide-react";
import ProgressBar from "../../assets/Card/ProgressBar.svg";
import SemiCircleProgressBar from "react-progressbar-semicircle";

export default function Card({ title, percentage, description, report }) {
  return (
    <>
      {description ? (
        <div className="flex flex-col bg-black-100 shadow-sm overflow-hidden gap-6 rounded-[16px]">
          <div className="p-5 flex flex-col gap-5 text-black">
            <div className="flex items-center gap-2 font-bold">
              <span>{title}</span>
            </div>
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-3">
                <span className="text-2xl tablet:text-[40px] font-medium tablet:leading-[38px]">
                  {percentage}
                </span>
                {title === "Revenues" ? (
                  <ArrowUpRight color="rgba(37, 205, 37, 1)" size={20} />
                ) : (
                  ""
                )}
              </div>
              {description && (
                <div className="flex items-center mt-2 opacity-70">
                  <span className="font-medium text-sm">{description}</span>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-1 text-orange-primary rounded-lg py-2 pb-4 px-6 cursor-pointer">
            <span className="text-sm">{report}</span>
            <MoveRight size={15} className="text-orange-primary" />
          </div>
        </div>
      ) : (
        <div className="flex flex-col bg-black-100 shadow-sm rounded-[16px] items-center justify-center">
          <div className="p-5 flex flex-col gap-4 text-black font-bold">
            <div className="flex items-center gap-2">
              <span>{title}</span>
            </div>
          </div>
          <div className="flex">
            {/* PROGRESS BAR */}
            {/* <img src={ProgressBar} alt="" className="w-[150px] h-[110px]" /> */}
            <SemiCircleProgressBar
              percentage={84}
              showPercentValue
              stroke="rgba(255, 205, 113, 1)"
              background="rgba(255, 247, 232, 1)"
              diameter="220"
            />
          </div>
          <div className="flex items-center gap-1 text-orange-primary rounded-lg py-2 pb-4 px-6 cursor-pointer">
            <span className="text-sm">{report}</span>
            <MoveRight size={15} className="text-orange-primary" />
          </div>
        </div>
      )}
    </>
  );
}
