import Nav from './Nav'
import "../static/styles/style.scss"

const Layout = ({ children, user }) => (
  <div>
    <Nav user={user} />
    {children}
  </div>
)

export default Layout
