import React, { useState } from 'react'
import Logo from './Logo'
import styled from 'styled-components';
import { Flex, Popover, WingBlank } from 'antd-mobile';
import { AiOutlineMenu } from "react-icons/ai";

const Item = Popover.Item;
const NavBar = styled.div`
    padding: 0.5rem;
    line-height: 1.35rem;
    .menu_icon{
        text-align: right;
        color: #333;
        font-size: 1rem;
    }
`

export default function TopNav({ clickCallback }):React.ReactElement {
    const [visible, setVisible] = useState<boolean>(false)
    const handleVisibleChange = (): void => {
        // 展开主导航项
    }
    const onSelect = (): void => {
        // 点击导航项
    }
    return (
        <WingBlank>
            <NavBar>
            <Flex justify='end'>
                <Flex.Item>
                        <Logo/>
                </Flex.Item>
                    <Flex.Item>
                        <Popover
                            visible={visible}
                            overlay={[
                            (<Item key="4" data-seed="logId">Scan</Item>)
                            ]}
                            onVisibleChange={handleVisibleChange}
                            onSelect={onSelect}
                        >
                            <div className='menu_icon'>
                                <AiOutlineMenu/>
                            </div>
                        </Popover>
                </Flex.Item>
            </Flex>
            </NavBar>
        </WingBlank>
    )
}