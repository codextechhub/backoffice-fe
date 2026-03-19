import DashboardLayout from "@/components/layout/dashboard-layout";
import { svgIcons } from "@/assets/svg";
import { CustomInput } from "@/components/custom/custom-input";
import PromptModal from "@/components/modal/prompt-modal";
import { Button } from "@/components/ui/button";
import useToggleModal from "@/hooks/use-toggle";
import { routesPath } from "@/routes/routesPath";
import { useNavigate } from "react-router";
import { CustomNativeSelect } from "@/components/custom/custom-native-select";

export default function CreateAdmin() {
  const navigate = useNavigate();
  const { isOpen, toggleClick } = useToggleModal(false);
  return (
    <DashboardLayout title="Team Management" hasBack>
      <section className="px-4.5 py-6">
        <>
          <div className="max-w-235">
            <div className="mb-7 space-y-1.5">
              <h4 className="font-medium text-xl text-black-01">
                Add Team Member
              </h4>
              <p className="text-gray-01 font-mont text-xs">
                Add a user to the system and select their role and module
                access.
              </p>
            </div>

            <p className="inline-flex items-center text-gray-05 text-sm mb-4">
              User Group
              <figure className="size-fit ml-2">{svgIcons.infoIcon}</figure>
            </p>

            <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
              <CustomInput
                id="first_name"
                label="First Name"
                placeholder="Enter first name e.g., Emeka"
                isRequired
              />
              <CustomInput
                id="last_name"
                label="Last Name"
                placeholder="Enter last name e.g., Osegbo"
                isRequired
              />
              <CustomInput
                id="email"
                label="Email Address"
                placeholder="Enter email address"
                isRequired
              />
              <CustomNativeSelect
                id="role"
                label="Role Title"
                placeholder="Select role"
                options={[]}
                isRequired
              />
              <CustomInput
                id="tele"
                label="Phone Number"
                placeholder="Enter phone number e.g., +23481..."
                isRequired
              />
              <CustomNativeSelect
                id="gender"
                label="Gender"
                placeholder="Select gender"
                options={[
                  { label: "Male", value: "male" },
                  { label: "Female", value: "female" },
                ]}
                isRequired
              />
            </div>

            <div className="mt-10 inline-flex items-center gap-4">
              <Button variant={"outline-dest"} className="w-37">
                Cancel
              </Button>
              <Button onClick={toggleClick} className="w-37">
                Send Invite
              </Button>
            </div>
          </div>

          <PromptModal
            isOpen={isOpen}
            onConfirm={() => {
              toggleClick();
              navigate(routesPath.PROTECTED.TEAM_MGT.INDEX + "?tab=invites", {
                replace: true,
              });
            }}
            title="Invite Successfully Sent!"
            description="You have successfully sent an invite to the added user, click the button below to continue "
          />
        </>
      </section>
    </DashboardLayout>
  );
}
