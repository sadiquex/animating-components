import styled from "styled-components";

// export const GridDiv = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

export const NormalGrid = styled.div`
  width: 100%;
  /* height: 100vh; */
  background: #eee;

  /* grid */
  .basic-grid {
    display: grid;
    gap: 10px;
    /* minmax: dont go below 240px but allow to expand as big as 1fr */
    /* autofit tells grid to calculate all rows and columns */
    /* auto-fit expands children to take all available space  */
    /* auto-fill creates extra columns to fill the space */
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    /* card styles */
    .card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: #353535;
      font-size: 3rem;
      color: #fff;
      box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem,
        rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;
      height: 100%;
      width: 100%;
      border-radius: 4px;
      transition: all 500ms;
      overflow: hidden;

      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }

    .card:hover {
      box-shadow: rgba(2, 8, 20, 0.1) 0px 0.35em 1.175em,
        rgba(2, 8, 20, 0.08) 0px 0.175em 0.5em;
      transform: translateY(-3px) scale(1.1);
    }
  }
`;

/* !!!!!!!!!!!!!!!!! */
/* photo-grid */
export const PhotoGrid = styled.div`
  width: 100%;
  background: #eee;

  /* photo grid */
  .photo-grid {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    grid-auto-rows: 240px;

    /* card */
    /* card styles */
    .card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: #353535;
      font-size: 3rem;
      color: #fff;
      box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem,
        rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;
      height: 100%;
      width: 100%;
      border-radius: 4px;
      transition: all 500ms;
      overflow: hidden;

      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }

    .card:hover {
      box-shadow: rgba(2, 8, 20, 0.1) 0px 0.35em 1.175em,
        rgba(2, 8, 20, 0.08) 0px 0.175em 0.5em;
      transform: translateY(-3px) scale(1.1);
    }

    /* do not apply if screen size is less than 600px */
    @media screen and (min-width: 600px) {
      .card-tall {
        grid-row: span 2 / auto;
      }
      .card-wide {
        grid-column: span 2 / auto;
      }
      .fourth {
        grid-column: span 2 / auto;
        grid-row: span 2 / auto;
      }
    }
  }
`;

// !!!!!!!!!!!!
// animated layout
export const AnimatedGrid = styled.div`
  .animated-grid {
    height: 85vh;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media screen and (min-width: 600px) {
      display: grid;
      gap: 1rem;

      /* explicit grid */
      grid-template-areas:
        "a b c d"
        "k 0 0 e"
        "l 0 0 f"
        "j i h g";

      grid-auto-rows: 240px;

      grid-template-rows: repeat(4, 25%);
      /* grid-template-columns: 240px auto auto 240px; */
      grid-template-columns: repeat(4, minmax(240px, 1fr));
    }
  }

  .card:nth-child(1) {
    grid-area: a;
  }

  /* cards */
  .card {
    background-color: rgb(36, 243, 147);
    animation: cardEntrance 700ms ease-out;
    animation-fill-mode: backwards;
  }

  /* animation */
  @keyframes cardEntrance {
    from {
      opacity: 0;
      transform: scale(0.3);
      filter: hue-rotate(180deg);
    }
    to {
      opacity: 1;
      transform: scale(1);
      filter: hue-rotate(0deg);
    }
  }

  .card:nth-child(1) {
    grid-area: a;
    animation-delay: calc(1 * var(--stagger-delay));
  }
  .card:nth-child(2) {
    grid-area: b;
    animation-delay: calc(2 * var(--stagger-delay));
  }
  .card:nth-child(3) {
    grid-area: c;
    animation-delay: calc(3 * var(--stagger-delay));
  }
  .card:nth-child(4) {
    grid-area: d;
    animation-delay: calc(4 * var(--stagger-delay));
  }
  .card:nth-child(5) {
    grid-area: e;
    animation-delay: calc(5 * var(--stagger-delay));
  }
  .card:nth-child(6) {
    grid-area: f;
    animation-delay: calc(6 * var(--stagger-delay));
  }
  .card:nth-child(7) {
    grid-area: g;
    animation-delay: calc(7 * var(--stagger-delay));
  }
  .card:nth-child(8) {
    grid-area: h;
    animation-delay: calc(8 * var(--stagger-delay));
  }
  .card:nth-child(9) {
    grid-area: i;
    animation-delay: calc(9 * var(--stagger-delay));
  }
  .card:nth-child(10) {
    grid-area: j;
    animation-delay: calc(10 * var(--stagger-delay));
  }
  .card:nth-child(11) {
    grid-area: k;
    animation-delay: calc(11 * var(--stagger-delay));
  }
  .card:nth-child(12) {
    grid-area: l;
    animation-delay: calc(12 * var(--stagger-delay));
  }
`;
