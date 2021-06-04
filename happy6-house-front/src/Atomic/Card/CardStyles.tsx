import styled from "styled-components";

export default {
    Container: styled.div`  
        position:relative;
        overflow:hidden;
        z-index:1;
        box-sizing:border-box;
        padding:8px;
        border-radius: 10px;
        box-shadow: 0 3px 6px rgba(0,0,0,0.1), 0 3px 6px rgba(0,0,0,0.1);
        background: #fff;
        transition : box-shadow 0.5s;
        color:#4e5968;
        &:hover {
            box-shadow: 0 14px 28px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.1);
        }
    `,
    

}