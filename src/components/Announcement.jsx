import { styled } from '@mui/material';

const Container = styled.div`
    height: 30px;
    backgorund-color: teal;
    color: white;
`

export default function Announcement() {
    return (
        <Container>
            Super Deal! Free Shipping on Orders Over $50
        </Container>
    )
}
