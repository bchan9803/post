// import { useState } from "react";

const NewsOption = (props) => {
  // const [newsOutlet, setNewsOutlet] = useState("")

  return (
    <div className="form-check">
      <input 
        type="radio" 
        className="form-check-input" 
        name='news-outlet' 
        id={props.newsOptionID}
        value={props.newsOptionVal}
        // onChange={(e) => setNewsOutlet(e.target.value)}
      />
      <label htmlFor={props.newsOptionVal} className="form-check-label">{props.newsOptionLabel}</label>
    </div>
  )
}

const NewsOutletInputField = () => {

  return (
    <section className='mb-5'>
      {/* Axios */}
      <NewsOption 
        newsOptionID='axios'
        newsOptionVal='axios'
        newsOptionLabel='Axios'
      />
      {/* BBC News */}
      <NewsOption 
        newsOptionID='bbc'
        newsOptionVal='bbc'
        newsOptionLabel='BBC News'
      />
      {/* New York Times */}
      <NewsOption 
        newsOptionID='nyt'
        newsOptionVal='nyt'
        newsOptionLabel='New York Times'
      />
    </section>
  )
}

export default NewsOutletInputField