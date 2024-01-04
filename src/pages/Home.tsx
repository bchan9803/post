import Header from "../components/Header"
import EmailInputField from "../components/EmailInputField"
import NewsOutletInputField from "../components/NewsOutletInputField"
import SubmitBtn from "../components/SubmitBtn"

const Home = () => {
  return (
    <>
      <Header />
      <div className='border border-light-subtle w-50 my-0 mx-auto p-4'>
        <h3 className='fs-4'>Choose a news outlet to recieve updates from: </h3>
        <NewsOutletInputField />
        <h3 className='fs-4'>Enter an email address to recieve updates: </h3>
        <EmailInputField />
        <SubmitBtn />
      </div>
    </>
  )
}

export default Home