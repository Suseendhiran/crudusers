import React from "react";
import UserCard from "../UserCard";

function index({ celebs, setCelebs }) {
  const handleDelete = (id) => {
    console.log("delete idss", id);
    let celebsList = celebs.filter((celeb, index) => index !== id);
    setCelebs([...celebsList]);
  };
  return (
    <div className="users-list">
      {" "}
      {celebs.map((item, i) => (
        <UserCard celebDetails={item} id={i} handleDelete={handleDelete} />
      ))}{" "}
    </div>
  );
}

export default index;
