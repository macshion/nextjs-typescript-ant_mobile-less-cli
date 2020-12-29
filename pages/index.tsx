import Head from 'next/head'
import BaseLayout from '@/components/Layout/BaseLayout'
import Banner from '@/components/Index/Banner'
import { useState } from 'react'

const Index = (props) => {
  const { bannerImageList } = props
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
          </Head>
          <BaseLayout title="无讼" keywords="SEO关键词" description="SEO描述">
              <Banner data={bannerImageList}></Banner>
          </BaseLayout>
    </>
  )
}

export default Index

export const getStaticProps = async () => {
    const bannerImageList = [{src:'https://raw.githubusercontent.com/macshion/PicBed/main/images/banner%20(2)%20(1).png',name:'3333'}]
    return {
        props: {
            bannerImageList
        }
    }
}
