// import Image from "next/image";
import TopbarHeader from "@/components/TopbarHeader";
import LeftSideBar from "@/components/LeftSideBar";
import Dashboard from "@/components/Dashboard";

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-[#F7F9FC]">
      <div className="flex items-center justify-between w-full">
        <TopbarHeader />
      </div>
      <div className="flex">
        <LeftSideBar />
      </div>
      <div className="bg-[#F7F9FC] flex-1 flex flex-col items-center justify-start pt-16 px-4">
        <div className="w-full max-w-[82vw]">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}
