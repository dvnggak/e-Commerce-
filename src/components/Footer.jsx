import React from 'react'
import styled from 'styled-components'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import EmailIcon from '@mui/icons-material/Email';
import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column"})};
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`

`

const Desc = styled.p`
    margin: 20px 0px;
`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=> props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none"})};
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom:10px;
`

const Right = styled.div`
    flex: 1;   
    padding: 20px; 
    ${mobile({ backgroundColor: "#fff8f8"})};
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 50%;

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
                    <SocialIcon color='BD2A6E'>
                        <InstagramIcon/>
                    </SocialIcon>
                    <SocialIcon color='1C9CEA '>
                        <TwitterIcon/>
                    </SocialIcon>
                    <SocialIcon color='000000'>
                        <GitHubIcon/>
                    </SocialIcon>
                    <SocialIcon color='0A66C2'>
                        <LinkedInIcon/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms & Conditions</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <LocationOnIcon style={{marginRight:"15px"}}/>
                    Wisma Asri Residence, Kalidoni District, Palembang City, South Sumatra, Indonesia.
                </ContactItem>
                <ContactItem>
                    <ContactPhoneIcon style={{marginRight:"15px"}}/>
                    +62 813 6815 1152 / +62 852 6843 2581
                </ContactItem>
                <ContactItem>
                    <EmailIcon style={{marginRight:"15px"}}/>
                    devanggakertawijaya@gmail.com / devanggakertawijaya@outlook.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
            </Right>
        </Container>
    )
}
