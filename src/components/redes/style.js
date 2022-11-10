import styled from "styled-components";
import circle from "../../assets/circle01.png"


const redes = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
    .Redes {
        height: auto;
        padding: 40px 0;
        border-top: 1px solid rgba(0,0,0, .4);
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        width: 100vw;
        position: relative;
        background-color: transparent;
        animation: opacitor 2s ease-in-out;


        .BackgroundImageRedes {
            position: absolute;
            opacity: .5;
            height: 100vh;
            width: 100vw;

            img {
                width: 100vw;
                height: 100vh;
            }
        }
        .MainContent {
            z-index: 1;
            display: grid;
            grid-template-columns: 150px 150px;
            grid-template-rows: 150px 150px;
            justify-content: center;
            align-items: center;
            margin: auto;

            .Redes__Items {
                color: #FFF;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }
            .IconItem {
                background-image: url(${circle});
                background-position: center; /* Center the image */
                background-repeat: no-repeat; /* Do not repeat the image */
                background-size: cover;
                font-size: 45px;
                background-color: transparent;
                border-radius: 50%;
                display: flex;
                height: 100px;
                width: 100px;
                justify-content: center;
                align-items: center;
                filter: drop-shadow(0 0 10px gold);
                svg {
                    color: #fff;
                    font-size: 30px;
                    filter: drop-shadow(0 0 2px gold);
                }
            }
            small {
                color: #FFF;
                border-radius: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 18px;
                font-family: 'Lobster', cursive;
            }
        }
        
    @keyframes opacitor {
        from {opacity: 0}
        to {opacity: 1}
    }
    }
    `

export default redes;