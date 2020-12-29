import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { getMockData } from '../../lib/fetchData'
import Index from '@/components/Index'

const Post = (props) => {
    const router = useRouter()
    const { id, asPath } = router.query
    const { tours } = props
  
    useEffect(() => {
        console.log(props)
    }, [])

    return <>
        {tours?.map(tour => {
            // return tour.info
            return <></>//<Index data={tour}></Index>
        })}
    </>
}

export default Post

export async function getStaticProps(context) {
    const tours = await getMockData()

    return {
        props: {
            tours
      }, // will be passed to the page component as props
    }
  }

export async function getStaticPaths() {
    const tours = await getMockData()
    return {
      paths: tours?.map((tour) => `/index/${tour.id}`) || [],
      fallback: true,
    }
  }