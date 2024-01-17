// import sendEmail from "../scripts/sendEmail.tsx"
// import {transporter, sendMail, options} from "../scripts/sendEmail"

const openAlert = () => {
  // try {
  //   sendEmail()
  // } catch (error) {
  //   console.error('not working')
  //   console.error(error);
  // }

  // transporter.sendMail(options);

  alert("Email updates have been activated.")
  document.querySelector('.alert').style.display = 'block'
}

const SubmitBtn = () => {
  return (
    <button type='button' className='btn btn-primary' onClick={openAlert}>
      Submit
    </button>
  )
}
export default SubmitBtn