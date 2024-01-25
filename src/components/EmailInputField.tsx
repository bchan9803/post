import { useState } from "react"

const EmailInputField = () => {
  const [email, setEmail] = useState("")

  return (
    <section className='mb-5'>
      <label htmlFor="email-input-field">Email address</label>
      <input 
        type="email" 
        className='form-control' 
        id='email-input-field' 
        placeholder='example@mail.com'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </section>
  )
}

export default EmailInputField