import React from 'react'
import Layout from '../components/Layout'
import Static from '../components/index/Static'
import Main from '../components/index/Main'
import withAuth from '../components/withAuth'

class Index extends React.Component {
  render() {
    const { user } = this.props
    console.log(user)
    return (
      <Layout {...this.props}>
        {user ? <Main /> : <Static />}
      </Layout>
    )
  }
}
export default withAuth(Index)