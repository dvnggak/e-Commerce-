import { Search } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {mobile} from '../responsive'

const Container = styled.div`
    height: 60px;
    ${mobile({ height: "50px"})};
` 

const Wrapper = styled.div`
    padding: 10px 20px ;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px;"})};
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none"})};
`

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    ${mobile({ marginLeft: "10px", marginRight: "20px"})};
`

const Input = styled.input`
    border: none;
    ${mobile({ width: "80px"})};
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: 800;
    ${mobile({ fontSize: "15px"})};
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: "2", justifyContent: "center"})};
`

const MenuItem = styled.div`
    font-size: 14;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "10px", marginLeft: "10px"})};
`

export default function Navbar() {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder='Search' />
                        <Search style={{color:"gray", fontSize:16}} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>
                        Dev Tech.
                    </Logo>
                </Center>
                <Right>
                    <MenuItem>
                        Sign-in
                    </MenuItem>
                    <MenuItem>
                        Log-in
                    </MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlinedIcon color="action" />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>   
        </Container>
    )
}
