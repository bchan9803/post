import AlertFail from "../components/AlertFail"
import AlertSuccess from "../components/AlertSuccess"
import Footer from "../components/Footer"
import Header from "../components/Header"

const Layout = () => {
  return (
    <>
      {/* Submit btn confirmation modal */}
      <AlertSuccess />
      <AlertFail />

      <Header />
      <Footer />
    </>
  )
}

export default Layout