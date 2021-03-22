// eslint-disable-next-line no-use-before-define
import React from 'react'
import styled from 'styled-components'

const TitleBox = styled.div<{ align?: string }>`
    color: #11295a;
    padding: 35px 10px 20px 10px;
    text-align: ${(props): string => props.align || 'center'};
    h3 {
        font-size: 30px;
        font-weight: 600;
        padding-bottom: 5px;
    }
    p {
        font-size: 12px;
        text-transform: uppercase;
    }
`
interface Props {
    mainTit?: string
    subTit?: string
    align?: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    extraStyle?: { [propName: string]: any }
}

export default function MainSubTitle(props: Props): React.ReactElement {
    const { mainTit, subTit, align, extraStyle } = props
    return (
        <TitleBox align={align} style={{ ...extraStyle }}>
            {mainTit && <h3 dangerouslySetInnerHTML={{ __html: mainTit }}></h3>}
            <p>{subTit}</p>
        </TitleBox>
    )
}
