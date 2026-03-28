import { svgIcons } from "@/assets/svg";
import { CustomDateInput } from "@/components/custom/custom-date-input";
import { CustomInput } from "@/components/custom/custom-input";
import { CustomNativeSelect } from "@/components/custom/custom-native-select";
import { MultiSelectInput } from "@/components/custom/multiselect-input";
import PromptModal from "@/components/modal/prompt-modal";
import { Button } from "@/components/ui/button";
import useToggleModal from "@/hooks/use-toggle";
import { routesPath } from "@/routes/routesPath";
import { useNavigate } from "react-router";

export default function PackageSetup() {
  const navigate = useNavigate();
  const { isOpen, toggleClick } = useToggleModal(false);
  return (
    <>
      <div className="max-w-235 mt-5">
        <div className="mb-7 space-y-1.5">
          <h4 className="font-medium text-xl text-black-01">Package Setup</h4>
          <p className="text-gray-01 font-mont text-xs">
            To add a new school fill all the compulsory questions below.
          </p>
        </div>

        <p className="inline-flex items-center text-gray-05 text-sm mb-4">
          Package Information
          <figure className="size-fit ml-2">{svgIcons.infoIcon}</figure>
        </p>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
          <CustomNativeSelect
            id="package"
            label="Package Plan"
            placeholder="Select package plan"
            options={[
              { label: "Basic", value: "basic" },
              { label: "Standard", value: "standard" },
              { label: "Premium", value: "premium" },
              { label: "Enterprise", value: "enterprise" },
            ]}
            isRequired
          />

          <MultiSelectInput
            id="modules"
            label="Enabled Modules"
            placeholder="Select modules"
            options={[
              { label: "Student Management", value: "student" },
              { label: "Teacher Management", value: "teacher" },
              { label: "Parent Portal", value: "parent" },
              { label: "Finance / Fees", value: "finance" },
            ]}
            maxCount={1}
            isRequired
            onValueChange={() => {}}
          />

          <CustomInput
            id="student"
            type="number"
            label="Number of Students"
            placeholder="Enter student capacity"
            isRequired
          />
          <CustomInput
            id="teacher"
            type="number"
            label="Number of Teachers"
            placeholder="Enter teacher capacity"
            isRequired
          />
          <CustomInput
            id="admin"
            type="number"
            label="Number of Admins"
            placeholder="Enter admin capacity"
            isRequired
          />
          <CustomDateInput
            id="role"
            label="Subscription Expires"
            placeholder="Enter expire duration"
          />
        </div>

        <div className="mt-10 inline-flex items-center gap-4">
          <Button variant={"outline-dest"} className="w-37">
            Cancel
          </Button>
          <Button
            onClick={() => {
              toggleClick();
            }}
            className="w-37"
          >
            Continue
          </Button>
        </div>
      </div>
      <PromptModal
        isOpen={isOpen}
        onConfirm={() => {
          toggleClick();
          navigate(routesPath.PROTECTED.SCHOOL_MGT.INDEX + "?status=pending", {
            replace: true,
          });
        }}
        title="School created successfully"
        description="The school has been set up and invitations have been sent to the administrators. You can continue to the dashboard."
      />
    </>
  );
}
