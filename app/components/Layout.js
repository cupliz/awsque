import Nav from './Nav'
import "../static/styles/style.scss"
import Amplify from 'aws-amplify'
import AWSConfig from '../aws-config'
// import { withAuthenticator } from 'aws-amplify-react';
Amplify.configure(AWSConfig)
const Layout = ({ children, user }) => (
  <div>
    <Nav user={user} />
    {children}
  </div>
)

export default Layout
