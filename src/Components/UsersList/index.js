import React, { useEffect } from "react";
import UserCard from "../UserCard";
import { useCelebrities } from "../../Providers/CelebritiesProvider";
import { useAuth } from "../../Providers/AuthProvider";
import { useLoader } from "../../Providers/LoaderProvider";
import { useToasts } from "react-toast-notifications";
import axios from "../../Api/Api";

function Index() {
  const { celebs, setCelebs } = useCelebrities();
  const { token } = useAuth();
  const { addToast } = useToasts();
  const { setLoading } = useLoader();
  const handleDelete = (id) => {
    axios.delete(`/celebs/${id}`).then((res) => {
      addToast(res.data.message, { appearance: "success" });
      getCelebrities();
    });
  };
  const getCelebrities = () => {
    setLoading(true);
    axios.get("/celebs").then((data) => {
      setCelebs(data.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    getCelebrities();
  }, [token]);

  return (
    <div className="users-list">
      {celebs?.map((item, i) => (
        <UserCard
          celebDetails={item}
          id={item?._id}
          key={item?._id}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default Index;
