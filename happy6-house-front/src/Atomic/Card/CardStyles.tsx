import styled from "styled-components";

export default {
    Container: styled.div`  
        position:relative;
        margin: 1rem;
        overflow:hidden;
        height:300px;
        z-index:1;
        box-sizing:border-box;
        padding:20px 20px;
        border-radius: 10px;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        background: #fff;
        transition : box-shadow 0.5s;
        color:#4e5968;
        &:hover {
            box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        }
    `
    }