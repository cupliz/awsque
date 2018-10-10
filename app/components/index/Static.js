import Link from 'next/link'
// import getConfig from 'next/config'
// const { publicRuntimeConfig } = getConfig()
// const { ASSETS_PREFIX } = publicRuntimeConfig

const Static = () => (
  <div className='main-container'>
    <section className='cover imagebg image--light text-center height-auto'>
      <div className='bg-cover' />
      <div className='container pos-vertical-center'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='typed-headline'>
              <span className='h1 inline-block'>Crowd funding for assets</span>
              <span
                className='h1 inline-block typed-text typed-text--cursor color--primary'
                data-typed-strings='real estate,private equity,loans'
              />
            </div>
            <p className='lead'>
                Open Equity Asia gives everyone the opportunity to invest
              <br className='hidden-xs hidden-sm' /> and support the ideas they
                love
            </p>
            <Link href='/signup'>
              <a className='btn btn--primary' href='#'>
                <span className='btn__text'>Sign Up Now</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
    <section className='text-center bg--secondary section-title'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-10 col-md-8'>
            <h2>Benefits of Tokenization</h2>
            <p className='lead'>
              {' '}
                Tokenization is the process of digitising rights to an asset into
                a digital token on a blockchain.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className='text-center bg--secondary'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-4'>
            <div className='feature'>
              <img
                alt='Image'
                src={'static/img/icon-wallet.png'}
                className='border--round'
                style={{ height: 100 }}
              />
              <h4>Access Liquidity</h4>
              <p>
                  Tokenized private investments can be listed on exchanges, and
                  transacted in seconds instead of weeks
              </p>
            </div>
          </div>
          <div className='col-sm-4'>
            <div className='feature'>
              <img
                alt='Image'
                src={'static/img/icon-globe.png'}
                className='border--round'
                style={{ height: 100 }}
              />
              <h4>Lower Overhead</h4>
              <p>
                  The investment process, and asset administration throughout the
                  entire life of the security, become more cost and time efficient
              </p>
            </div>
          </div>
          <div className='col-sm-4'>
            <div className='feature'>
              <img
                alt='Image'
                src={'static/img/icon-documents.png'}
                className='border--round'
                style={{ height: 100 }}
              />
              <h4>Global Scale</h4>
              <p>Secondary market</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='text-center'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-10 col-md-8'>
            <h2>
                a building block for <br />
                crypto-securities compliance
            </h2>
            <p className='lead'> asd </p>
          </div>
        </div>
      </div>
    </section>
    <section className='switchable'>
      <div className='container'>
        <div className='row justify-content-between'>
          <div className='col-md-6 col-lg-5'>
            <h2>Startups / Fund Managers</h2>
            <ol className='process-3'>
              <li className='process_item'>
                <div className='process__number'>
                  <span>1</span>
                </div>
                <div className='process__body'>
                  <h4>Create your campaign</h4>
                  <p>
                      Stack is built with customization and ease-of-use at its
                      core — whether you're a seasoned developer or just starting
                      out.
                  </p>
                </div>
              </li>
              <li className='process_item'>
                <div className='process__number'>
                  <span>2</span>
                </div>
                <div className='process__body'>
                  <h4>Build with interface blocks</h4>
                  <p>
                      Select from over 290 interface blocks, customise the look to
                      build your perfect page.
                  </p>
                </div>
              </li>
              <li className='process_item'>
                <div className='process__number'>
                  <span>3</span>
                </div>
                <div className='process__body'>
                  <h4>Export as pure HTML</h4>
                  <p>
                      Download your page as a semantic HTML document and easily
                      make further customisations and additions in your editor.
                  </p>
                </div>
              </li>
            </ol>
          </div>
          <div className='col-md-6 col-lg-5'>
            <h2>Investors</h2>
            <ol className='process-3'>
              <li className='process_item'>
                <div className='process__number'>
                  <span>1</span>
                </div>
                <div className='process__body'>
                  <h4>Review Opportunities</h4>
                  <p>
                      Gain access to a list of startup opportunities, properties
                      and business loans applications
                  </p>
                </div>
              </li>
              <li className='process_item'>
                <div className='process__number'>
                  <span>2</span>
                </div>
                <div className='process__body'>
                  <h4>Invest </h4>
                  <p>Invest in your selected opportunities</p>
                </div>
              </li>
              <li className='process_item'>
                <div className='process__number'>
                  <span>3</span>
                </div>
                <div className='process__body'>
                  <h4>Trade</h4>
                  <p>
                      Buy and sell existing opportunities on the secondary market
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
        {/* end of row */}
      </div>
      {/* end of container */}
    </section>
    <section className='text-center bg--secondary'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-10 col-md-8'>
            <h2>Real World Example: Real Estate</h2>
          </div>
        </div>
      </div>
    </section>
    <section className='bg--secondary'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-6'>
            <div className='feature'>
              <img
                alt='Image'
                src={'static/img/primary_transaction.gif'}
                className='border--round'
              />
            </div>
          </div>
          <div className='col-sm-6'>
            <div className='feature'>
              <img
                alt='Image'
                src={'static/img/secondary_market.jpg'}
                className='border--round'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className=' '>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4'>
            <div className='text-block'>
              <h4>Frequently Asked Questions</h4>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='text-block'>
              <h5>How do refunds work?</h5>
              <p>
                  Open a<a href='#'>refund request</a> with us and we can work
                  with you to resolve it ASAP.
              </p>
            </div>
            <div className='text-block'>
              <h5>Can I pay using AMEX?</h5>
              <p>
                  Yes, we accept all major credit cards, including AMEX, so rack
                  up those points!
              </p>
            </div>
            <div className='text-block'>
              <h5>Is there a bulk-buy discount?</h5>
              <p>
                  We have corporate and enterprise arrangements that our pricing
                  team can assist with on a case-by-case basis.
                <a href='#'>Contact Us</a> for info.
              </p>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='text-block'>
              <h5>Is there a minimum contract term?</h5>
              <p>
                  No! The beauty of our service is that you can cancel anytime you
                  need to — no questions asked.
              </p>
            </div>
            <div className='text-block'>
              <h5>Do I need an SSL certificate?</h5>
              <p>
                  This depends on whether your plan to process the payment on your
                  site or not. We recommend using a third-party provider to
                  unburden yourself.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='text-center imagebg' data-gradient-bg='#3b4255,#101a37'>
      <div className='container'>
        <div className='row mb-4 justify-content-center'>
          <h2>Get the latest updates from Open Equity Asia</h2>
        </div>
        <form
          className='row justify-content-center form--active'
          data-success='Thanks for signing up.  Please check your inbox for a confirmation email.'
          data-error='Please provide your email address and agree to the terms.'
        >
          <div className='col-lg-6 col-md-8'>
            <input
              className='validate-required validate-email'
              type='text'
              name='EMAIL'
              placeholder='Enter your email to stay updated'
            />
          </div>
          <div className='col-lg-2 col-md-4'>
            <button type='submit' className='btn btn--primary'>
                Subscribe Now
            </button>
          </div>
          <div
            style={{ position: 'absolute', left: '-5000px' }}
            aria-hidden='true'
          >
            <input
              type='text'
              name='b_77142ece814d3cff52058a51f_f300c9cce8'
              tabIndex={-1}
              defaultValue
            />
          </div>
        </form>
      </div>
    </section>
    <footer className='footer text-center-xs space--xs '>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <span>
                ©<span className='update-year'>2018</span> Open Equity Asia
            </span>
            <a className='type--fine-print' href='#'>
                Privacy Policy
            </a>
          </div>
          <div className='col-md-6 text-right text-center-xs'>
            <ul className='social-list list-inline list--hover'>
              <li className='list-inline-item'>
                <a href='#'>
                  <i className='fab fa-twitter icon icon--xs' />
                </a>
              </li>
              <li className='list-inline-item'>
                <a href='#'>
                  <i className='fab fa-medium icon icon--xs' />
                </a>
              </li>
              <li className='list-inline-item'>
                <a href='#'>
                  <i className='fab fa-linkedin icon icon--xs' />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
)

export default Static
