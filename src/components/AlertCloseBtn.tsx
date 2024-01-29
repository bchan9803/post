// close btn for alert modal
const AlertCloseBtn = () => {
  // script to close the alert modal
  const closeAlert = () => {
    // document.querySelector('.alert').style.display = 'none'
  }
  return (
    <button type='button' className='btn fs-5' onClick={closeAlert}>x</button>
  )
}

export default AlertCloseBtn