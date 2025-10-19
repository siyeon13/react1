import { Outlet } from "react-router-dom";
import Navigationbar from "./NavigationBar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <Navigationbar />
      <Outlet />
      <Footer />
    </>
  );
}
