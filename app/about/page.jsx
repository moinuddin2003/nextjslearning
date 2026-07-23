import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <>
      <h1>This is the page from App Page</h1>
      <Image
        src="/CornerCafe.png"
        alt="Image of Corner Cafe"
        height={500}
        width={300}
      />
    </>
  );
};

export default page;
