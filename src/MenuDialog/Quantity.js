import React from 'react'
import styled from 'styled-components'
import {Title} from "../Styles/title";
import {leafyGreen} from "../Styles/colors";

const QuantityWrapper = styled.input`
    font-size: 18px;
    width: 24px;
    text-align: center;
    border: none;
    outline: none;
`;

const IncrementWrapper = styled(Title)`
    display: flex;
    height: 24px;

`



const IncrementButton = styled.div`
  width: 23px;
  color: ${leafyGreen};
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  line-height: 23px;
  margin: 0px 10px;
  border: 1px solid ${leafyGreen};
  ${({ disabled }) =>
    disabled &&
    `opacity: 0.5; 
     pointer-events: none; 
     `}
  &:hover {
    background-color: #1f4f20;
  }
`

export function Quantity({quantity}) {
    return (
        <IncrementWrapper>
            <div>Quantity: </div>
            <IncrementButton onClick={() => {
                quantity.setValue(quantity.value - 1);
            }} disabled={quantity.value === 1}> - </IncrementButton>
            <QuantityWrapper {...quantity}/>
            <IncrementButton onClick={() => {
                quantity.setValue(quantity.value + 1);
            }}> + </IncrementButton>
        </IncrementWrapper>
    );
}
