import { useState } from 'react';
import axios from 'axios';

const NewsForm = () => {
  const [newsOutlet, setNewsOutlet] = useState('');
  const [email, setEmail] = useState('');

  // url of post! api
  const CURR_URL = "https://post-backend-j0fd.onrender.com";

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
    );
  };

  const handleSubmit = async (e) => {
    console.log('handle submit triggered');
    e.preventDefault();            // prevents page reloading

    // adds user info to postDB (MongoDB)
    try {
      await axios.post(`${CURR_URL}/user/addUser`, {
        newsOutlet: newsOutlet,
        email: email
      });
      console.log('user added!');

      document.querySelector<HTMLElement>('.alert-success').style.display = 'block';
    }
    catch (err) {
      console.error(err);
      document.querySelector<HTMLElement>('.alert-fail').style.display = 'block';
    }
  };


  // const testSendMail = async () => {
  //   try {
  //     await axios.get(`${CURR_URL}/api/fetchUser`);
  //   }
  //   catch (err) {
  //     console.error(err);
  //   }
  // };


  // sends updates once a day
  const dailyFunction = async () => {
    try {
      await axios.get(`${CURR_URL}/api/fetchUser`);
    }
    catch (err) {
      console.error(err);
    }
  };

  function triggerDailyFunction() {
    // Set the time for 24 hours from now
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(now.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    const timeUntilTomorrow = tomorrow.valueOf() - now.valueOf();

    // Set a timeout to trigger the function
    setTimeout(() => {
      dailyFunction();

      // Set up the next trigger for the next day
      triggerDailyFunction();
    }, timeUntilTomorrow);
  }

  // Initial call to start the process
  triggerDailyFunction();


  return (
    <form
      onSubmit={handleSubmit}
      id='news-form'
      className='border border-light-subtle my-0 mx-auto p-4 md'
    >
      <h3 className='fs-5'>Choose a news outlet to recieve updates from: </h3>
      {/* news outlet input field */}
      {/* Axios */}
      <NewsOption
        newsOptionID='axios'
        newsOptionLabel='Axios'
        newsOptionVal='Axios'
        isChecked={newsOutlet === 'Axios'}
      />
      {/* Politico */}
      <NewsOption
        newsOptionID='politico'
        newsOptionLabel='Politico'
        newsOptionVal='Politico'
        isChecked={newsOutlet === 'Politico'}
      />
      {/* LA Times */}
      <NewsOption
        newsOptionID='latimes'
        newsOptionLabel='LA Times'
        newsOptionVal='LA Times'
        isChecked={newsOutlet === 'LA Times'}
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

      {/* test send email btn */}
      {/* <button type='button' className="btn" onClick={testSendMail}>send mail</button> */}
    </form>
  );
};

export default NewsForm;