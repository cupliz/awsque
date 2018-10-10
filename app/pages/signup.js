import React from 'react'
import Router, { withRouter } from 'next/router'
import Layout from '../components/Layout'
// import withAuth from '../components/withAuth'
import SignupForm from '../components/signup/SignupForm'
import VerifyForm from '../components/signup/VerifiyForm'

class Signup extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      error: null,
      isForVerification: !!((this.props.router.query && this.props.router.query.verify === 'true')),
      verifyCode: ''
    }

    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleVerifyCodeChange = this.handleVerifyCodeChange.bind(this)
    this.signup = this.signup.bind(this)
    this.confirmSignup = this.confirmSignup.bind(this)
  }

  handleEmailChange (e) {
    this.setState({ email: e.target.value, error: null })
  }

  handlePasswordChange (e) {
    this.setState({ password: e.target.value, error: null })
  }

  handleVerifyCodeChange (e) {
    this.setState({ verifyCode: e.target.value, error: null })
  }

  async signup (e) {
    e.preventDefault()
    const { signup } = this.props
    const { email, password } = this.state
    try {
      await signup(email, password)
      this.setState({ isForVerification: true })
      Router.push('/signup?verify=true')
    } catch (e) {
      if (typeof e === 'string' || e instanceof String) {
        this.setState({ error: e })
      } else {
        this.setState({ error: e.message })
      }
    }
  }

  async confirmSignup () {
    const { confirmSignup } = this.props
    try {
      await confirmSignup(this.state.email, this.state.verifyCode)
      Router.push('/login')
    } catch (e) {
      this.setState({ error: e.message })
    }
  }

  render () {
    const { user } = this.props
    return (
      <Layout user={user}>
        <div className='main-container'>
          <section className='cover imagebg image--light text-center height-100'>
            <div className='bg-cover' />
            <div className='container pos-vertical-center'>
              <div className='row'>
                <div className='col-sm-7 col-md-5'>
                  <h2>Create a Stack account</h2>
                  <p className='lead'>Get started with a 14 day free trial, No credit card required — cancel at any time.</p>
                  {
                    this.state.isForVerification
                      ? <VerifyForm
                        handleVerifyCodeChange={this.handleVerifyCodeChange}
                        confirmSignup={this.confirmSignup}
                        verifyCode={this.state.verifyCode}
                        error={this.state.error}
                      />
                      : <SignupForm
                        handleEmailChange={this.handleEmailChange}
                        handlePasswordChange={this.handlePasswordChange}
                        signup={this.signup}
                        email={this.state.email}
                        password={this.state.password}
                        error={this.state.error}
                      />
                  }
                </div>
              </div>
            </div></section>
        </div>
      </Layout>
    )
  }
}

export default withRouter(Signup)
