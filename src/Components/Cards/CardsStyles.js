import styled from "styled-components";

export const Container = styled.div`
  border: 2px solid red;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`;

export const OriginalCard = styled.div``;

export const Card1 = styled(OriginalCard)`
  position: relative;
  width: 320px;
  padding: 40px;
  background: #fff;
  overflow: hidden;
  box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: calc(-100% + 5px);
    width: 100%;
    height: 100%;
    background: #ff56ac;
    transition: 0.3s;
    z-index: 1;
  }

  &:hover:before {
    bottom: 0;
  }
  .content {
    position: relative;
    text-transform: capitalize;
    z-index: 2;
    transition: 0.5s;
    color: #777;
    a {
      text-decoration: none;
      display: inline-block;
      color: #777;
      background: #fff;
      padding: 10px 20px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
  }
  &:hover .content {
    color: #fff;
  }
`;

export const Card2 = styled.div`
  .card {
    position: relative;
    width: 320px;
    height: 350px;
    background: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);

    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 4px;
      background: #fff;
      z-index: -1;
      transition: 0.5s;
    }

    /* when hovering over the card, apply these styles to the before element */
    &:hover:before {
      transform: rotate(20deg);
      box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
    }
    /* after pseudo elelment */
    &:hover:after {
      transform: rotate(10deg);
      box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
    }
  }
  .imgbox {
    background: #222;
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    z-index: 2;
    transition: 0.5s;

    img {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      object-fit: cover;
    }
  }
  &:hover .imgbox {
    bottom: 80px;
  }
  .details {
    position: absolute;
    left: 10px;
    right: 10px;
    bottom: 10px;
    height: 60px;
    text-align: center;
  }
  h2 {
    margin: 0;
    padding: 0;
    font-weight: 600;
    font-size: 20px;
    text-transform: uppercase;
    color: #777;
  }
  h2 span {
    font-weight: 500;
    color: #f38695;
  }
`;
