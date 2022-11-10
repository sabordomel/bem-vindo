import styled from "styled-components";

const home = styled.div`
.Home {
    width: 100vw;
    height: auto;
    min-height: 100vh;
    background-color: #000;
    animation: backgroundAnimation 1s infinite;
    transition: 1s;
    overflow-x: hidden;
    position: relative;
    .TitleCarousel {
        h1 {
            color: #FFF;
            text-align: center;
            margin: 0;
        }
    }

}
`

export default home;