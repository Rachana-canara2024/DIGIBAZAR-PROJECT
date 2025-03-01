import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import image1 from "../Assets/Images/about-2.jpg"
export default function AboutContent() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid2
        container
        // spacing={2}
        sx={{ backgroundColor: "#acab753b", borderRadius: "20px" }}
      >
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <img
            src={image1}
            alt="picture"
            style={{ width: "100%", borderRadius: "20px" }}
          />
        </Grid2>
        <Grid2
          size={{ xs: 12, sm: 6 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              p: 3,
              textAlign: "justify",
            }}
          >
            <Typography
              gutterBottom
              sx={{ fontWeight: "900", fontSize: "40px" }}
            >
              About <span style={{ color: "#5a0c4a" }}>Us</span>
            </Typography>
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{ fontWeight: "900",color:"purple" }}
            >
              Your One-Stop Shop for Everything You Need
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ textAlign: "justify" }}
            >
              E-Bazar is a cutting-edge online shopping platform designed to 
              bring you a wide variety of products right at your fingertips. 
              Whether you are looking for electronics, fashion, home essentials, 
              or groceries, e-Bazar offers a seamless shopping experience with 
              competitive pricing and fast delivery.
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ textAlign: "justify" }}
            >
              Our mission is to provide a diverse range of high-quality products 
              that cater to your everyday needs. With easy-to-use features, 
              secure payment options, and dedicated customer support, we aim to 
              revolutionize your online shopping experience. Join millions of 
              satisfied customers who trust e-Bazar for all their shopping needs!
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}
