import { ChevronDownIcon } from "../../assets/icons";
import CustomerAvatar1 from "../../assets/Customer/CustomerAvatar-1.svg";
import CustomerAvatar2 from "../../assets/Customer/CustomerAvatar-2.svg";
import CustomerAvatar3 from "../../assets/Customer/CustomerAvatar-3.svg";
import CustomerAvatar4 from "../../assets/Customer/CustomerAvatar-4.svg";
// import dataset from "../../data/dataset.csv";
import {
  MoveRight,
  MessageCircle,
  Star,
  Pencil,
  Tally1,
  MoreVertical,
} from "lucide-react";
import TopCard from "./TopCard";
import GraphComponent from "./GraphComponent";

export default function CustomersCard({ title, sort }) {
  const customersData = [
    {
      image: CustomerAvatar1,
      name: "Chris Friedkly",
      company: "Supermarket Villanova",
    },
    {
      image: CustomerAvatar2,
      name: "Maggie Johnson",
      company: "Oasis Organic Inc.",
    },
    {
      image: CustomerAvatar3,
      name: "Gael Harry",
      company: "New York Finest Fruits",
    },
    {
      image: CustomerAvatar4,
      name: "Jenna Sullivan",
      company: "Walmart",
    },
  ];
  return title === "Customers" ? (
    <div className="flex flex-col bg-black-100 shadow-sm overflow-hidden gap-6 rounded-[16px]">
      <div className="p-5 flex flex-col gap-5 text-black">
        <div className="flex items-center justify-between gap-2 font-bold px-2">
          <span>{title}</span>
          <div className="flex gap-1 items-center font-medium text-sm opacity-70 cursor-pointer">
            <span>
              {title === "Customers" ? "Sort by " : ""} {sort}
            </span>
            <ChevronDownIcon width={15} height={15} />
          </div>
        </div>

        <div className="flex flex-col desktop:gap-3 tablet:gap-6">
          {title === "Customers" &&
            customersData.map((c) => (
              <div
                className={`${
                  c.name === "Maggie Johnson"
                    ? "bg-orange-secondary p-2 rounded-[16px] flex gap-4 justify-between items-center"
                    : "p-2 flex gap-3"
                } `}
                key={c.company}
              >
                {c.name === "Maggie Johnson" ? (
                  <>
                    <div className="flex gap-3">
                      <img src={c.image} alt="" />
                      <div className="flex flex-col text-sm ">
                        <span className="text-black font-medium">{c.name}</span>
                        <span className="opacity-80">{c.company}</span>
                      </div>
                    </div>
                    <div className=" gap-4 flex text-orange-primary items-center">
                      <MessageCircle size={18} className="cursor-pointer" />
                      <Star size={18} className="cursor-pointer" />
                      <Pencil size={18} className="cursor-pointer mr-1" />
                      <Tally1 size={25} className="opacity-50" />
                      <MoreVertical size={18} className="cursor-pointer" />
                    </div>
                  </>
                ) : (
                  <div className="flex gap-3">
                    <img src={c.image} alt="" />
                    <div className="flex flex-col text-sm ">
                      <span className="text-black font-medium">{c.name}</span>
                      <span className="opacity-80">{c.company}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>

      <div className="flex items-center gap-1 text-orange-primary rounded-lg px-6 pb-4 cursor-pointer">
        <span className="text-sm">All customers</span>
        <MoveRight size={15} className="text-orange-primary" />
      </div>
    </div>
  ) : (
    <div className="flex flex-col">
      <div className="flex flex-col bg-black-100 shadow-sm overflow-hidden gap-1 rounded-[16px]">
        <div className="p-5 flex flex-col  text-black">
          <div className="flex items-center justify-between font-bold px-2">
            <span>{title}</span>
            <div className="flex gap-1 items-center font-medium text-sm opacity-70 cursor-pointer">
              <span>{sort}</span>
              <ChevronDownIcon width={15} height={15} />
            </div>
          </div>
        </div>
        <div className="flex text-gray-darkGray pb-6">
          <GraphComponent />
        </div>
      </div>

      <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-5 items-start">
        <TopCard title="Top month" value="November" desc="2019" />
        <TopCard title="Top year" value="2023" desc="96K sold so far" />
        <TopCard
          title="Top buyer"
          image={CustomerAvatar2}
          name="Maggie Johnson"
          company="Oasis Organic Inc."
        />
      </div>
    </div>
  );
}
