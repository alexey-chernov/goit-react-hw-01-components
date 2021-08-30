import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const colorPicker = () => {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);
    const backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    return backgroundColor;
};

const Statistics = ({ title, stats }) => (
    <section className={styles.statistics}>
        {title && <h2 className={styles.title}>{title}</h2>}
        <ul className={styles.statList}>
            {stats.map(({ id, label, percentage }) => (
                <li
                    key={id}
                    className={styles.statList_item}
                    style={{ backgroundColor: colorPicker() }}
                >
                    <span className={styles.statList_label}>{label}</span>
                    <span className={styles.statList_percentage}>
                        {percentage}%
                    </span>
                </li>
            ))}
        </ul>
    </section>
);

Statistics.defaultProps = {
    title: '',
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }),
    ).isRequired,
};

export default Statistics;
