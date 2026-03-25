import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import s from './Fieldset.module.scss';

const Fieldset = ({ className = '', title = '', text = '', children = '' }) => {
    const classes = classNames(s.Root, className);
    return (
        <fieldset className={classes}>
            {title && <legend className={s.Title}>{title}</legend>}
            {text && (
                <div
                    className={s.Description}
                    dangerouslySetInnerHTML={{ __html: text }}
                />
            )}
            <div className={s.Field}>{children}</div>
        </fieldset>
    );
};

Fieldset.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    children: PropTypes.node,
};

export default Fieldset;
