import { GetStaticPaths, GetStaticProps } from 'next'
// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react'
import BaseLayout from '@/components/Layout/BaseLayout'
import styled from 'styled-components'
import { FLOW_DATA, FLOW_TYPES } from '@/lib/data'
import MainSubTitle from '@/components/common/MainSubTitle'
import { WorkflowDetailType } from '@/types/workflow'

const Main = styled.div`
.banner{
    width:100%;
}
`

type Props = {
    type: string
}

export default function WorkflowType({ type }: Props): React.ReactElement {
    const [data, setData] = useState<WorkflowDetailType | undefined>()
    useEffect(() => {
        const detail: WorkflowDetailType | undefined =
            FLOW_DATA.find((i) => i.type === type) || undefined
        setData(detail as WorkflowDetailType)
        setData(detail)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [type])
    const seo = {
        title: data?.seoTitle || '',
        keywords: data?.seoKeywords || '',
        description: data?.seoDescription || ''
    }
    return (
        <>
            <BaseLayout seo={seo}>
                <Main>
                    <img src="/assets/workflow/banner.jpg" className='banner'/>
                    <MainSubTitle
                        mainTit={data?.title}
                        subTit={data?.subTitle}
                        extraStyle={{ borderBottom: '1px solid #eee' }}
                    ></MainSubTitle>
                </Main>
            </BaseLayout>
        </>
    )
}

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: FLOW_TYPES.map((i) => ({
            params: { flowType: i.key }
        })),
        fallback: false
    }
}

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
    const param = params?.['flowType'] || ''
    const type = param instanceof Array ? param[0] : param

    return {
        props: {
            type
        }
    }
}
