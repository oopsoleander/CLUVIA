import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const AnimatedStats = ({ label, value }) => {
    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {value}
            </motion.h1>
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
            >
                {label}
            </motion.span>
        </div>
    );
};

AnimatedStats.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
};

export default AnimatedStats;
