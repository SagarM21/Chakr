import Header from "../components/Header";
import Card from "../components/ui/Card";
import CustomersCard from "../components/ui/CustomersCard";
import Pills from "../components/ui/DealButton";
import ThirdCard from "../components/ui/ThirdCard";

export default function Dashboard() {
  return (
    <>
      <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-5 items-start">
        <Card
          title="Revenues"
          percentage="15%"
          description="Increased compared to last week"
          report="Revenues report"
        />
        <Card
          title="Lost deals"
          percentage="4%"
          description="You closed 96 out of 100 deals"
          report="All deals"
        />
        <Card title="Quarter goal" report="All goals" />
      </div>

      <div className="mt-6 grid grid-cols-1 tablet:grid-cols-2 gap-6">
        <CustomersCard title="Customers" sort="Newest" />
        <CustomersCard title="Growth" sort="Yearly" />
      </div>
      <div className="mt-6 grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-6">
        <ThirdCard title="Chats" desc="2 unread messages" />
        <ThirdCard title="Top states" />
        <ThirdCard title="New deals" />
      </div>
    </>
  );
}
