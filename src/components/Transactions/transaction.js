import PropTypes from 'prop-types';
import { TrList, TdItems } from './transactionsHistory.styled';

export const Transaction = ({type, amount, currency }) => {
    return (
                <TrList>
                    <TdItems>{type}</TdItems>
                    <TdItems>{amount}</TdItems>
                    <TdItems>{currency}</TdItems>
                </TrList>
        
    );
};

Transaction.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}