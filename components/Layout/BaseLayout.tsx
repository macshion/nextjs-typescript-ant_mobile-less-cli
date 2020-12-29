import { withRouter } from 'next/router'
import Head from 'next/head'
import TopNav from './TopNav'

type propType = {
    router: any
    children: any
    title: string
    keywords: string
    description: string
}

export default withRouter(({ router, children, title, keywords, description }:propType) => (
  <div>
    <Head>
            <title>{title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    </Head>
    <TopNav clickCallback={()=>router.push('/')}></TopNav>
    {children}
  </div>
))