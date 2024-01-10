import AlertCloseBtn from "./AlertCloseBtn"

// alert modal for successful email registration
const AlertSuccess = () => {
  return (
    <div className="alert alert-success" role='alert'>
      <AlertCloseBtn />
      Email successfully added for future news updates!
    </div>
  )
}

export default AlertSuccess