const NewsOutletInputField = () => {
  return (
    <select className='form-select' multiple aria-label='Multiple select news outlet'>
      <option selected value="Axios">Axios</option>
      <option value="Fox News">Fox News</option>
      <option value="NYT">NYT</option>
      <option value="Christian Post">Christian Post</option>
      <option value="BBC News">BBC News</option>
    </select>
  )
}

export default NewsOutletInputField