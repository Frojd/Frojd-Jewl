import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ls from 'local-storage';
import { AnimateUpDown } from 'Components/Animate';
import Richtext from 'Components/Richtext';
import s from './Popup.module.scss';

const Popup = ({ title = '', text = '', buttonText = '' }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (ls.get('cookiePopupDismissed')) return;
        setIsVisible(true);
    }, []);

    const onDismiss = (e) => {
        e.preventDefault();

        ls.set('cookiePopupDismissed', true);
        setIsVisible(false);
    };

    return (
        <div className={s.Root}>
            <AnimateUpDown isVisible={isVisible}>
                <div className={s.Content}>
                    <h2 className={s.Title}>{title}</h2>
                    <div className={s.RichText}>
                        <Richtext text={text} />
                    </div>
                    <a
                        className={s.Button}
                        href="/cookie-accept"
                        onClick={onDismiss}
                    >
                        {buttonText}
                    </a>
                </div>
            </AnimateUpDown>
        </div>
    );
};

Popup.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
};

export default Popup;
