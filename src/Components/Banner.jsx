import React from "react"; 
import { Box, Typography, Button, Grid } from "@mui/material";
import pic from "../Assets/Images/shop-image4.jpg"; // This will be the banner image

const Banner = () => {
  return (
    <Box
      sx={{
        bgcolor: "#cfcfcfba",
        overflow: "hidden",
        mt: 5,
        px: 4,
        py: 6,
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <Grid container alignItems="center" spacing={2}>
        {/* Left Content */}
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: { xs: "center", md: "left" }, px: { md: 4 } }}>
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>
              Welcome to <span style={{ color: "#5a0c4a" }}>E-Bazar</span>
            </Typography>
            <Typography
              variant="h2"
              sx={{
                textTransform: "uppercase",
                color: { xs: "white", sm: "#212121" },
                fontWeight: "bold",
                pb: 3,
              }}
            >
              Your Ultimate Online Shopping Destination
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Explore a wide range of products from electronics, fashion, 
              groceries, and more at unbeatable prices. Enjoy fast delivery 
              and secure payment options.
            </Typography>
            {/* <Button
              variant="contained"
              sx={{
                bgcolor: "#5a0c4a",
                color: "white",
                '&:hover': {
                  bgcolor: "#9c0c4a",
                },
              }}
            >
              Shop Now
            </Button> */}
          </Box>
        </Grid>

        {/* Right Content (Image) */}
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img
              src={pic}
              alt="e-Bazar Banner"
              style={{
                width: "100%",
                borderRadius: "20px",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;










// import React from "react";
// import { Box, Typography, Button, Grid } from "@mui/material";
// import pic from "../Assets/Images/single-image1.png";
// const Banner = () => {
//   return (
//     <Box
//       sx={{
//         bgcolor: "#cfcfcfba",
//         overflow: "hidden",
//         mt: 5,
//         px: 4,
//         py: 6,
//         backgroundPosition: "right",
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "contain",
//       }}
//     >
//       <Grid container alignItems="center" spacing={2}>
//         {/* Left Content */}
//         <Grid item xs={12} md={6}>
//           <Box sx={{ textAlign: { xs: "center", md: "left" }, px: { md: 4 } }}>
//             <Typography variant="h3" sx={{ fontWeight: "bold" }}>
//               first title
//             </Typography>
//             <Typography
//               variant="h2"
//               sx={{
//                 textTransform: "uppercase",
//                 color: { xs: "white", sm: "#212121" },
//                 fontWeight: "bold",
//                 pb: 3,
//               }}
//             >
//               sub title
//             </Typography>
//           </Box>
//         </Grid>

//         {/* Right Content (Empty for Now) */}
//         <Grid item xs={12} md={6}></Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default Banner;
