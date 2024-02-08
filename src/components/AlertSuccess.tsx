const AlertCloseBtn = () => {
  // script to close the alert modal
  return (
    <button type='button' className='btn fs-5' onClick={() => document.querySelector<HTMLElement>('.alert-success').style.display = 'none'}>x</button>
  );
};

// alert modal for successful email registration
const AlertSuccess = () => {
  return (
    <div className="alert-success alert alert-success" role='alert'>
      <AlertCloseBtn />
      Email successfully added for future news updates! (updates should come once a day)
    </div>
  );
};

export default AlertSuccess;