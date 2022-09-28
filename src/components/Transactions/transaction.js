import PropTypes from 'prop-types';

export const Transaction = ({type, amount, currency }) => {
    return (
                <tr>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                </tr>
        
    );
};

Transaction.PropTypes = {
    type: PropTypes.oneOfType([]).isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.number.isRequired,
}