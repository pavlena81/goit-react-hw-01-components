import styled from "styled-components";

function changeStatus({ isOnline }) {
return isOnline ? 'rgb(255, 0, 0)' : 'rgb(0, 255, 0)'
 }

export const ListFriends = styled.ul`
display: flex;
flex-direction: column;
align-items:center;

margin: 0 auto;

list-style: none;
 margin-bottom:50px;

`

export const ItemFriends = styled.li`
 display: flex;
 width: 440px; 
 margin:0 auto;
 padding:10px;

 margin-bottom: 20px;

 align-items:center;
 justify-content:center;

 border-radius: 4px;
 box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
             rgba(0, 0, 0, 0.23) 0px 6px 6px;
`

export const Status = styled.span`

  &:before {
    content: ".";
    color:transparent;
    width:8px;
    height:8px;
    -moz-border-radius: 50px;
    -webkit-border-radius: 50px;
    border-radius: 50px;     
    
    margin: 10px;
    padding: 0px 6px;      
    background: ${changeStatus};      
}   
`

export const ImgFriends = styled.img`
margin-right:10px;  
`