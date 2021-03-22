import React from 'react'
import styled from 'styled-components'
import BaseLayout from '@/components/Layout/BaseLayout'
import MainSubTitle from '@/components/common/MainSubTitle'
import DiyButton from '@/components/common/DiyButton'
import { FLOW_TYPES } from '@/lib/data'
import { GetStaticProps } from 'next'

const Main = styled.div`
min-height:100%;
    margin-bottom: 40px;
    img {
        width: 100%;
    }
    p {
        font-size: 12px;
        line-height: 170%;
    }
    .center {
        text-align: center;
        margin: 0 auto;
    }
`

export default function Workflow(): React.ReactElement {
    const seo = {
        title: '服务流程',
        keywords: '',
        description: ''
    }
    return (
        <>
            <BaseLayout seo={seo}>
                <Main>
                    <img src="/assets/workflow/banner.jpg" />
                    <MainSubTitle
                        mainTit="我们的业务"
                        subTit="Our legal business"
                    ></MainSubTitle>
                    {FLOW_TYPES.map((item) => {
                        return (
                            <div className="center">
                                {/* <img src={`/assets/workflow/${item.key}.jpg`} /> */}
                                       <div>{item.label}</div> 
                                    <DiyButton
                                        link={`/workflow/${item.key}`}
                                        setMargin="0 0 .35rem 0"
                                    >
                                        查看详情 →
                                    </DiyButton>
                            </div>
                        )
                    })}
                </Main>
            </BaseLayout>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {}
    }
}
