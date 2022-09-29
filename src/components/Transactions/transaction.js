import PropTypes from 'prop-types';
import { TH } from './transactionsHistory.styled';

export const Transaction = ({type, amount, currency }) => {
    return (
                <tr>
                    <TH>{type}</TH>
                    <TH>{amount}</TH>
                    <TH>{currency}</TH>
                </tr>
        
    );
};

Transaction.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}