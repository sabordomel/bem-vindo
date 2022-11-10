import styled from "styled-components";

const topBarBanner = styled.div`
    .TopBarBanner {
        color: #fff;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        overflow: hidden;
        position: relative;
        width: 110vw;
        text-shadow: 2px 2px 6px #cca537;
        h3 {
            animation: letreiro 8s linear infinite;
            margin: 0;
            font-size: 12px;
            text-align: center;
            position: absolute;
            width: 100vw;
        }

        @keyframes letreiro {
            from{margin-right: -700px}
            to{margin-left: -700px}
        }
    }
`

export default topBarBanner;