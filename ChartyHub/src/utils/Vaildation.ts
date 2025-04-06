import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().email("Email is not Vaild").required("Email is required."),
  password: yup.string().required("Password is required."),
});

export const registerSchema = yup.object().shape({
  Fname: yup.string().required("Name is required."),
  Lname: yup.string().required("Name is required."),
  age: yup.number().required("Age is required."),
  profileImg: yup
    .mixed()
    .required("Image is required.")
    .test("fileType", "Only images are allowed", (value) => {
      if (!value) return false;

      const file = Array.isArray(value) ? value[0] : value;

      return file instanceof File && file.type.startsWith("image/");
    }),

  address: yup.object().shape({
    street: yup.string().required("Street is required."),
    city: yup.string().required("City is required."),
    country: yup.string().required("Country is required."),
  }),
  phone: yup.number().required("Phone is required."),
  email: yup.string().email("Email is not Vaild").required("Email is required."),
  password: yup.string().required("Password is required."),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required.")
    .oneOf([yup.ref("password"), ''], "Passwords must match"),
});
