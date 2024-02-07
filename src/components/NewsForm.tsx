import { useState } from 'react';
import axios from 'axios';

const NewsForm = () => {
  const [newsOutlet, setNewsOutlet] = useState('');
  const [email, setEmail] = useState('');

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
      const res = await axios.post("http://localhost:3000/user/addUser", {
        newsOutlet: newsOutlet,
        email: email
      });
      res;
      console.log('user added!');
    }
    catch (err) {
      console.error(err);
    }
  };

  // document.querySelector('.alert').style.display = 'block'

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
    </form>
  );
};

export default NewsForm;