const handleSubmit = () => {
  alert('hi')
}

const NewsForm = ({ children }) => {
  return (
    <form 
      onSubmit={handleSubmit}
      className=' border border-light-subtle my-0 mx-auto p-4 w-50'
    >
      {children}
    </form>
  )
}

export default NewsForm