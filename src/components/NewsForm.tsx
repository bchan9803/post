import { useState } from 'react'

const NewsForm = () => {  
  const [newsOutlet, setNewsOutlet] = useState('')
  const [email, setEmail] = useState('')

  const NewsOption = (props) => {
    return (
      <div className="form-check">
        <input 
          type="radio" 
          className="form-check-input" 
          name='news-outlet'
          id={props.newsOptionID}
          value={props.newsOptionVal}
          checked={props.isChecked} 
          onChange={(e) => setNewsOutlet(e.target.value)}
        />
        <label htmlFor={props.newsOptionID} className="form-check-label">{props.newsOptionLabel}</label>
      </div>
    )
  }
  
  const handleSubmit =  (e: Event) => {
    // sends email details to nodemailer api in '/src/services/nodemailer api/ app.js'
  
    // Plan
    // 1. get form to submit by sending POST request to nodemailer api
    // 2. then, add useState to append val to emailRecipient, emailSubject, emailText


    console.log('handle submit triggered');  
    e.preventDefault()            // prevents page reloading
  
    const testRecipient = email
    const testSubject = newsOutlet
    const text = 'Eiusmod laboris incididunt id incididunt consectetur ea veniam anim irure sint laboris quis.'
  
    fetch("http://localhost:3000/api/email", {
      method: "POST",
      body: JSON.stringify({
        emailRecipient: testRecipient,
        emailSubject: testSubject,
        emailText: text,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
  
    // document.querySelector('.alert').style.display = 'block'
  }

  return (
    <form 
      onSubmit ={handleSubmit}
      className=' border border-light-subtle my-0 mx-auto p-4 w-50'
    >
      <h3 className='fs-5'>Choose a news outlet to recieve updates from: </h3>
      {/* news outlet input field */}
      {/* Axios */}
      <NewsOption 
        newsOptionID='axios'
        newsOptionLabel='Axios'
        newsOptionVal='axios'
        isChecked={newsOutlet === 'axios'}
      />
      {/* BBC News */}
      <NewsOption 
        newsOptionID='bbc'
        newsOptionLabel='BBC News'
        newsOptionVal='bbc'
        isChecked={newsOutlet === 'bbc'}
      />
      {/* New York Times */}
      <NewsOption 
        newsOptionID='nyt'
        newsOptionLabel='New York Times'
        newsOptionVal='nyt'
        isChecked={newsOutlet === 'nyt'}
      />

      <br />

      <h3 className='fs-5'>Enter your email address:</h3>
      {/* email input field */}
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

      {/* submit btn */}
      <button type='submit' className='btn btn-primary'>
        Submit
      </button>
    </form>
  )
}

export default NewsForm