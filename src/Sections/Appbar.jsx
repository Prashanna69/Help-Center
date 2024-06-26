import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";

export default function Appbar() {
  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: "secondary.main", px: "5rem", py: "0.5rem" }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" color="primary.main">
            Prashanna
          </Typography>
          <hr
            style={{
              border: "none",
              borderLeft: "2px solid #BDBDBD",
              height: "5vh",
              margin: "0 10px",
            }}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            color="primary.main"
          >
            Help Center
          </Typography>
          <Box display="flex" gap="1rem">
            <Button
              variant="contained"
              sx={{
                bgcolor: "#222831",
                color: "primary.main",
                border: "1px solid #fff",
              }}
            >
              Submit a request
            </Button>
            <Button
              variant="contained"
              sx={{ bgcolor: "button.main", color: "primary.main" }}
            >
              Sign in
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
