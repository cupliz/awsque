import Link from 'next/link'

const SignupForm =
    ({ handleEmailChange, handlePasswordChange, email, password, error, signup }) => (
      <form>
        <div className='row'>
          <div className='col-12'>
            <input
              type='email'
              name='Email Address'
              placeholder='Email Address'
              onChange={handleEmailChange}
              value={email}
            />
          </div>
          <div className='col-12'>
            <input
              type='password'
              name='Password'
              placeholder='Password'
              onChange={handlePasswordChange}
              value={password} />
          </div>
          <div className='col-12'>
            <p className='color--error'> {error} </p>
          </div>
          <div className='col-12'>
            <button
              onClick={signup}
              type='submit'
              className='btn btn--primary type--uppercase'>
                          Create Account
            </button>
          </div>
          <div className='col-12'>
            <span className='type--fine-print block'>Already have an account?
              <Link href='/login'><a>Sign in</a></Link>
            </span>
            <span className='type--fine-print'>By signing up, you agree to the
              <Link href='/terms-of-service'><a>Terms of Service</a></Link>
            </span>
          </div>
        </div>
      </form>
    )

export default SignupForm
