import React from "react";
import { useNavigate } from "react-router-dom";
import errorimg from "../Assets/Images/Error-Message.gif"

export default function Error() {
  const navigate = useNavigate(); // Hook for navigation

  // Handle the button click to go home
  const goToHomePage = () => {
    navigate('/'); // Redirect to the home page
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f8f8f8",
        textAlign: "center",
      }}
    >
      <img
        src={errorimg} // Replace this with your actual error GIF URL
        alt="hello git new branch 01-03-2025-r"
        style={{
          maxWidth: "300px",
          marginBottom: "20px",
        }}
      />
      <h2
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          marginBottom: "10px",
          color: "#ff4040",
        }}
      >
        Oops! Something Went Wrong
      </h2>
      <p
        style={{
          fontSize: "16px",
          color: "#555",
          marginBottom: "20px",
        }}
      >
        We encountered an unexpected error. Please try again later or return to the homepage.
      </p>
      <button
        onClick={goToHomePage}
        style={{
          padding: "10px 20px",
          backgroundColor: "#ff4040",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Go to Home Page
      </button>
    </div>
  );
}











// import React from "react";

// export default function Error() {
//   return <div>Error</div>;
// }
