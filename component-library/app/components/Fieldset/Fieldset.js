import React from 'react';
import PropTypes from 'prop-types';
import s from './Fieldset.module.scss';

const Fieldset = ({ title = '', text = '', children = '' }) => {
    return (
        <fieldset className={s.Root}>
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
    title: PropTypes.string,
    text: PropTypes.string,
    children: PropTypes.node,
};

export default Fieldset;
