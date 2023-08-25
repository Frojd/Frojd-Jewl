import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import s from './SkipToContent.module.scss';

const SkipToContent = ({ mainId, title }) => {
    const classes = classNames(s.Root, 'skip-to-content');

    return (
        <a href={`#${mainId}`} className={classes} tabIndex="0">
            {title}
        </a>
    );
};

SkipToContent.propTypes = {
    mainId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

SkipToContent.defaultProps = {
    mainId: 'main',
    title: 'Skip to content',
};

export default SkipToContent;
