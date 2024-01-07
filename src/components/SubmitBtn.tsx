const openAlert = () => {
  // alert("Email updates have been activated.")
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