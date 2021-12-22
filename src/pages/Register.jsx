import React from 'react'
import styled from 'styled-components'

const Container = styled.div`

`

export default function Register() {
    return (
        <Container>
            <Wrapper>
                <Title>Create New Account </Title>
                <Form>
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                    <Input placeholder="Username" />
                    <Input placeholder="E-mail" />
                    <Input placeholder="Password" />
                    <Input placeholder="Confirm Password" />
                    <Agreement>
                        By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>Create</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}
