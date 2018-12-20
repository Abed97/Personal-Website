import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
        <div className="HeroGroup">
          <h1>Hi <br />visitor</h1>
          <p>Welcome to my new Website.</p>
          <p>Now go explore something great.</p>
          <Link to="/page-2/">Go to page 2</Link>
          <p></p>
          <Link to="/video">Watch the video</Link>
        </div>
    </div>
  </div>

)


export default IndexPage

