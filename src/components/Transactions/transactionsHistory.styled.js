import styled from "styled-components";

export const Table= styled.table`
 width: 70%;
 margin: 0 auto;

 text-align: center;
 
 box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
             rgba(0, 0, 0, 0.23) 0px 6px 6px;
`
export const THead = styled.thead`
background-color: rgba(0, 0, 255, 0.6);
color: #ffffff;
text-transform: uppercase;

 
`

export const TBorder = styled.tr`
height: 40px;
color: #fffff;
 
`
export const TH = styled.th`
padding: 10px;
border: 1px solid rgba(0, 0, 255, 0.2);
`

export const TBody = styled.tbody`
    border-collapse: collapse;
    font-size: 20px;
    
`
export const TrList = styled.tr`
padding:10px;

background-color: rgba(0, 0, 140, 0.2);
 &:nth-child(2n){
       background-color:rgba(0, 0, 240, 0.2);
     }     
`

export const TdItems = styled.td`
 font-size: 16px;
`