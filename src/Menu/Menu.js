import React from 'react'
import styled from 'styled-components'
import {foods} from '../Data/MenuData'
import {Food, MenuGrid, FoodLabel} from "./MenuGrid";


const MenuWrapper = styled.div`
    height: 1000px
    margin: 0px 400px 50px 20px;
    
`

export function Menu() {
    return <MenuWrapper>
        <h1>Menu</h1>
        <MenuGrid>
        {foods.map(food => (
            <Food img={food.img}>
                <FoodLabel>
                {food.name}
                </FoodLabel>
                </Food>
        ))}
        </MenuGrid>
    </MenuWrapper>;
}