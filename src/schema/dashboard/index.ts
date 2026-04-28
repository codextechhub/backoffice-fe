import * as Yup from "yup";

// individual schema for first name and last name
// You can reuse it
export const firstNameSchema = Yup.string()
  .required("First name is required")
  .trim()
  .min(2, "First name must be at least 2 characters")
  .max(50, "First name must not exceed 50 characters")
  .matches(
    /^[a-zA-Z\u00C0-\u017F\s'-]+$/,
    "First name can only contain letters, spaces, hyphens, and apostrophes"
  )
  .test(
    "no-leading-trailing-spaces",
    "First name cannot start or end with spaces",
    (value) => value === value?.trim()
  )
  .test(
    "no-multiple-spaces",
    "First name cannot contain multiple consecutive spaces",
    (value) => !value?.includes("  ")
  )
  .test(
    "valid-characters",
    "First name contains invalid characters",
    (value) => !/[0-9!@#$%^&*()_+=[\]{};:"\\|,.<>/?`~]/.test(value || "")
  );

export const lastNameSchema = Yup.string()
  .required("Last name is required")
  .trim()
  .min(2, "Last name must be at least 2 characters")
  .max(50, "Last name must not exceed 50 characters")
  .matches(
    /^[a-zA-Z\u00C0-\u017F\s'-]+$/,
    "Last name can only contain letters, spaces, hyphens, and apostrophes"
  )
  .test(
    "no-leading-trailing-spaces",
    "Last name cannot start or end with spaces",
    (value) => value === value?.trim()
  )
  .test(
    "no-multiple-spaces",
    "Last name cannot contain multiple consecutive spaces",
    (value) => !value?.includes("  ")
  )
  .test(
    "valid-characters",
    "Last name contains invalid characters",
    (value) => !/[0-9!@#$%^&*()_+=[\]{};:"\\|,.<>/?`~]/.test(value || "")
  );
