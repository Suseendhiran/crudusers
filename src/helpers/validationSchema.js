import * as yup from "yup";

export const celebrityFormSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is Required")
    .matches(/^[a-zA-Z ]+$/, "Should contain only Alphabets"),
  imageUrl: yup.string().required("Name is Required").url("Invalid url format"),
  about: yup.string().required("Name is Required"),
  wikiUrl: yup.string().required("Name is Required").url("Invalid url format"),
});
