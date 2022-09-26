import styled from 'styled-components';

export const Container = styled.section`
 display:flex;
 align-item:center;

 width: 400px;
 margin: 0 auto;

 padding: 20px;

 background-color:#f5f4fa;

 border-radius: 4px;
 box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
             rgba(0, 0, 0, 0.23) 0px 6px 6px;
`
 
export const Title = styled.h2`
 
 align-item:center;
 padding:10px;

`;

export const List = styled.ul`    
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 16px;
  list-style: none;
  margin: 0;
`;

export const ItemList = styled.li`
display: flex;
flex-direction: column; 
font-size:16px;
`