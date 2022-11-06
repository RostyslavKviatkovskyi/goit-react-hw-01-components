import { Td } from './TransactionHistory.styled';

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
