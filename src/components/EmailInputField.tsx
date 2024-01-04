const EmailInputField = () => {
  return (
    <div className='mb-5'>
      <label htmlFor="email-input-field">Email address</label>
      <input type="email" className='form-control' id='email-input-field' placeholder='Email address' />
    </div>
  )
}

export default EmailInputField