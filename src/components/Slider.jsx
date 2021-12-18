import React from 'react';
import styled from 'styled-components';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
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
`

const Wrapper = styled.div`
    height: 100%;
`

const  Slide = styled.div`
    display: flex;
    align-items: center;
`
const  ImgContainer = styled.div`
    flex: 1;

`

const Img = styled.img`

`

const  InfoContainer = styled.div`
    flex: 1;
`

export default function Slider() {
    return (
        <Container>
            <Arrow direction="left" >
                <ArrowLeftOutlinedIcon/>
            </Arrow>
            <Wrapper>
                <Slide>
                    <ImgContainer>
                        <Img src='https://i.ibb.co/zSw5dCk/1.png'/>
                    </ImgContainer>
                    <InfoContainer>
                        
                    </InfoContainer>
                </Slide>
            </Wrapper>
            <Arrow direction="right" >
                <ArrowRightOutlinedIcon/>
            </Arrow>
        </Container>            
    )
}
