import EmailInputField from "./EmailInputField"
import SubmitBtn from "./SubmitBtn"
import NewsOutletInputField from './NewsOutletInputField';


const NewsUpdateForm = () => {
  return (
    <form className='border border-light-subtle w-50 my-0 mx-auto p-4'>
      <h3 className='fs-4'>Choose a news outlet to recieve updates from: </h3>
      <NewsOutletInputField />
      <h3 className='fs-4'>Enter an email address to recieve updates: </h3>
      <EmailInputField />
      <SubmitBtn />
    </form>
  )
}

export default NewsUpdateForm