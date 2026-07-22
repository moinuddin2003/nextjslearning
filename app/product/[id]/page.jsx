import React from "react";

export default async function ProductDetailPage({ params }) {
  const { id } = await params;

  return (
    <>
      <h1>Product Detail</h1>
      <p>THe product ID you are entering is {id}</p>
    </>
  );
}
