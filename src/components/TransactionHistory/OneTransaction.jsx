import { Td } from './TransactionHistory.styled';
import PropTypes from 'prop-types';

export const OneTransaction = items => {
  const { type, amount, currency } = items;
  return (
    <tr>
      <Td>{type}</Td>
      <Td>{amount}</Td>
      <Td>{currency}</Td>
    </tr>
  );
};

OneTransaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
