import React from 'react'
import Nav from './Nav'
import "../static/styles/style.scss"

class Layout extends React.Component {
  render() {
    const {children, user} = this.props
    return (
      <div>
        <Nav {...this.props}/>
        {children}
      </div>
    )
  }
}

export default Layout
