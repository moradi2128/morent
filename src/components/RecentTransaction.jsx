
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import CardWrapper from '../containers/Layout/CardWrapper'
import RecentTransactionItem from './RecentTransactionItem'

const RecentTransaction = () => {
    return (
        <CardWrapper title="معامله اخیر" leftItem={
            <LinkAll href="/">نمایش همه</LinkAll>
        }>
            <Ul>
                <RecentTransactionItem />
                <RecentTransactionItem />
                <RecentTransactionItem />
                <RecentTransactionItem />
            </Ul>

        </CardWrapper>
    )
}

export default RecentTransaction

const LinkAll = styled(Link)`
font-weight: 500;
font-size: 12px;
color:${props => props.theme.text.primary};
`
const Ul = styled.ul`

li:not(:last-child) {
    border-bottom: 1px solid rgba(195, 212, 233, 0.4);
}
`