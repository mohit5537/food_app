import * as yup from "yup";

export const vendorRegisterSchema = yup.object().shape({
  userName: yup.string().required("Username is required").min(4).max(8),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email address is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password is too short - should be 8 chars minimum")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters")
    .matches(/\d/, "Password must contain a number")
    .matches(
      /[!@#$%^&*().?":{}|<>]/,
      "Password must contain a special character",
    ),
  confirmPassword: yup
    .string()
    .required("Please confirm your password")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
