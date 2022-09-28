import styled from "styled-components";

export const ListFriends = styled.ul`
display: flex;
flex-direction: column;
align-items:center;

margin: 0 auto;

list-style: none;
`

export const ItemFriends = styled.li`
 display: flex;
 width: 440px; 
 margin:0 auto;

 margin-bottom: 20px;

 align-items:center;
 justify-content:center;

 border-radius: 4px;
 box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
             rgba(0, 0, 0, 0.23) 0px 6px 6px;
`

export const Status = styled.span`
padding:5px;
`

export const ImgFriends = styled.img`
margin-right:10px;

  ::before {
    content:" ";
    width:10px;
    height: 10px;
    
    border-radius:50%;
    background-color: #FF0000;
    margin-right: 10px;
    box-sizing: border-box;
}
`