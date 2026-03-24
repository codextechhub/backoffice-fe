import { CustomInput } from "@/components/custom/custom-input";
import StepProgressBar from "@/components/custom/step-progress-bar";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function AddSchoolAdmin() {
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  return (
    <>
      <StepProgressBar totalSteps={4} currentStep={3} />
      <div className="max-w-235 mt-5">
        <div className="mb-7 space-y-1.5">
          <h4 className="font-medium text-xl text-black-01">
            Create School Admin
          </h4>
          <p className="text-gray-01 font-mont text-xs">
            Add an admin ensure at least one administrator exists in the
            institution.
          </p>
        </div>

        <div className="space-y-10 mb-4">
          {Array.from({ length: count }).map((_, idx) => (
            <div key={idx} className="grid md:grid-cols-2 gap-x-8 gap-y-6">
              <p className="inline-flex items-center col-span-full text-gray-05 text-sm m">
                School Admin {idx + 1}
              </p>
              <CustomInput
                id="fname"
                label="First Name"
                placeholder="Enter first name"
              />
              <CustomInput
                id="lname"
                label="Last Name"
                placeholder="Enter last name"
              />
              <CustomInput
                id="email"
                label="Email Address"
                placeholder="Enter email address"
              />
              <CustomInput
                id="phone"
                label="Phone Number"
                placeholder="Enter branch"
              />
              <CustomInput
                id="role"
                label="Admin Role"
                placeholder="Enter role"
              />
            </div>
          ))}
        </div>

        <div className="">
          <Button
            variant={"ghost"}
            className="px-0 text-primary"
            onClick={() => {
              setCount((prev) => prev + 1);
            }}
          >
            <Plus /> Add Another Admin
          </Button>
        </div>

        <div className="mt-10 inline-flex items-center gap-4">
          <Button variant={"outline-dest"} className="w-37">
            Cancel
          </Button>
          <Button
            onClick={() => {
              navigate({ search: "?step=plan" });
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
