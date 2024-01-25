import { Outlet } from "react-router-dom";
import AlertFail from "../components/AlertFail"
import AlertSuccess from "../components/AlertSuccess"
import Footer from "../components/Footer"
import Header from "../components/Header"

const Layout = () => {
  return (
    <>
      <AlertSuccess />
      <AlertFail />

      <Header />
      
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout