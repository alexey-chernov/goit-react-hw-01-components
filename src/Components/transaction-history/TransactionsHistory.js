import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionsHistory.module.css';

const TransactionHistory = ({ items }) => (
    <table className={styles.transaction_history}>
        <thead>
            <tr>
                <th className={styles.title}>Type</th>
                <th className={styles.title}>Amount</th>
                <th className={styles.title}>Currency</th>
            </tr>
        </thead>
        <tbody>
            {items.map(item => (
                <tr key={item.id} className={styles.titleItem}>
                    <td className={styles.titleItem_text}>{item.type}</td>
                    <td className={styles.titleItem_text}>{item.amount}</td>
                    <td className={styles.titleItem_text}>{item.currency}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }),
    ).isRequired,
};

export default TransactionHistory;
