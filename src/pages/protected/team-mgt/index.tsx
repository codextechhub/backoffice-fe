import Tabs from "@/components/custom/tab";
import DashboardLayout from "@/components/layout/dashboard-layout";
import { useSearchParams } from "react-router";
import InvitesTab from "./tabs/invites";
import MembersTab from "./tabs/members";

export default function TeamManagement() {
  const [searchParams] = useSearchParams();
  const activeTab = searchParams.get("tab");

  const tabList = [
    { label: "Members", value: "members" },
    { label: "Invites", value: "invites" },
  ];

  return (
    <DashboardLayout title="Team Management">
      <main className="px-4.5 py-6 space-y-5 text-black-01 grid ">
        <Tabs tabs={tabList} tabKey="tab" />

        {activeTab === "invites" ? <InvitesTab /> : <MembersTab />}
      </main>
    </DashboardLayout>
  );
}
