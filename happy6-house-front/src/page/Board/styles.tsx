import styled from "styled-components";

export default {
  Grid: styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    @media only screen and (max-width: 500px){
      grid-template-columns: 1fr;      
    }
    @media only screen and (min-width: 1024px){
      grid-template-columns: 1fr 1fr 1fr 1fr;      
    }
  `,
  Header : styled.div`
      padding:15px;
      color:#4e5968;
  `
}
