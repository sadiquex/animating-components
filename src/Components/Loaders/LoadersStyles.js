import styled from "styled-components";

export const Container = styled.div`
display: flex;
/* flex-direction: column; */
align-items: center;
flex-wrap: wrap;
border: 2px solid red;
background: #264653;
/* height: 600px; */
gap: 100px;
padding: 40px ;

`

export const Loader1 = styled.div`
width: 400px;
height: 200px;
background: #262626;
display: flex;
align-items: flex-end;
justify-content: center;
padding: 20px;

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
export const Loader2 = styled.div`

.line {
    width: 300px;
    border-bottom: 4px solid #fff;
    position: relative;
    animation: animateLine 2s linear infinite;
}
.hexagon {
    position: absolute;
    left: 0;
    bottom: 14px;
    width: 50px;
    height: 30px;
    background: #fff;
    animation: animateHexagon 2s linear infinite;

    &:before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: #fff;
        transform: rotate(60deg);
    }
    &::after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: #fff;
        transform: rotate(-60deg);
    }
}

@keyframes animateHexagon {
    0% {left: 0}
    /* to prevent it from going beyond the line, we subtract 100% from the total width */
    50% {left: calc(100% - 50px);
        // we want the hexagon to rotate using cycles, 1 cycle is 360d egrees
        transform: rotate(720deg);
    }
    100% {left: 0}
}

@keyframes animateLine {
    0% {transform: rotate(30deg)}
        25%{transform: rotate(0deg);}
        50%{transform: rotate(-30deg)}
        75%{transform: rotate(0deg)}
        100%{transform: rotate(30deg)}
}

`

export const Loader3 = styled.div`
.loader {
    width: 200px;
    height: 200px;
    position:relative;

}
.outer {
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;

border-left: 5px solid #eb4d4b;
border-right: 5px solid #eb4d4b;
border-top: 5px solid transparent;
border-bottom: 5px solid transparent;

border-radius: 50%;

animation: rotate 1s linear infinite ;


}
.middle {
position: absolute;
top: 30px;
left: 30px;
right: 30px;
bottom: 30px;

border-left: 5px solid #218c74;
border-right: 5px solid #218c74;
border-top: 5px solid transparent;
border-bottom: 5px solid transparent;

border-radius: 50%;

animation: rotating 1s linear infinite reverse;
}

.inner {
    position: absolute;
top: 60px;
left: 60px;
right: 60px;
bottom: 60px;

border-left: 5px solid #ccae62;
border-right: 5px solid #ccae62;
border-top: 5px solid transparent;
border-bottom: 5px solid transparent;
border-radius: 50%;

animation: rotating 1s linear infinite;

}

.dot {
    position: absolute;
    top: 90px;
    left: 90px;
    right: 90px;
    bottom: 90px;
    background: #fff;
    border-radius: 50%;
}

@keyframes rotating {
    0% {transform: rotate(0deg)}
    100% {transform: rotate(360deg)}
    
}
/* reverse */
@keyframes reverserotating {
    0% {transform: rotate(0deg)}
    100% {transform: rotate(-360deg)}
    
}

`
