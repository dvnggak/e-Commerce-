import React from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'

const Container = styled.div`
    padding: 20px;
    display: flex;
`

export default function Products() {
    return (
        <Container>
            {popularProducts.map(item => (
                <Products item={item} key={item.id} />
            ))}
        </Container>
    )
}
