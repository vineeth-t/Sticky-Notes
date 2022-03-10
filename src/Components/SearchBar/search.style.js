import styled from "styled-components";
import { ToggleButton } from "../Header/header.style";
export const Search= styled.div`
position:relative;
display:flex;
justify-content:center;
align-items:center;
background-color:var(--primary-color);
padding:0.5rem;
width:600px;
border-radius:0.5rem;
@media screen and (max-width: 600px){
     width:220px;

}
`
export const Input=styled.input`
padding:0.5rem;
border:0;
outline:none;
width:530px;
font-size:larger;
font-weight:bold;
margin-left:1rem;
color:var(--secondary-color);
background-color:var(--primary-color);
@media screen and (max-width: 600px){
    width:150px;
    margin-left:0rem;
    padding:0.5rem 0;
}

`
export const SearchButton=styled(ToggleButton)`
    position:absolute;
    left:0.5rem;
    top:0.7rem;
    color:var(--secondary-color)

`