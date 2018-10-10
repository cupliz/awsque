import { Fragment } from 'react'
import Link from 'next/link'
import getConfig from 'next/config'
// const { publicRuntimeConfig = {} } = getConfig() || {}
// const { ASSETS_PREFIX } = publicRuntimeConfig

const Nav = ({ user }) => (
  <div className='nav-container'>
    <div>
      <nav id='menu1' className='bar bar-1 hidden-xs'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-1 col-sm-2 hidden-xs'>
              <div className='bar__module'>
                <Link href='/'>
                  <a>
                    <img
                      className='logo logo-dark'
                      alt='logo'
                      src={'static/img/logo-dark.png'}
                    />
                    <img
                      className='logo logo-light'
                      alt='logo'
                      src={'static/img/logo-light.png'}
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className='col-md-11 col-sm-12 text-right text-left-xs text-left-sm'>
              {
                user &&
                <Fragment>
                  <div className='bar__module'>
                    <ul className='menu-horizontal text-left'>
                      <li>
                        <a href='#'>Browse Campaigns</a>
                      </li>
                      <li>
                        <a href='#'>Portfolio</a>
                      </li>
                      <li>
                        <a href='#'>My Company</a>
                      </li>
                    </ul>
                  </div>
                  <div className='bar__module'>
                    <ul className='menu-horizontal'>
                      <li>
                        <img alt='avatar' className='avatar image--xxs' src={'static/img/placeholder-avatar.png'} />
                    Konrad Adrian
                      </li>
                    </ul>
                  </div>
                </Fragment>
              }
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
)

export default Nav
