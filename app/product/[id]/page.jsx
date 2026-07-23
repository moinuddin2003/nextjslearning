import React from "react";

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
  return (
    <>
      <h1>Product Detail</h1>
      <p>THe product ID you are entering is {id}</p>
    </>
  );
}
