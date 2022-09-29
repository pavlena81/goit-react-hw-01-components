import PropTypes from 'prop-types';

import { Transaction } from './transaction';
import { Table, THead, TBorder, TH, TBody } from './transactionsHistory.styled';


export const TransactionHistory = ({ items }) => {
    return (
        <Table>
            <THead>
                <TBorder>
                    <TH>Type</TH>
                    <TH>Amount</TH>
                    <TH>Currency</TH>
                </TBorder>
            </THead>

            <TBody>
                
                {items.map(({ id, type, amount, currency }) => {
                    return(
                    <Transaction
                        key={id}
                        type={type}
                        amount={amount}
                        currency={currency}
                    />)
                })}
                   
            </TBody>
        </Table>
    )
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
        id:PropTypes.string.isRequired,
    }).isRequired,
)}