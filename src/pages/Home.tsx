import Header from "../components/Header"
import EmailInputField from "../components/EmailInputField"
import NewsOutletInputField from "../components/NewsOutletInputField"
import SubmitBtn from "../components/SubmitBtn"

const Home = () => {
  return (
    <>
      <Header />
      <div className='border border-light-subtle'>
        <h3 className='fs-4'>Choose a news outlet to recieve updates from: </h3>
        <NewsOutletInputField />
        <EmailInputField />
        <SubmitBtn />
      </div>
    </>
  )
}

export default Home