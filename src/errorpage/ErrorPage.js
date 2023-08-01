import React from "react";

const Error404Page = () => {
    console.log("asd")
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f8f8f8",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Error 404</h1>
      <p style={{ fontSize: "1.2rem" }}>Page not found</p>
    </div>
  );
};

export default Error404Page;