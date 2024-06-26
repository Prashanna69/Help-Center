import { Box, Typography } from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
export default function Footers() {
  return (
    <>
      <Box
        minHeight="30vh"
        bgcolor="secondary.main"
        py="2rem"
        px="5rem"
        display="flex"
        gap="1rem"
      >
        <Box minHeight="30vh" p="1rem" flexGrow="1">
          <Typography variant="h5" color="primary.main" fontWeight="600">
            Abstract
          </Typography>
          <a href="#" style={{ textDecoration: "none" }}>
            <Typography
              variant="body1"
              color="primary.main"
              mt="1rem"
              sx={{
                "&:hover": {
                  transform: "translateY(-3px)",
                },
                transition: "transform 0.3s",
              }}
            >
              Branches
            </Typography>
          </a>
        </Box>
        <Box minHeight="30vh" p="1rem" flexGrow="1">
          <Typography variant="h5" color="primary.main" fontWeight="600">
            Resource
          </Typography>
          <a href="#" style={{ textDecoration: "none" }}>
            <Typography
              variant="body1"
              color="primary.main"
              mt="1rem"
              sx={{
                "&:hover": {
                  transform: "translateY(-3px)",
                },
                transition: "transform 0.3s",
              }}
            >
              Blog
            </Typography>
          </a>
          <a href="#" style={{ textDecoration: "none" }}>
            <Typography
              variant="body1"
              color="primary.main"
              sx={{
                "&:hover": {
                  transform: "translateY(-3px)",
                },
                transition: "transform 0.3s",
              }}
            >
              Help Center
            </Typography>
          </a>
          <a href="#" style={{ textDecoration: "none" }}>
            <Typography
              variant="body1"
              color="primary.main"
              sx={{
                "&:hover": {
                  transform: "translateY(-3px)",
                },
                transition: "transform 0.3s",
              }}
            >
              Release Notes
            </Typography>
          </a>
          <a href="#" style={{ textDecoration: "none" }}>
            <Typography
              variant="body1"
              color="primary.main"
              sx={{
                "&:hover": {
                  transform: "translateY(-3px)",
                },
                transition: "transform 0.3s",
              }}
            >
              Status
            </Typography>
          </a>
        </Box>
        <Box minHeight="30vh" p="1rem" flexGrow="1">
          <Typography variant="h5" color="primary.main" fontWeight="600">
            Community
          </Typography>
          <a href="#" style={{ textDecoration: "none" }}>
            <Typography
              variant="body1"
              color="primary.main"
              mt="1rem"
              sx={{
                "&:hover": {
                  transform: "translateY(-3px)",
                },
                transition: "transform 0.3s",
              }}
            >
              Twitter
            </Typography>
          </a>
          <a href="#" style={{ textDecoration: "none" }}>
            <Typography
              variant="body1"
              color="primary.main"
              sx={{
                "&:hover": {
                  transform: "translateY(-3px)",
                },
                transition: "transform 0.3s",
              }}
            >
              Linkdin
            </Typography>
          </a>
          <a href="#" style={{ textDecoration: "none" }}>
            <Typography
              variant="body1"
              color="primary.main"
              sx={{
                "&:hover": {
                  transform: "translateY(-3px)",
                },
                transition: "transform 0.3s",
              }}
            >
              Facebook
            </Typography>
          </a>
          <a href="#" style={{ textDecoration: "none" }}>
            <Typography
              variant="body1"
              color="primary.main"
              sx={{
                "&:hover": {
                  transform: "translateY(-3px)",
                },
                transition: "transform 0.3s",
              }}
            >
              Dribble
            </Typography>
          </a>
          <a href="#" style={{ textDecoration: "none" }}>
            <Typography
              variant="body1"
              color="primary.main"
              sx={{
                "&:hover": {
                  transform: "translateY(-3px)",
                },
                transition: "transform 0.3s",
              }}
            >
              Podcast
            </Typography>
          </a>
        </Box>
        <Box minHeight="30vh" p="1rem" flexGrow="1">
          <Typography variant="h5" color="primary.main" fontWeight="600">
            Company
          </Typography>
          <a href="#" style={{ textDecoration: "none" }}>
            <Typography
              variant="body1"
              color="primary.main"
              mt="1rem"
              sx={{
                "&:hover": {
                  transform: "translateY(-3px)",
                },
                transition: "transform 0.3s",
              }}
            >
              About us
            </Typography>
          </a>
          <a href="#" style={{ textDecoration: "none" }}>
            <Typography
              variant="body1"
              color="primary.main"
              sx={{
                "&:hover": {
                  transform: "translateY(-3px)",
                },
                transition: "transform 0.3s",
              }}
            >
              Careers
            </Typography>
          </a>
          <a href="#" style={{ textDecoration: "none" }}>
            <Typography
              variant="body1"
              color="primary.main"
              sx={{
                "&:hover": {
                  transform: "translateY(-3px)",
                },
                transition: "transform 0.3s",
              }}
            >
              Legal
            </Typography>
          </a>

          <Typography
            variant="body1"
            color="primary.main"
            mt="1rem"
            fontWeight="600"
          >
            Contact Us
          </Typography>

          <Typography variant="body1" color="primary.main">
            plohani2003@gmail.com
          </Typography>
        </Box>
        <Box
          minHeight="30vh"
          p="1rem"
          flexGrow="1"
          display="flex"
          alignItems="flex-end"
        >
          <Box>
            <AutoAwesomeIcon
              sx={{
                display: { xs: "none", md: "flex" },
                color: "primary.main",
              }}
            />
            <Typography variant="body1" color="primary.main">
              &copy; 2024 My Company.
              <br /> All rights reserved.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
