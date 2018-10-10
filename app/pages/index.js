import React from 'react'
import Layout from '../components/Layout'
import Static from '../components/index/Static'

// export default withAuth(({ user }) =>
//   <Layout user={user}>
//     {
//       user ? <Main /> : <Static />
//     }
//     <script defer src='https://use.fontawesome.com/releases/v5.3.1/js/all.js' integrity='sha384-kW+oWsYx3YpxvjtZjFXqazFpA7UP/MbiY4jvs+RWZo2+N94PFZ36T6TFkc9O3qoB' crossOrigin='anonymous' />
//   </Layout>
// )

class Index extends React.Component {
  render(){
    return (
      <Layout>
        <Static />
      </Layout>
    )
  }
}
export default Index