import React from "react";
import { Box, Typography } from "@mui/material";

const ContactPage = () => {
  return (
    <Box sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h4" fontWeight="bold">
        Contact Us
      </Typography>
      <Typography variant="body1" sx={{ mt: 3 }}>
        For inquiries, you can reach us at:
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        <strong>Phone 1:</strong> +91 9148368867
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        <strong>Phone 2:</strong> +91 9663458857
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        <strong>Email:</strong> support@ebazar.com
      </Typography>
    </Box>
  );
};

export default ContactPage;
