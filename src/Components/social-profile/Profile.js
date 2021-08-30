import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({ name, tag, location, avatar, stats }) => (
    <div className={styles.container}>
        <div className={styles.description}>
            <img src={avatar} alt={name} className={styles.avatar} />
            <p className={styles.description_name}>{name}</p>
            <p className={styles.description_tag}>@{tag}</p>
            <p className={styles.description_location}>{location}</p>
        </div>

        <ul className={styles.stats}>
            <li className={styles.contain_block}>
                <span className={styles.stats_label}>Followers</span>
                <span className={styles.stats_quantity}>{stats.followers}</span>
            </li>
            <li className={styles.contain_block}>
                <span className={styles.stats_label}>Views</span>
                <span className={styles.stats_quantity}>{stats.views}</span>
            </li>
            <li className={styles.contain_block}>
                <span className={styles.stats_label}>Likes</span>
                <span className={styles.stats_quantity}>{stats.likes}</span>
            </li>
        </ul>
    </div>
);

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Profile;
