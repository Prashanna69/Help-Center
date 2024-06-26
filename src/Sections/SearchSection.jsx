import React, { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import { Search, Clear } from "@mui/icons-material";

export default function SearchSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleClearSearch = () => setSearchQuery("");

  return (
    <>
      <Box
        bgcolor="#dadbf1"
        minHeight="40vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h2" fontWeight="500">
          How can we Help?
        </Typography>
        <TextField
          variant="filled"
          type="search"
          label="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{
            m: 1,
            mt: 3,
            width: "30rem",
            bgcolor: "background.paper",
          }}
        />
      </Box>
    </>
  );
}
