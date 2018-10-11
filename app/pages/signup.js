import React from "react"
import Link from "next/link"
import Router from "next/router"
import Layout from "../components/Layout"
import withAuth from '../components/withAuth'
import { Auth } from "aws-amplify"

class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      verifyCode: "",
      error: null
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  signup = async e => {
    e.preventDefault()
    const { email: username, password } = this.state
    try {
      const result = await Auth.signUp({
        username,
        password
      })
      if (!result.userConfirmed) {
        Router.push(`/verify?email=${username}`)
      }
    } catch (error) {
      this.setState({ error: error.message})
    }
  }

  render() {
    const { user } = this.props
    const { email, password, error } = this.state
    return (
      <Layout user={user}>
        <div className="main-container">
          <section className="cover imagebg image--light text-center height-100">
            <div className="bg-cover" />
            <div className="container pos-vertical-center">
              <div className="row">
                <div className="col-sm-7 col-md-5">
                  <h2>Create a Stack account</h2>
                  <p className="lead">
                    Get started with a 14 day free trial, No credit card
                    required — cancel at any time.
                  </p>
                  <form onSubmit={this.signup}>
                    <div className="row">
                      <div className="col-12">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          onChange={this.handleChange}
                          value={email}
                        />
                      </div>
                      <div className="col-12">
                        <input
                          type="password"
                          name="password"
                          placeholder="Password"
                          onChange={this.handleChange}
                          value={password}
                        />
                      </div>
                      <div className="col-12">
                        <p className="color--error"> {error} </p>
                      </div>
                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn btn--primary type--uppercase"
                        >
                          Create Account
                        </button>
                      </div>
                      <div className="col-12">
                        <span className="type--fine-print block">
                          Already have an account?
                          <Link href="/login">
                            <a>Sign in</a>
                          </Link>
                        </span>
                        <span className="type--fine-print">
                          By signing up, you agree to the
                          <Link href="/terms-of-service">
                            <a>Terms of Service</a>
                          </Link>
                        </span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default withAuth(Signup)
