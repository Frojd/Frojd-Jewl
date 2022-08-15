import React from 'react';
import PropTypes from 'prop-types';
import s from './Richtext.module.scss';

const Richtext = ({ html }) => (
    <div className={s.Root} dangerouslySetInnerHTML={{ __html: html }} />
);

Richtext.propTypes = {
    html: PropTypes.string,
};

Richtext.defaultProps = {
    html: '',
};

export default Richtext;
