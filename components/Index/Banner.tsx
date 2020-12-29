import React, { useEffect, useState } from 'react'
import { Carousel } from 'antd-mobile';
import ImageType from '@/types/imageType';
import Link from 'next/link';
import  '@/static/style/Banner.module.less'

function Banner(props:{data:ImageType[]}) {
    const { data } = props
    useEffect(() => {
        console.log(data)
    }, [])
    return <>
        <Carousel
                autoplay={false}
                infinite
                beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                afterChange={index => console.log('slide to', index)}
                >
                    {data.map(val => {
                        return <div className='banner_wrap' key={val.name}>
                            <Link href='/'>
                                <img
                                src={val.src}
                                alt=""
                                onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                }}
                            />
                            </Link>
                        </div>
                })}
        </Carousel>
        <div className='banner_text'></div>
    </>
}

export default Banner

