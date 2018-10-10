import React from "react"
import Router, { withRouter } from "next/router"
import Link from "next/link"
import Layout from "../components/Layout"

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
  confirmSignup = async e => {
    e.preventDefault()
    const { verifyCode } = this.state
    const {
      router: { query }
    } = this.props
    try {
      const result = await Auth.confirmSignUp(query.email, verifyCode, {
        forceAliasCreation: true
      })
      if(result == 'SUCCESS'){
        alert('Registration complete.')
        Router.push(`/login`)
      }else{
        this.setState({ error: JSON.stringify(result)})
      }
    } catch (error) {
      this.setState({ error: error.message})
    }
  }

  render() {
    const { user } = this.props
    const { verifyCode, error } = this.state
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
                  <form onSubmit={this.confirmSignup}>
                    <div className="row">
                      <div className="col-12">
                        <input
                          type="number"
                          name="verifyCode"
                          placeholder="888888"
                          onChange={this.handleChange}
                          value={verifyCode}
                        />
                      </div>
                      <div className="col-12">
                        <p className="color--error"> 
                          {error}

                        </p>
                      </div>
                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn btn--primary type--uppercase"
                          onClick={this.confirmSignup}
                        >
                          Verify Account
                        </button>
                      </div>
                      <div className="col-12">
                        <span className="type--fine-print block">
                          Already have an account?
                          <Link href="/login">
                            <a>Sign in</a>
                          </Link>
                        </span>
                        {/* <span className="type--fine-print">
                          By signing up, you agree to the
                          <Link href="/terms-of-service">
                            <a>Terms of Service</a>
                          </Link>
                        </span> */}
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

export default withRouter(Signup)
