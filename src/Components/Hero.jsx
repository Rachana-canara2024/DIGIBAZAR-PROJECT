import { Box, Typography } from "@mui/material";
import React from "react";
import image2 from "../Assets/Images/shop-image3.jpg"
export default function Hero() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          backgroundImage: `url(${image2})`,
          // backgroundImage: "linear-gradient(144deg, #8000ff4a, #00ff7178)",
          backgroundSize:"cover",
          backgroundPosition:"center",
          backgroundRepeat:"no-repeat"
        }}
      >
        <Typography
          sx={{
            fontWeight: "900",
            fontSize: { xs: "50px", sm: "80px" },
            textTransform: "uppercase",
            color:"white",
          }}
          gutterBottom
        >
          Welcome  To e - Bazar
        </Typography>
        <Typography
          gutterBottom
          sx={{ fontWeight: "900", fontSize: "20px", color: "white" }}
        >
          Your One-Stop online shopping destination 
        </Typography>
        <Typography
          gutterBottom
          sx={{ width: "80%", fontWeight: "600", color: "white" }}
        >
         Discover the latest trends, unbeatable deals and a wide variety of products at E-BAZAR.
        </Typography>
      </Box>
    </Box>
  );
}
