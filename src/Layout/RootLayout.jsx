import { Outlet } from "react-router-dom";
import Appbar from "../Sections/Appbar";
import Footer from "../Sections/Footer";

export default function RootLayout() {
  return (
    <>
      <Appbar />
      <Outlet />
      <Footer />
    </>
  );
}
