import React from 'react'
import Router from 'next/router'
import Amplify, { Auth } from 'aws-amplify'
import AWSConfig from '../aws-config'
Amplify.configure(AWSConfig)

function withAuth(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        user: null,
        isAuthenticating: true
      }

      // this.signin = this.signin.bind(this)
      // this.signup = this.signup.bind(this)
      // this.logout = this.logout.bind(this)
      // this.verifyEmail = this.verifyEmail.bind(this)
      // this.confirmSignup = this.confirmSignup.bind(this)
    }

    componentDidMount = async () => {
      let user
      try {
        user = await Auth.currentAuthenticatedUser()
      } catch (e) {
        console.log(e)
      }
      this.setState({ user, isAuthenticating: false })
      if (user) {
        Router.push('/')
      }
    }

    signin = async (email, password) => {
      try {
        const res = await Auth.signIn(email, password)
        this.setState({ user: res })
        return res
      } catch (e) {
        console.log(e)
        throw new Error(e.message)
      }
    }

    logout = async () => {
      await Auth.signOut()
      this.setState({ user: null, isAuthenticating: false })
    }

    // signup = async (email, password) => {
    //   const res = await Auth.signUp({
    //     username: email,
    //     password: password
    //   })
    //   return res
    // }

    // confirmSignup = async (username, code) => {
    //   const res = await Auth.confirmSignUp(username, code)
    //   return res
    // }


    // verifyEmail = async (code) => {
    //   const res = await Auth.verifyCurrentUserAttributeSubmit('email', code.toString())
    //   return res
    // }

    render() {
      if (this.state.isAuthenticating) return null
      return (
        <WrappedComponent
          signup={this.signup}
          signin={this.signin}
          logout={this.logout}
          user={this.state.user}
        />
      )
    }
  }
}

export default withAuth
