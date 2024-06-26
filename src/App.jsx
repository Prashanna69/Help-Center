import { Box } from "@mui/material";
import Appbar from "./Sections/Appbar";
import SearchSection from "./Sections/SearchSection";
import Footers from "./Sections/Footer";
import Description from "./Sections/Description";

function App() {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Appbar />
      <SearchSection />
      <Description />
      <Footers />
    </Box>
  );
}

export default App;
