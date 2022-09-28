import PropTypes from 'prop-types';

import { Transactions } from './transaction';


export const TransactionHistory = ({ items }) => {
    return (
        <table className="transaction-history">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(({ id, type, amount, currency }) => {
                    <Transactions
                        key={id}
                        type={type}
                        amoune={amount}
                        currency={currency} />
                })}
                   
            </tbody>
        </table>
    )
};

TransactionHistory.PropTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape
    )({
        id:PropTypes.string.isRequired,
    }).isRequired,
}