const NewsOutletInputField = () => {
  return (
    <div className='mb-5'>
      <div className="form-check">
        <input type="radio" className="form-check-input" name='news-site-radio' id='news-site-radio-opt-1' />
        <label htmlFor="news-site-radio-opt-1" className="form-check-label">Axios</label>
      </div>
      <div className="form-check">
        <input type="radio" className="form-check-input" name='news-site-radio' id='news-site-radio-opt-2' />
        <label htmlFor="news-site-radio-opt-2" className="form-check-label">BBC News</label>
      </div>
      <div className="form-check">
        <input type="radio" className="form-check-input" name='news-site-radio' id='news-site-radio-opt-3' />
        <label htmlFor="news-site-radio-opt-3" className="form-check-label">NYT</label>
      </div>
    </div>
  )
}

export default NewsOutletInputField