import React from 'react';
import PropTypes from 'prop-types';
import s from './RawHtml.scss';

const RawHtml = ({ html }) => (
    <div className={s.Root} dangerouslySetInnerHTML={{ __html: html }} />
);

RawHtml.propTypes = {
    html: PropTypes.string,
};

RawHtml.defaultProps = {
    html: '',
};

export default RawHtml;
