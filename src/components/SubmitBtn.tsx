const ConfirmRequest = () => {
  alert("Email updates have been activated.")
}

const SubmitBtn = () => {
  return (
    <button type='button' class='btn btn-primary' onClick={ConfirmRequest}>Submit</button>
  )
}
export default SubmitBtn