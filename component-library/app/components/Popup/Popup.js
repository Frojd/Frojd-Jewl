import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import ls from 'local-storage';
import { AnimateUpDown } from '../Animate';
import Button from '../Button';
import Richtext from '../Richtext';
import s from './Popup.module.scss';

const Popup = ({
    title = '',
    id = 'popup',
    sessionName = 'popup-closed',
    buttonText = '',
    richtext = '',
}) => {
    const { t } = useTranslation();

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (ls.get(sessionName)) return;
        setIsVisible(true);
    }, [sessionName]);

    const onDismiss = (e) => {
        e.preventDefault();

        ls.set(sessionName, true);
        setIsVisible(false);
    };

    const button = buttonText || t('popup.close');

    return (
        <div className={s.Root}>
            <AnimateUpDown
                isVisible={isVisible}
                id={id}
                aria-hidden={!isVisible}
            >
                <div className={s.Content}>
                    <h2 className={s.Title}>{title}</h2>
                    <div className={s.RichText}>
                        <Richtext text={richtext} />
                    </div>
                    <Button
                        className={s.Button}
                        href="/cookie-accept"
                        onClick={(e) => onDismiss(e)}
                        aria-controls={id}
                        aria-expanded={isVisible}
                    >
                        {button}
                    </Button>
                </div>
            </AnimateUpDown>
        </div>
    );
};

Popup.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    sessionName: PropTypes.string.isRequired,
    buttonText: PropTypes.string,
    richtext: PropTypes.string,
};

export default Popup;
