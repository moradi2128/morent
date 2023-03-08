import { Skeleton } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const CardSkeleton = () => {
    return (
        <Wrapper >
            <Row>
                <div>
                    <Skeleton variant="text" width={80} height={30} sx={{ fontSize: '1rem' }} />
                    <Skeleton variant="text" width={40} height={15} sx={{ fontSize: '1rem' }} />
                </div>
                <Skeleton variant="circular" width={30} height={30} />
            </Row>
            {/* For other variants, adjust the size with `width` and `height` */}
            <Skeleton variant="rounded" width="100%" height={150} sx={{ margin: "20px 0" }} />
            <Row>
                {
                    [1, 2, 3].map((item) => {
                        return <Skeleton key={item} variant="text" width={70} height={40} />
                    })
                }
            </Row>
            <Row>
                <Skeleton variant="text" width="45%" height={60} />
                <Skeleton variant="text" width="45%" height={60} />
            </Row>
        </Wrapper>
    )
}

export default CardSkeleton
const Wrapper = styled.div`
max-width: 500px;
min-width: 250px;
min-height:425px;
width: 100%;
background-color: ${p => p.theme.bgWhite};
padding:24px;
border-radius: 10px;
`
const Row = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 100%;
`