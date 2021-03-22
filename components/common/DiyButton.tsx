import Link from 'next/link'
import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'

const Button = styled.div<{
    color?: string
    bgColor?: string
    width?: string
    height?: string
    border?: string
    radius?: string
}>`
    &.default-margin {
        margin: 15px 0;
    }
    display: inline-block;
    width: ${(props) => props.width || '1.6rem'};
    height: ${(props) => props.height || '.36rem'};
    line-height: ${(props) => props.height || '.36rem'};
    background-color: ${(props) => props.bgColor || '#BF0000'};
    border-radius: ${(props) => props.radius || '.18rem'};
    border: ${(props) => props.border || 'none'};
    button {
        width: 100%;
        outline: none;
        border: none;
        background: transparent;
        color: ${(props) => props.color || '#fff'};
        a {
            display: block;
            width: 100%;
            height: 100%;
            color: ${(props) => props.color || '#fff'};
        }
    }
`

type propsType = {
    setMargin?: string // eg: '0 15px'
    color?: string
    bgColor?: string
    width?: string
    height?: string
    border?: string
    link?: string
    radius?: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    extraStyle?: { [propName: string]: any }
}

export default function DiyButton({
    children,
    setMargin,
    color,
    bgColor,
    width,
    height,
    border,
    link,
    radius,
    extraStyle
}: PropsWithChildren<propsType>): React.ReactElement {
    const Margin = setMargin ? { margin: setMargin } : {}
    return (
        <Button
            className={setMargin ? '' : 'default-margin'}
            style={Margin}
            color={color}
            bgColor={bgColor}
            width={width}
            height={height}
            border={border}
            radius={radius}
        >
            <button style={extraStyle}>
                {link ? <Link href={link}>{children}</Link> : <span>{children}</span>}
            </button>
        </Button>
    )
}
