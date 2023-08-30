import * as yup from "yup";
export const contactSchema = yup
  .object({
    name: yup.string().min(0).required("Name is required"),
    email: yup.string().email("Email is invalid").required("Email is required"),
    phone: yup.string().min(0).required("phone is required"),
    message: yup.string().min(0).required("Message is required"),
  })
  .required();

export const memberRegisterSchema = yup
  .object({
    firstname: yup.string().min(0).required("First name is required"),
    lastname: yup.string().min(0).required("Last name is required"),
    email: yup.string().email("Email is invalid").required("Email is required"),
    phone: yup
      .string()
      .required("Phone is required")
      .matches("^(\\+1)?[-. ]?\\(?(\\d{3})\\)?[-. ]?(\\d{3})[-. ]?(\\d{4})$", {
        message: "Please enter valid number.",
        excludeEmptyString: false,
      }),

    dob: yup.string().min(0).required("Date of birth is required"),
    security: yup.string().min(0).required("Social security is required"),
    currentAddress: yup.string().min(0).required("Current address is required"),
    state: yup.string().min(0).required("State is required"),
    city: yup.string().min(0).required("City is required"),
    zipCode: yup.string().min(0).required("Zip code is required"),
    maritalStatus: yup.string().min(0).required("Marital status is required"),
    bedRooms: yup.string().min(0).required("Bed rooms are required"),
    bathRooms: yup.string(),
    pets: yup.string(),
    vehicle: yup.string(),
    livingUnit: yup.string(),
    employmentStatus: yup.string(),
    salary: yup.string().min(0).required("Salary is required"),
    aboutYourself: yup.string(),
    isAggred: yup.boolean().required("required"),
  })
  .required();
