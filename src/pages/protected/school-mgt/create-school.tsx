import DashboardLayout from "@/components/layout/dashboard-layout";
import { useSearchParams } from "react-router";
import AddSchool from "./component/add-school";
import AddSchoolAdmin from "./component/add-school-admin";
import AddSchoolBranch from "./component/add-school-branch";
import PackageSetup from "./component/package-setup";

export default function CreateSchool() {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get("step");

  const getActiveFormTab = () => {
    switch (tab) {
      case "admin":
        return <AddSchoolAdmin />;
      case "branch":
        return <AddSchoolBranch />;
      case "plan":
        return <PackageSetup />;
      default:
        return <AddSchool />;
    }
  };
  return (
    <DashboardLayout title="School Management" hasBack>
      <section className="px-4.5 py-6">{getActiveFormTab()}</section>
    </DashboardLayout>
  );
}
