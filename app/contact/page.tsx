import React from "react";
import { submitForm } from "./action";

const contactPage = () => {
  return (
    <form action={submitForm}>
      <input name="name" />

      <input name="email" />

      <button>Submit</button>
    </form>
  );
};

export default contactPage;
