import { DashboardHeader } from "@/components/dashboard-header";
import { StudioList } from "@/components/studio-list";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <DashboardHeader />
      <StudioList />
    </div>
  );
}