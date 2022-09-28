import styled from 'styled-components';

export const Container = styled.section`
 display:flex;
 flex-direction:column;
 align-items:center;
 
 width: 440px;
 margin: 0 auto;
 margin-bottom: 50px;

 background-color:#f5f4fa;

 border-radius: 4px;
 box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
             rgba(0, 0, 0, 0.23) 0px 6px 6px;
`
 
export const Title = styled.h2`
 
 align-items:center;
 text-align: center;
 padding:10px;
 margin: 10px;
`

export const List = styled.ul`    
  display: inline-flex;
  
  justify-content: center;
  list-style: none;
  margin: 0;
`

export const ItemList = styled.li`
display: flex;
flex-direction: column; 

padding:16px;
font-size:20px;
`
export const CellItem = styled.span`

`