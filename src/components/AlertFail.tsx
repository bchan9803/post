import AlertCloseBtn from "./AlertCloseBtn"

// alert modal for unsuccessful email registration
const AlertFail = () => {
  return (
    <div className="alert alert-danger" role='alert'>
      <AlertCloseBtn />
      Email unsuccessfully added! - Please try again.
    </div>
  )
}

export default AlertFail