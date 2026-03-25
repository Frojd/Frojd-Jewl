import React from 'react';
import PropTypes from 'prop-types';
import Richtext from '../Richtext';
import s from './ContentEmphasis.module.scss';

const ContentEmphasis = ({ title, richtext }) => {
    return (
        <div className={s.Root}>
            <h4 className={s.Title}>{title}</h4>
            <Richtext text={richtext} />
        </div>
    );
};

ContentEmphasis.propTypes = {
    title: PropTypes.string.isRequired,
    richtext: PropTypes.string.isRequired,
};

export default ContentEmphasis;
