'use client';

import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import s from './ContentButtons.module.scss';

const ContentButtons = ({ buttons = [] }) => {
    if (!buttons?.length) return null;

    return (
        <div className={s.Root}>
            {buttons.map((button, index) => (
                <Button key={index} className={s.Button} {...button} />
            ))}
        </div>
    );
};

ContentButtons.propTypes = {
    buttons: PropTypes.arrayOf(PropTypes.shape(Button.propTypes)),
};

export default ContentButtons;
