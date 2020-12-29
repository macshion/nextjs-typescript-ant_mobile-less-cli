import React from 'react'
import Link from 'next/link'
import styled from 'styled-components';

const LogoLink = styled.div`
    .ws_logo{
        width: 12.875rem;
    }
`

export default function Logo(): React.ReactElement{
    return <LogoLink>
        <Link href='/'>
            <img src='/static/images/logo.png' className="ws_logo"/>
        </Link>
    </LogoLink>
}
