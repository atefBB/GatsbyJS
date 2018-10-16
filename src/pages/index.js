import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hello</h1>
    <p>Welcome.</p>
    <p>Build something great.</p>
    <Link to="/page-2/">Go to 2nd page!</Link>
  </Layout>
)

export default IndexPage
