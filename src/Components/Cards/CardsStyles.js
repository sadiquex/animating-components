import styled from "styled-components";

export const Container = styled.div`
border: 2px solid red;
padding: 10px;
`

export const OriginalCard = styled.div`
`

export const Card1 = styled(OriginalCard)`
position: relative;
width: 320px;
padding: 40px;
background: #fff;
overflow: hidden;
box-shadow: 5px 10px 20px rgba(0,0,0,0.2);
border-radius: 10px;

&:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: calc(-100% + 5px);
    width: 100%;
    height: 100%;
    background: #ff56ac;
    transition: .3s;
    z-index: 1;
}

&:hover:before {
    bottom: 0;
}
.content {
    position: relative;
    text-transform: capitalize;
    z-index: 2;
    transition: .5s;
    color: #777;
    a {
        text-decoration: none;
        display: inline-block;
        color: #777;
        background: #fff;
        padding: 10px 20px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1) ;
    }
}
&:hover .content {
    color: #fff;
}

`