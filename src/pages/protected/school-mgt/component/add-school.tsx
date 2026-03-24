import { svgIcons } from "@/assets/svg";
import { CustomInput } from "@/components/custom/custom-input";
import { CustomNativeSelect } from "@/components/custom/custom-native-select";
import StepProgressBar from "@/components/custom/step-progress-bar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

export default function AddSchool() {
  const navigate = useNavigate();
  return (
    <>
      <StepProgressBar totalSteps={4} currentStep={1} />
      <div className="max-w-235 mt-5">
        <div className="mb-7 space-y-1.5">
          <h4 className="font-medium text-xl text-black-01">
            Add a New School
          </h4>
          <p className="text-gray-01 font-mont text-xs">
            To add a new school fill all the compulsory questions below.
          </p>
        </div>

        <p className="inline-flex items-center text-gray-05 text-sm mb-4">
          School Information
          <figure className="size-fit ml-2">{svgIcons.infoIcon}</figure>
        </p>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
          <CustomInput
            id="name"
            label="School Name"
            placeholder="Enter school name e.g., St. Mary’s College"
            isRequired
          />
          <CustomInput
            id="address"
            label="School Address"
            placeholder="Enter school address"
            isRequired
          />
          <CustomInput
            id="name"
            type="email"
            label="School Email Address"
            placeholder="Enter school email e.g., marycollege@gmail.com"
            isRequired
          />
          <CustomNativeSelect
            id="name"
            label="Ownership Type"
            placeholder="Select school type"
            options={[
              { label: "Private", value: "private" },
              { label: "Public", value: "public" },
              { label: "Faith-based", value: "faith-based" },
              { label: "NGO / Foundation", value: "NGO-Foundation" },
            ]}
            isRequired
          />
          <CustomInput
            id="code"
            label="School Code"
            placeholder="Enter school code"
            isRequired
          />
          <CustomInput
            id="url"
            type="url"
            label="School Website"
            placeholder="Enter website"
          />
          <CustomInput
            id="motto"
            type="text"
            label="School Motto"
            placeholder="Enter school motto"
          />
          <CustomNativeSelect
            id="term"
            label="Term Structure"
            placeholder="Select term structure"
            options={[
              { label: "3 Terms", value: "terms" },
              { label: "2 Semesters", value: "semesters" },
            ]}
            isRequired
          />
          <CustomNativeSelect
            id="currency"
            label="Currency"
            placeholder="Select currency type"
            options={[
              { label: "NGN (Naira)", value: "ngn" },
              { label: "USD (Dollars)", value: "usd" },
            ]}
          />
          <CustomInput
            id="govt_id"
            type="text"
            label="Registration ID"
            placeholder="Enter registration number"
          />
          <CustomInput
            id="logo"
            type="file"
            label="School Logo"
            placeholder="Select file jpg. jpeg. png. files supported "
            isRequired
          />
        </div>

        <div className="mt-10 inline-flex items-center gap-4">
          <Button variant={"outline-dest"} className="w-37">
            Cancel
          </Button>
          <Button
            onClick={() => {
              navigate({ search: "?step=branch" });
            }}
            className="w-37"
          >
            Continue
          </Button>
        </div>
      </div>
    </>
  );
}
