import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import Layout from '../components/Layout'
// import withAuth from '../components/withAuth'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      error: null
    }

    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.login = this.login.bind(this)
  }

  handleUsernameChange (e) {
    this.setState({ username: e.target.value, error: null })
  }

  handlePasswordChange (e) {
    this.setState({ password: e.target.value, error: null })
  }

  async login (e) {
    e.preventDefault()
    const { signin } = this.props
    const { username, password } = this.state
    try {
      await signin(username, password)
      Router.push('/')
    } catch (e) {
      this.setState({ error: e.message })
    }
  }

  render () {
    const { username, password, error } = this.state
    const { user } = this.props
    return (
      <Layout user={user}>
        <div className='main-container'>
          <section className='cover imagebg image--light text-center height-100'>
            <div className='bg-cover' />
            <div className='container pos-vertical-center'>
              <div className='row'>
                <div className='col-sm-7 col-md-5'>
                  <h2>Login to continue</h2>
                  <p className='lead'> Welcome back, sign in with your existing Stack account credentials </p>
                  <form>
                    <div className='row'>
                      <div className='col-sm-12'>
                        <input type='text' placeholder='Username' value={username} onChange={this.handleUsernameChange} />
                      </div>
                      <div className='col-sm-12'>
                        <input type='password' placeholder='Password' value={password} onChange={this.handlePasswordChange} />
                      </div>
                      <div className='col-12'>
                        <p className='color--error'> {error} </p>
                      </div>
                      <div className='col-sm-12'>
                        <button className='btn btn--primary type--uppercase' type='submit' onClick={this.login}>Login</button>
                      </div>
                    </div>
                  </form>
                  <span className='type--fine-print block'>Dont have an account yet?
                    <Link href='/signup'><a>Create account </a></Link></span>
                  <span className='type--fine-print block'>Forgot your username or password?
                    <a href='page-accounts-recover.html'>Recover account</a></span> </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Login
