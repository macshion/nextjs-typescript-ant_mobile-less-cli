// eslint-disable-next-line no-use-before-define
import React, { useEffect } from 'react'
import Footer from './Footer'
import Head from 'next/head'
import { PropsWithChildren } from 'react'
import styled from 'styled-components'
import TopNav from './TopNav'

const PageStyle = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;
    width: 100%;
    min-height: 100vh;
    background: #fafafb;
    overflow-x: hidden;
    overflow-y: auto;
`
const Content = styled.div`
    flex: 1;
    min-height:50vh;
`

type PropsType = {
    title?: string
    seo?: SEO
}

type SEO = {
    id?: string
    title: string
    keywords: string
    description: string
}

const BaseLayout = ({ children, seo }: PropsWithChildren<PropsType>): React.ReactElement => {
    return (
        <PageStyle>
            <Head>
                <title>{seo?.title || ''}</title>
                <meta name="keywords" content={seo?.keywords || ''} />
                <meta name="description" content={seo?.description || ''} />
            </Head>
            <TopNav menu={[]} />
            <Content>{children}</Content>
            <Footer />
        </PageStyle>
    )
}
export default BaseLayout
