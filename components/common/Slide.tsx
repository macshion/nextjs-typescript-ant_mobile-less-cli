import { SlideType } from '@/types/slide'
import { Carousel } from 'antd-mobile'
import React from 'react'
import styled from 'styled-components'

const Main = styled.div<{ dotPosition: string }>`
    .am-carousel-wrap {
        ${(props): string => props.dotPosition};
    }
`

type propType = {
    data?: Array<SlideType>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [propName: string]: any // props属性参考 https://mobile.ant.design/components/carousel-cn/
}
class Slide extends React.Component<propType> {
    render(): React.ReactElement {
        const props = { ...this.props }
        const { data, dotPosition } = props
        delete props.data
        return (
            <Main dotPosition={dotPosition}>
                <Carousel
                    autoplay={false}
                    infinite
                    dotStyle={{ background: 'rgba(255, 255, 255, 0.5)' }}
                    dotActiveStyle={{ background: 'white' }}
                    {...props}
                >
                    {data?.map((item) => (
                        <a
                            key={item.img}
                            style={{ display: 'inline-block', width: '100%' }}
                            href={item.jumpUrl}
                        >
                            <img
                                src={`${item.img}`}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'))
                                }}
                            />
                        </a>
                    ))}
                </Carousel>
            </Main>
        )
    }
}

export default Slide
