import styled from "styled-components";

const perfil = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
.Perfil {
    background: #000;
    height: 100%;
    width: 100vw;
    display: flex;
    align-items: center;
    overflow: hidden;
    animation: opacitor 1s;
    .Perfil__Content {
        height: auto;
        padding: 20px 0;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        .Image {
            img {
                width: 100%;
                border-radius: 50%;
                padding: 4px;
            }
        }
    }
    @keyframes opacitor {
        from {opacity: 0}
        to {opacity: 1}
    }
}
`

export default perfil;