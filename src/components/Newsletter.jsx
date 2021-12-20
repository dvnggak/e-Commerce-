import React from 'react'
import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send';

const Container = styled.div`

`
const Title = styled.h1`

`
const Desc = styled.div`

`
const InputContainer = styled.div`

`
const Input = styled.input`

`
const Button = styled.button`

`

export default function Newsletter() {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Desc>Get timely updates from our best products.</Desc>
            <InputContainer>
                <Input placeholder='Your E-mail ...'/>
                <Button>
                   <SendIcon/> 
                </Button>
            </InputContainer>
        </Container>
    )
}
