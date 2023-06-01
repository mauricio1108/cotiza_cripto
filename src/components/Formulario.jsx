import styled from "@emotion/styled";
import React from "react";
import useSelectMonedas from "../hooks/useSelectMonedas";

const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 30px;
    &:hover {
        background-color: #7A7DFE;
        cursor: pointer;
    }
`


const Formulario  =()=> {
  
 /*  cosnt [ SelectMonedas ] = useSelectMonedas(); */
 /*  SelectMonedass() */
    
 return(
    
      <form>
        <SelectMonedas/>
        <InputSubmit type= "submit" value =" cotizar"/>
      </form>
    
 )
}

export	default  Formulario