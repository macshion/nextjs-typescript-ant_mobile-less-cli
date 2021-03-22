// import { request } from '@/lib/request'
import { Popover } from 'antd-mobile'
import Router from 'next/router'
import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import styled, { createGlobalStyle } from 'styled-components'
import Logo from './Logo'
// import { NAVIGATION } from '@/lib/api'

const GlobalStyle = createGlobalStyle`

`
const NavBar = styled.div`
    flex: 0 0 auto;
    position: fixed;
    top: 0;
    right: 0;
    background-color: #180804;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 15px;
    height: 44px;
    width: 100%;
    line-height: 24px;
    z-index: 100;
    .menu_icon {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 10px;
        width: 38px;
        height: 44px;
        color: #fff;
        font-size: 20px;
    }
`
const MenuItemStyle = styled.a`
    display: flex;
    justify-content: left;
    align-items: center;
    margin-top: 1px;
    margin-left: 30px;
    margin-right: 30px;
    width: 110px;
    height: 54px;
    background: #ffffff;
    border-bottom: 0.5px solid #efefef;
    font-size: 14px;
    line-height: 22px;
    color: #333333;
    white-space: nowrap;
    &:first-child {
        margin-top: 0;
    }
    &:last-child {
        box-sizing: content-box;
        padding-bottom: 20px;
    }
`
type Props = {
    menu: TopNavigatorType[] | undefined
}

type TopNavigatorType = {
    title: string
    jumpUrl: string
    nid: string
}

export default function TopNav(props: Props): React.ReactElement {
    // const { menu } = props
    const menu = [{
        title: "服务流程",
        jumpUrl: '/workflow',
        nid: '364764684'
    },
    {
        title: "XXXXXX",
        jumpUrl: '/workflow/page1/',
        nid: '364764684'
    }]
    const [visible, setVisible] = useState<boolean>(false)

    const handleVisibleChange = (visible: boolean): void => {
        // 展开主导航项
        setVisible(visible)
    }
    return (
        <NavBar>
            <GlobalStyle />
            <Logo />
            {menu && menu.length > 0 && (
                <Popover
                    visible={visible}
                    mask
                    // todo: clear dom node after hide
                    overlay={menu?.map((i: TopNavigatorType) => (
                        <MenuItemStyle
                            key={i.nid}
                            onClick={(e) => {
                                e.preventDefault()
                                Router.push(`${i.jumpUrl}`)
                            }}
                        >
                            {i.title}
                        </MenuItemStyle>
                    ))}
                    onVisibleChange={handleVisibleChange}
                >
                    <div className="menu_icon">
                        <AiOutlineMenu />
                    </div>
                </Popover>
            )}
        </NavBar>
    )
}

// export async function getServerSideProps(): Promise<{ props: Props }>  {
//   const topMenu = await request.get(NAVIGATION)
//   return {
//     props: {
//       data: data.data
//     }
//   }
// }
