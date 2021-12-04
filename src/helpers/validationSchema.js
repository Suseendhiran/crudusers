import * as yup from "yup";

const celebrityFormSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is Required")
    .matches(/^[a-zA-Z ]+$/, "Should contain only Alphabets"),
  imageUrl: yup
    .string()
    .required("ImageUrl is Required")
    .url("Invalid url format"),
  about: yup.string().required("About the celebrity is Required"),
  wikiUrl: yup
    .string()
    .required("Wikiurl is Required")
    .url("Invalid url format"),
});

const loginSchema = yup.object().shape({
  userName: yup
    .string()
    .required("Username is Required")
    .matches(
      /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/,
      "Username Should not contain special characters or spaces"
    ),
  password: yup
    .string()
    .required("Password is Required")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      "Password should contain atleast one uppercase, one lowercase and one special character"
    ),
});

const signupSchema = yup.object().shape({
  userName: yup
    .string()
    .required("Username is Required")
    .matches(
      /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/,
      "Username Should not contain special characters or spaces"
    ),
  password: yup
    .string()
    .required("Password is Required")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      "Password should contain atleast one uppercase, one lowercase and one special character"
    ),
});

export { celebrityFormSchema, loginSchema, signupSchema };
