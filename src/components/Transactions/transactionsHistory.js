import PropTypes from 'prop-types';

import { Transaction } from './transaction';
import { Table, THead, TBorder } from './transactionsHistory.styled';


export const TransactionHistory = ({ items }) => {
    return (
        <Table>
            <THead>
                <TBorder>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </TBorder>
            </THead>

            <tbody>
                
                {items.map(({ id, type, amount, currency }) => {
                    return(
                    <Transaction
                        key={id}
                        type={type}
                        amount={amount}
                        currency={currency}
                    />)
                })}
                   
            </tbody>
        </Table>
    )
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
        id:PropTypes.string.isRequired,
    }).isRequired,
)}