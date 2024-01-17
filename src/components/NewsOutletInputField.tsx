const NewsOutletInputField = () => {

  return (
    <div className='mb-5'>
      {/* Axios */}
      <div className="form-check">
        <input 
          type="radio" 
          className="form-check-input" 
          name='news-outlet' 
          id='axios'
          value='axios' 
          onChange={handleNewsOutlet}
        />
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
          onChange={handleNewsOutlet}
        />
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
          onChange={handleNewsOutlet}
        />
        <label htmlFor="nyt" className="form-check-label">NYT</label>
      </div>
    </div>
  )
}

export default NewsOutletInputField