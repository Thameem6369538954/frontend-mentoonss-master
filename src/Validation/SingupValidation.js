import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";



export const schema = yup.object().shape({
    userName: yup.string().required("Please Enter Your Name").min(6),
    email: yup
      .string()
      .lowercase()
      .trim()
      .email("please enter your email properly")
      .required(),
    number: yup.number().required("Please Enter Your Number").max(10),
    age: yup
      .number()
      .integer()
      .positive()
      .required("Please Enter Your Age")
      .min(2),
    password: yup
      .string()
      .required()
      .min(5, "Minium 5 chars required ")
      .max(15, "Enter upto 15 chars only"),
    confrimPassword: yup
      .string()
      .required("Please Enter Your Confrim Password")
      .oneOf([yup.ref("password"), null]),
  });