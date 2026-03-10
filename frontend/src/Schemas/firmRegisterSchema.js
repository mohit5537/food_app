import * as yup from "yup";

export const registerFirmSchema = yup.object().shape({
  firmName: yup.string().required("Firm Name is required"),
  area: yup.string().required("Area is required"),
  category: yup.array().required("Category is must"),
  region: yup.string().required("Region is required"),
  offer: yup.string(),
});
