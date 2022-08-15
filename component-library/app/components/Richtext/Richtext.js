import React from 'react';
import PropTypes from 'prop-types';
import s from './Richtext.module.scss';

const Richtext = ({ text }) => (
    <div className={s.Root} dangerouslySetInnerHTML={{ __html: text }} />
);

Richtext.propTypes = {
    text: PropTypes.string,
};

Richtext.defaultProps = {
    text: '',
};

export default Richtext;
