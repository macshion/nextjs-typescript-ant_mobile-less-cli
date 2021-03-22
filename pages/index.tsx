import Head from 'next/head'
import BaseLayout from '@/components/Layout/BaseLayout'
import Banner from '@/components/Index/Banner'
import { GetStaticProps } from 'next'
import ImageType from '@/types/imageType'

type Prop = {
    bannerImageList: ImageType[]
}

const Index = (props:Prop):React.ReactElement => {
  const { bannerImageList } = props
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
          </Head>
          <BaseLayout>
              <Banner data={bannerImageList}></Banner>
              <div style={{ minHeight:'300px' }}>1111</div>
          </BaseLayout>
    </>
  )
}

export default Index

export const getStaticProps: GetStaticProps = async() => {
    const bannerImageList = [{ src:'/assets/temp/banner1.png',name:'3333' },{ src:'/assets/temp/banner2.png',name:'3333' }]
    return {
        props: {
            bannerImageList
        }
    }
}
