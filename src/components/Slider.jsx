import React from 'react';
import styled from 'styled-components';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #ffffff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction ==="left" && "10px" };
    right: ${props => props.direction ==="right" && "10px" };
    cursor: pointer;
    margin: auto;
    opacity: 0.7;
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(0vw);
`

const  Slide = styled.div`
    width : 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg};
`
const  ImgContainer = styled.div`
    flex: 1;
    height: 100%;

`

const Img = styled.img`
    height: 80%;
`

const  InfoContainer = styled.div`
    margin-left -20px;
    padding: 50px;
    flex: 1;
`

const Title = styled.h1`
    font-size: 70px;
`
const Detail = styled.p`
    margin: 30px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

export default function Slider() {

    const handleClick = (direction) => {

    }

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlinedIcon/>
            </Arrow>
            <Wrapper>
                <Slide bg="f5fafd">
                    <ImgContainer>
                        <Img src='https://i.ibb.co/zSw5dCk/1.png'/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>END YEAR SALE</Title>
                        <Detail>GET IT NOW ! AND EARN 45% OFF FOR NEW ARRIVALS</Detail>
                        <Button>SHOW NOW </Button>
                    </InfoContainer>
                </Slide>
                <Slide bg="fcf1ed">
                    <ImgContainer>
                        <Img src='https://i.ibb.co/zSw5dCk/1.png'/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>NEW YEAR SALE</Title>
                        <Detail>GET IT NOW ! AND EARN 45% OFF FOR NEW ARRIVALS</Detail>
                        <Button>SHOW NOW </Button>
                    </InfoContainer>
                </Slide>
                <Slide bg="fbf0f4">
                    <ImgContainer>
                        <Img src='https://i.ibb.co/zSw5dCk/1.png'/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>BEST SALE</Title>
                        <Detail>GET IT NOW ! AND EARN 45% OFF FOR NEW ARRIVALS</Detail>
                        <Button>SHOW NOW </Button>
                    </InfoContainer>
                </Slide>
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")} >
                <ArrowRightOutlinedIcon/>
            </Arrow>
        </Container>            
    )
}
