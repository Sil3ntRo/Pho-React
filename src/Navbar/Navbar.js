import React from 'react'
import styled from 'styled-components'
import {leafyGreen} from "../Styles/colors";
import {Title} from '../Styles/title'

export const NavbarWrapper = styled.div`
    background-color: ${leafyGreen};
    padding: 10px;
    position: fixed;
    width: 100%;
`

const LogoWrapper = styled(Title)`
    font-size: 24px;
    color: black;
    text-shadow: 1px 1px 4px #380502;

`

export function Navbar() {
    return <NavbarWrapper>
        <LogoWrapper>
            Pho-React 🍜
        </LogoWrapper>
    </NavbarWrapper>;
}