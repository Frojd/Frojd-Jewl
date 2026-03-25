import React from 'react';
import PropTypes from 'prop-types';
import s from './ContentBlockquote.module.scss';

const ContentBlockquote = ({ text, cite }) => {
    return (
        <blockquote className={s.Root}>
            <p className={s.Text}>{text}</p>
            {cite && <cite className={s.Cite}>{cite}</cite>}
        </blockquote>
    );
};

ContentBlockquote.propTypes = {
    text: PropTypes.string.isRequired,
    cite: PropTypes.string,
};

export default ContentBlockquote;
