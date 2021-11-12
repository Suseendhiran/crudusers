import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useParams, useHistory } from "react-router-dom";
import { Formik } from "formik";
import { useCelebrities } from "../../Providers/CelebritiesProvider";

function Index() {
  const { celebs, setCelebs } = useCelebrities();
  const { id } = useParams();
  let history = useHistory();
  const handleCelebDetails = (values) => {
    let celebList = [...celebs];

    if (id) {
      celebList[id] = { ...values };

      setCelebs([...celebList]);
      history.push("/");
    } else {
      setCelebs([...celebList, { ...values }]);
      history.push("/");
    }
  };

  return (
    <>
      <h1 className="edit-head">{id ? "Edit" : "Add"} Celebrity</h1>
      <Formik
        initialValues={{
          name: celebs[id]?.name ? celebs[id]?.name : "",
          imageUrl: celebs[id]?.imageUrl ? celebs[id]?.imageUrl : "",
          about: celebs[id]?.about ? celebs[id]?.about : "",
          wikiUrl: celebs[id]?.wikiUrl ? celebs[id]?.wikiUrl : "",
        }}
        enableReinitialize
        onSubmit={(values) => {
          handleCelebDetails(values);
        }}
      >
        {({ handleSubmit, values, handleChange }) => {
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
              <TextField
                id="outlined-basic"
                required
                label="Celebrity name"
                variant="outlined"
                value={values.name}
                name="name"
                onChange={handleChange}
              />
              <TextField
                id="outlined-basic"
                required
                label="Image Url"
                variant="outlined"
                value={values.imageUrl}
                name="imageUrl"
                onChange={handleChange}
              />
              <TextField
                id="outlined-basic"
                required
                label="About the Celeb"
                variant="outlined"
                value={values.about}
                name="about"
                onChange={handleChange}
              />
              <TextField
                id="outlined-basic"
                required
                label="Wikipedia Url"
                variant="outlined"
                value={values.wikiUrl}
                name="wikiUrl"
                onChange={handleChange}
              />
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
