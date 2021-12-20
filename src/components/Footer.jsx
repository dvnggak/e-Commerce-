import React from 'react'
import styled from 'styled-components'
import { InstagramIcon, TwitterIcon, GitHubIcon, LinkedInIcon } from '@mui/icons-material';

const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`

`

const Desc = styled.p``

const SocialContainer = styled.div``

const SocialIcon = styled.div``

const Center = styled.div`
    flex: 1;
`
const Right = styled.div`
    flex: 1;    
`

export default function Footer() {
    return (
        <Container>
            <Left>
                <Logo>Dev Tech.</Logo>
                <Desc>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, nam. Autem ab necessitatibus ducimus veniam adipisci voluptate, deleniti dolorem, quam minima vero ullam! Aut veritatis beatae, ipsum recusandae hic tempora accusantium commodi aliquid ratione optio!
                </Desc>
                <SocialContainer>
                    <SocialIcon>
                        <InstagramIcon/>
                    </SocialIcon>
                    <SocialIcon>
                        <TwitterIcon/>
                    </SocialIcon>
                    <SocialIcon>
                        <GitHubIcon/>
                    </SocialIcon>
                    <SocialIcon>
                        <LinkedInIcon/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>

            </Center>
            <Right></Right>
        </Container>
    )
}
