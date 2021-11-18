import React, { useEffect } from "react";
import UserCard from "../UserCard";
import { useCelebrities } from "../../Providers/CelebritiesProvider";
import { useLoader } from "../../Providers/LoaderProvider";
import axios from "../../Api/Api";

function Index() {
  const { celebs, setCelebs } = useCelebrities();
  const { setLoading } = useLoader();
  const handleDelete = (id) => {
    let celebsList = celebs.filter((celeb, index) => index !== id);
    setCelebs([...celebsList]);
    axios.delete(`/celebrities/${id}`).then((data) => {
      getCelebrities();
    });
  };
  const getCelebrities = () => {
    setLoading(true);
    axios.get("/celebrities").then((data) => {
      // console.log("celebsdata", data.data);
      setCelebs(data.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    getCelebrities();
  }, []);

  return (
    <div className="users-list">
      {celebs?.map((item, i) => (
        <UserCard
          celebDetails={item}
          id={item?.id}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default Index;
