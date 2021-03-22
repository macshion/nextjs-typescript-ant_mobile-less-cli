// eslint-disable-next-line no-use-before-define
import React from 'react'
import styled from 'styled-components'

const FooterStyle = styled.div`
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 20px 0 15px;
    height: 130px;

    background: #180804;
    background-size: 100% 105px;

    font-size: 9px;
    line-height: 14px;
    color: #ccc;
    .tit {
        font-size: 14px;
        margin-bottom: 12px;
    }
    span,
    a {
        color: rgba(255, 255, 255, 0.7) !important;
    }
    .right p {
        margin-top: 5px;
        text-align: center;
    }
    .wechat {
        width: 40px;
        height: 40px;
    }
`

export default function Footer(): React.ReactElement {
    return (
        <FooterStyle>
            <div className="left">
                <div className="tit">XXXXX 版权所有</div>
                <div>
                    <p>客服热线：000-00000000</p>
                    <p>公司地址： 北京市XXXXX</p>
                    <p>邮箱投递： XXXX@example.com</p>
                    <p>
                        <a
                            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010102004469"
                            style={{ marginRight: 8 }}
                        >
                            京公网安备XXXXXXXXX号
                        </a>
                        <a href="https://beian.miit.gov.cn">京ICP备XXXXXX号</a>
                    </p>
                </div>
            </div>
            <div className="right">
                <img src="/assets/wechat.jpg" className="wechat" />
                <p>关注微信</p>
            </div>
        </FooterStyle>
    )
}
