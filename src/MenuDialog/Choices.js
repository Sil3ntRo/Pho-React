import React from 'react'
import styled from 'styled-components'

const ChoicesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`

const ChoicesCheckbox = styled.input`
    margin-right: 10px;
    cursor: pointer;
`

const CheckboxLabel = styled.label`
    cursor: pointer;
`

export function Choices({choices, checkChoices}) {
    return (
        <ChoicesGrid>
            {choices.map((choice, i) => (
                <CheckboxLabel>
                <ChoicesCheckbox type="checkbox"
                                 checked={choice.checked}
                                 onClick={() => {
                                     checkChoices(i);
                                 }} />
                {choice.name}
            </CheckboxLabel>))}
        </ChoicesGrid>
    );
}