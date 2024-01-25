import NewsForm from "../components/NewsForm"
import NewsOutletInputField from "../components/NewsOutletInputField"
import EmailInputField from "../components/EmailInputField"
// import SubmitBtn from "../components/SubmitBtn"

// Plan
// 1. get form to submit by sending POST request to nodemailer api
// 2. then, add useState to append val to emailRecipient, emailSubject, emailText


const openAlert = () => {
  // alert()

  // sends email details to nodemailer api in '/src/services/nodemailer api/ app.js'
  fetch("http://localhost:3000/api/email", {
    method: "POST",
    body: JSON.stringify({
      emailRecipient: 'bchan9803@gmail.com',
      emailSubject: 'mike',
      emailText: 'pence',
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then((response) => response.json())
  .then((json) => console.log(json));



  document.querySelector('.alert').style.display = 'block'
}

const Home = () => {
  return (
    <main>
      <NewsForm>
        <h3 className='fs-4'>Choose a news outlet to recieve updates from: </h3>
        <NewsOutletInputField />
        <EmailInputField />
        {/* <SubmitBtn /> */}

      <button 
        type='button' 
        className='btn btn-primary' 
        onClick={openAlert}
      >
        Submit
      </button>

      </NewsForm>
    </main>
  )
}

export default Home