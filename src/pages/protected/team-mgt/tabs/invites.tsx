import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { svgIcons } from "@/assets/svg";
import { CustomInput } from "@/components/custom/custom-input";
import CustomTable from "@/components/custom/custom-table";
import { Link } from "react-router";
import { routesPath } from "@/routes/routesPath";

const tableHeader = ["Full Name", "Email", "Role", "Status", "Action"];

export default function InvitesTab() {
  return (
    <>
      <div className="flex items-center justify-between">
        <p className="font-semibold font-mont text-gray-01"></p>
        <Link to={routesPath.PROTECTED.TEAM_MGT.CREATE}>
          <Button size="lg">
            <Plus /> Add New User
          </Button>
        </Link>
      </div>

      <div className="flex items-center justify-between mt-8 gap-5">
        <CustomInput
          id="search"
          canSearch
          placeholder="Search..."
          className="h-10"
          containerClass="max-w-[280px]"
        />

        <div className="inline-flex items-center gap-3.5">
          <Button
            variant={"white"}
            size="lg"
            className="[&_svg]:size-5 font-medium font-mont"
          >
            {svgIcons.exportIcon} Export
          </Button>
        </div>
      </div>

      <CustomTable
        tableHeaderList={tableHeader}
        tableBodyList={FORMAT_TABLE_DATA(dummyData)}
        dropDown
        dropDownList={[
          {
            label: "Resend Invite",
            className: "",
            onActionClick: () => {},
          },
        ]}
        perPage={10}
        totalPage={5}
        currentPage={2}
      />
    </>
  );
}

const FORMAT_TABLE_DATA = (data: any) => {
  return data?.data?.map((item: any) => ({
    name: <p className="capitalize">{item?.name || "---"}</p>,
    email: item?.email || "---",

    role: item?.role || "---",
    status: (
      <Badge
        variant={item.status?.toLowerCase()}
        className="w-19.25 capitalize"
      >
        {item?.status || "---"}
      </Badge>
    ),
    _slug: item?.id,
  }));
};

const dummyData = {
  success: true,
  data: [
    {
      id: 1,
      name: "Solomon Francis",
      email: "solo@yopmail.com",
      role: "super-admin",
      status: "pending",
    },
    {
      id: 2,
      name: "Samuel David",
      email: "david@yopmail.com",
      role: "compliance-admin",
      status: "rejected",
    },
    {
      id: 2,
      name: "Emeka Olise",
      email: "emeka@yopmail.com",
      role: "super-admin",
      status: "pending",
    },
  ],
  meta: {
    total: 6,
    page: 1,
    pageSize: 10,
  },
};
