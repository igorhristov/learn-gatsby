import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to='/images'>Images Examples</Link> <br />
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/about">About page</Link> <br />
    <Link to="/archive">ARCHIVE</Link> <br />
    <Link to="/company/team">Go to Team</Link><br />
    <Link to="/info/contact">Go INFO CONTACT</Link><br />
    <Link to="/info/filesInfo">FILES INFO</Link><br />
   
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
