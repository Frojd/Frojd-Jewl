import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import s from './Richtext.module.scss';

const Richtext = ({ text = '', className = '' }) => {
    const classes = classNames(s.Root, className);
    return (
        <div className={classes} dangerouslySetInnerHTML={{ __html: text }} />
    );
};

Richtext.propTypes = {
    text: PropTypes.string,
    className: PropTypes.string,
};

export default Richtext;
