const VerifyForm = ({ handleVerifyCodeChange, confirmSignup, verifyCode, error }) => (
  <div className='row'>
    <div className='col-12'>
      <input
        type='number'
        name='Email Address'
        placeholder='888888'
        onChange={handleVerifyCodeChange}
        value={verifyCode}
      />
    </div>
    <div className='col-12'>
      <p className='color--error'> {error} </p>
    </div>
    <div className='col-12'>
      <button
        type='submit'
        className='btn btn--primary type--uppercase'
        onClick={confirmSignup}
      >
                          Verify Account
      </button>
    </div>
  </div>
)

export default VerifyForm
