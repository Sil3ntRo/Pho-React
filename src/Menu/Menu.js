import React from 'react'
import styled from 'styled-components'
import {foods} from '../Data/MenuData'
import {Food, MenuGrid, FoodLabel} from "./MenuGrid";


const MenuWrapper = styled.div`
    height: 1000px
    margin: 0px 400px 50px 20px;
    
`

export function Menu({setFoodOpen}) {
    return (
        <MenuWrapper>
            {Object.entries(foods).map(([sectionName, foods]) => (
                <>
                <h1>{sectionName}</h1>
                <MenuGrid>
                {foods.map(food => (
                    <Food
                        img={food.img}
                        onClick={() => {
                            setFoodOpen(food);
                    }}>
                        <FoodLabel>{food.name}</FoodLabel>
                    </Food>
                ))}
                </MenuGrid>
                </>
            ))}
    </MenuWrapper>
    );
}