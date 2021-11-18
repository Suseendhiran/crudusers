import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useParams, useHistory } from "react-router-dom";
import { Formik } from "formik";
import { useLoader } from "../../Providers/LoaderProvider";
import axios from "../../Api/Api";
import { celebrityFormSchema } from "../../helpers/validationSchema";

function Index() {
  const [celeb, setCeleb] = useState({});
  const INPUTS = [
    { name: "name", label: "Celebrity name" },
    { name: "imageUrl", label: "Image Url" },
    { name: "about", label: "About the Celeb" },
    { name: "wikiUrl", label: "Wikipedia Url" },
  ];
  const { setLoading } = useLoader();
  const { id } = useParams();
  let history = useHistory();
  const handleCelebDetails = (values) => {
    setLoading(true);
    if (id) {
      axios
        .put(`/celebrities/${id}`, {
          ...values,
        })
        .then((res) => {
          console.log("uPdated", res);
          history.push("/");
          setLoading(false);
        });
    } else {
      axios
        .post(`/celebrities`, {
          ...values,
        })
        .then((res) => {
          console.log("uPdated", res);
          history.push("/");
          setLoading(false);
        });
    }
  };
  useEffect(() => {
    setLoading(true);
    if (id) {
      axios.get(`/celebrities/${id}`).then((res) => {
        //console.log("uPdated", res.data);
        setCeleb(res.data);
        setLoading(false);
      });
    } else {
      setCeleb({});
      setLoading(false);
    }
  }, [id]);

  return (
    <>
      <h1 className="edit-head">{id ? "Edit" : "Add"} Celebrity</h1>

      <Formik
        initialValues={{
          name: celeb?.name ? celeb.name : "",
          imageUrl: celeb?.imageUrl ? celeb.imageUrl : "",
          about: celeb?.about ? celeb.about : "",
          wikiUrl: celeb?.wikiUrl ? celeb.wikiUrl : "",
        }}
        validationSchema={celebrityFormSchema}
        enableReinitialize
        onSubmit={(values) => {
          handleCelebDetails(values);
        }}
      >
        {({ handleSubmit, values, handleChange, errors }) => {
          return (
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "80%" },
              }}
              onSubmit={handleSubmit}
              autoComplete="off"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                margin: "auto",
                justifyContent: "center",
                alignItems: "flex-start",
                marginTop: "30px",
              }}
            >
              {INPUTS.map((input, index) => {
                return (
                  <TextField
                    error={errors[input.name]}
                    id="outlined-basic"
                    label={input.label}
                    variant="outlined"
                    value={values[input.name]}
                    name={input.name}
                    onChange={handleChange}
                    key={index}
                    helperText={errors[input.name]}
                  />
                );
              })}

              <Button variant="outlined" type="submit">
                {id ? "Edit" : "Add"} Celebrity
              </Button>
            </Box>
          );
        }}
      </Formik>
    </>
  );
}

export default Index;
