import React from 'react';
import styled from 'styled-components';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';

const Container = styled.div`
    width: 100%;
    height: 100vh;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fafafa;
    border-radius: 50%;
    
`

export default function Slider() {
    return (
        <Container>
            <Arrow>
                <ArrowLeftOutlinedIcon/>
            </Arrow>
            <Arrow>
                <ArrowRightOutlinedIcon/>
            </Arrow>
        </Container>            
    )
}
