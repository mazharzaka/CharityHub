import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().email("Email is not Vaild").required("Email is required."),
  password: yup.string().required("Password is required."),
});
