import styled from "styled-components";

export const Container = styled.div`
border: 2px solid red;`

export const OriginalLooader = styled.ul`


`
export const Loader1 = styled(OriginalLooader)`
width: 400px;
height: 200px;
background: #262626;
display: flex;
align-items: flex-end;
justify-content: center;

ul {
    display: flex;
    border-bottom: 10px solid #fff;
}
li {
    list-style: none;
    width: 30px;
    height: 30px;
    background: #fff;
    margin: 0 10px;
    border-radius: 50%;
    animation: jumping .8s linear infinite 
}

@keyframes jumping {
    0% {transform: translateY(0)}
    50% {transform: translateY(-150px)}
    100% {transform: translateY(0)}
}

// animating each child element to start at a different time
ul li:nth-child(1) {
    animation-delay: .45s
}
ul li:nth-child(2) {
    animation-delay: .6s
}
ul li:nth-child(3) {
    animation-delay: .3s
}
ul li:nth-child(4) {
    animation-delay: 0s
}
ul li:nth-child(5) {
    animation-delay: .15s
}

`