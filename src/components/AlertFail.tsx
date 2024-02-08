
const AlertCloseBtn = () => {
  // script to close the alert modal
  return (
    <button type='button' className='btn fs-5' onClick={() => document.querySelector<HTMLElement>('.alert-fail').style.display = 'none'}>x</button>
  );
};

// alert modal for unsuccessful email registration
const AlertFail = () => {
  return (
    <aside className="alert-fail alert alert-danger" role='alert'>
      <AlertCloseBtn />
      Email unsuccessfully added! - Please try again.
    </aside>
  );
};

export default AlertFail;