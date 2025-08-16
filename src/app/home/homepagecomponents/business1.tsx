"use client";
import { useState } from "react";
import { Box, TextField, Grid, Typography, Paper, Divider } from "@mui/material";


export default function BusinessForm() {
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <Box sx={{ width: "100%", backgroundColor: "#ffffff", p: 4 }}>
      <Grid container spacing={4}>
        {/* Form Section */}
        <Grid size={6}>
          <Typography sx={{ color: "black" }} variant="h5" gutterBottom>
            Enter Business Info
          </Typography>

          <TextField
            fullWidth
            label="Business Name"
            variant="outlined"
            margin="normal"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
          />

          <TextField
            fullWidth
            label="Business Email"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>

        {/* Preview Section */}
        <Grid size={6}>
          <Typography sx={{ color: "black" }} variant="h5" gutterBottom>
            Preview
          </Typography>

          <Paper elevation={3} sx={{ padding: 3, border: "1px solid #ccc" }}>
            <Typography variant="h6" sx={{ fontWeight: 600, fontSize: "1.4rem" }}>
              {businessName || "Your Business Name"}
            </Typography>

            <Divider sx={{ my: 1 }} />

            <Box>
              {/* <Typography color="text.secondary" sx={{ fontSize: "0.95rem", mb: 1 }}>
                {email || "your@email.com"}
              </Typography>

              <Typography variant="body2" sx={{ mt: 2, fontSize: "0.9rem" }}>
                📍 Chennai, TN
              </Typography>

              <Typography variant="body2" sx={{ mt: 1, fontSize: "0.9rem" }}>
                ⭐ Write a Review &nbsp;&nbsp;|&nbsp;&nbsp; 📷 Add Photo &nbsp;&nbsp;|&nbsp;&nbsp; 🔗 Share
              </Typography>

              <Typography variant="body2" sx={{ mt: 1.5, fontSize: "0.9rem" }}>
                📞 {"+1 " + "775-980-2006"}
              </Typography>

              <Typography variant="body2" sx={{ mt: 1, fontSize: "0.9rem" }}>
                🗺️ Get Directions – Chennai, TN
              </Typography>

              <Typography variant="body2" sx={{ mt: 1, fontSize: "0.9rem", fontStyle: "italic" }}>
                💬 Message the Business
              </Typography> */}
              

            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

