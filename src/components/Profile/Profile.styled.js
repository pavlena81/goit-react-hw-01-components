import styled from 'styled-components';

export const Card = styled.div`
 width: 400px;
 display: flex;
 flex-direction:column;
 margin: 0 auto;
 margin-bottom: 50px;

 align-items: center;
 padding: 20px;

 background-color:#f5f4fa;

 border-radius: 4px;
 box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
             rgba(0, 0, 0, 0.23) 0px 6px 6px;

`

export const Descript = styled.div`
display:flex;
flex-direction:column;
gap: 15px;
margin-bottom: 20px;
`
export const AvatarImg = styled.img`
width: 80%;
margin:0 auto;
margin-bottom: 20px;

border-radius: 50%;
box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
             rgba(0, 0, 0, 0.23) 0px 6px 6px;


`

export const UserDescription = styled.p`

text-align:center;
font-weight: bold;
`
export const UserLabel = styled.p`
text-align:center;

`

export const ListStats = styled.ul`
display: flex;

gap: 80px;
list-style: none;
`
export const ItemStats = styled.li`
display: flex;
flex-direction:column;
 
`