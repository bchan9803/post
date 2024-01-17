// import EmailInputField from "./EmailInputField"
// import SubmitBtn from "./SubmitBtn"
// import NewsOutletInputField from './NewsOutletInputField';
import { useState } from "react";


const NewsForm = () => {
  const [newsOutlet, setNewsOutlet] = useState('')
  const [email, setEmail] = useState('')

  const handleNewsOutlet = (e) => {
    setNewsOutlet(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const submitForm = () => {
    alert(newsOutlet + ' ' + email)
    
    // document.querySelector('.alert').style.display = 'block'
  }

  return (
    <form className='border border-light-subtle w-50 my-0 mx-auto p-4'>
      <h3 className='fs-4'>Choose a news outlet to recieve updates from: </h3>
      {/* <NewsOutletInputField /> */}

      <div className='mb-5'>
        {/* Axios */}
        <div className="form-check">
          <input 
            type="radio" 
            className="form-check-input" 
            name='news-outlet' 
            id='axios'
            value='axios' 
            onChange={handleNewsOutlet}/>
          <label htmlFor="axios" className="form-check-label">Axios</label>
        </div>
        {/* BBC News */}
        <div className="form-check">
          <input 
            type="radio" 
            className="form-check-input" 
            name='news-outlet' 
            id='bbc'
            value='bbc' 
            onChange={handleNewsOutlet} />
          <label htmlFor="bbc" className="form-check-label">BBC News</label>
        </div>
        {/* NYT */}
        <div className="form-check">
          <input 
            type="radio" 
            className="form-check-input" 
            name='news-outlet' 
            id='nyt'
            value='nyt' 
            onChange={handleNewsOutlet} />
          <label htmlFor="nyt" className="form-check-label">NYT</label>
        </div>
      </div>


      <h3 className='fs-4'>Enter an email address to recieve updates: </h3>
      {/* <EmailInputField /> */}
      <div className='mb-5'>
        <label htmlFor="email-input-field">Email address</label>
        <input 
          type="email" 
          className='form-control' 
          id='email-input-field' 
          placeholder='Email address'
          value={email}
          onChange={handleEmail} 
          />
      </div>
      {/* <SubmitBtn /> */}
      <button 
        type='submit' 
        className='btn btn-primary'
        onClick={submitForm} >
        Submit
      </button>
    </form>
  )
}

export default NewsForm