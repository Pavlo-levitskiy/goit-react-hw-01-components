import PropTypes from 'prop-types';
import { Table } from './transactionHistory.style';

const TransactionHistory = ({ items }) => {
  return (
    <Table className="transaction-history">
      <thead className="table-head">
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }, index) => {
          return (
            <tr key={id} className={index % 2 !== 0 ? 'even' : 'odd'}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    }),
  ).isRequired,
};

export default TransactionHistory;
