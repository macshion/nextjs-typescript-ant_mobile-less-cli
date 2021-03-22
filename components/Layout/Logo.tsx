import React from 'react'
import Link from 'next/link'
import styled from 'styled-components';

const LogoLink = styled.div`
color:#fff;
.logo {
        margin-bottom: 1px;
        width: 150px;
        height: 32px;
    }
`

export default function Logo(): React.ReactElement{
    return <LogoLink>
        <Link href='/'>
            XXXXXXXX
             {/* <img src="/assets/nav.svg" className="logo" alt="logo" /> */}
        </Link>
    </LogoLink>
}
