import React from 'react'
import styled from 'styled-components'
import {leafyGreen} from "../Styles/colors";
import {Title} from '../Styles/title'

export const NavbarWrapper = styled.div`
    background-color: ${leafyGreen};
    padding: 10px;
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const LogoWrapper = styled(Title)`
    font-size: 24px;
    color: black;
    text-shadow: 1px 1px 4px #380502;

`

const UserStatus = styled.div`
    color: white;
    font-size: 12px;
    margin-right: 30px;

`;

const LoginButton = styled.span`
    cursor: pointer;
    

`

export function Navbar({login, loggedIn}) {
    return (
        <NavbarWrapper>
            <LogoWrapper>
                Pho-React <span role="img" aria-label="noodle bowl">🍜</span>
            </LogoWrapper>
            <UserStatus>
                {loggedIn === 'loading' ? 'Logged in.' :
                <LoginButton onClick={login}>Login / Sign up</LoginButton>}
            </UserStatus>
        </NavbarWrapper>
    );
}