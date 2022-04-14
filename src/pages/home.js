import React from "react";
import { FormData } from "../data/formData";
import Form from "../components/form";

const Home = () => {
  return (
    <div>
      <div className="wrapper">
        <Form data={FormData} />
      </div>
    </div>
  );
};

export default Home;
