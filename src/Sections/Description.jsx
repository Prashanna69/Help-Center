import { Box, Typography, Grid } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

// Sample JSON data
const projects = [
  {
    id: "1",
    name: "Branches",
    icon: "",
    description:
      "Abstract Branched lets you manage, version, and document your designs in one place.",
    link: "#",
  },
  {
    id: "2",
    name: "Manage your account",
    icon: "",
    description:
      "Configure your account settings, such as your email, profile details, and password.",
    link: "#",
  },
  {
    id: "3",
    name: "Manage organizations, teams, and projects",
    icon: "",
    description:
      "User Abstract organizations, teams and projects to organize your people and your work.",
    link: "#",
  },
  {
    id: "3",
    name: "Manage billing",
    icon: "",
    description: "Change subscription and payment details.",
    link: "#",
  },
  {
    id: "5",
    name: "Authenticate to Abstract",
    icon: "",
    description:
      "Set up and configure SSO, SCIM, and Just-in-Time provisioning.",
    link: "#",
  },
  {
    id: "6",
    name: "Abstract support",
    icon: "",
    description: "Get in touch with a human.",
    link: "#",
  },
];

export default function Description() {
  return (
    <Box minHeight="auto" bgcolor="primary.main" p="10rem" display="flex">
      <Box
        minHeight="60vh"
        p="2rem"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Grid container spacing={10}>
          {projects.map((project) => (
            <Grid
              item
              xs={12}
              sm={6}
              key={project.id}
              display="flex"
              boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
            >
              <Box p="1rem">
                {project.icon ? (
                  <img src={project.icon} alt={project.name} />
                ) : (
                  "icon"
                )}
              </Box>
              <Box p="1rem">
                <Typography variant="h5">{project.name}</Typography>
                <Typography variant="body1" width="20rem">
                  {project.description}
                </Typography>
                <a
                  href={project.link}
                  style={{
                    display: "flex",
                    gap: "5px",
                    alignItems: "center",
                    textDecoration: "none",
                    marginTop: "2rem",
                  }}
                >
                  <Typography variant="body1" color="button.main">
                    Learn more
                  </Typography>
                  <ArrowRightAltIcon />
                </a>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
