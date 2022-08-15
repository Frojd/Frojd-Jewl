import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ls from 'local-storage';
import { VelocityComponent } from 'velocity-react';
import Richtext from 'Components/Richtext';
import s from './Popup.module.scss';

const Popup = ({ title, text, buttonText }) => {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        if (ls.get('cookiePopupDismissed')) return;
        setVisible(true);
    }, []);

    const onDismiss = (e) => {
        e.preventDefault();

        ls.set('cookiePopupDismissed', true);
        setVisible(false);
    };

    return (
        <div className={s.Root}>
            <VelocityComponent animation={visible ? 'slideDown' : 'slideUp'}>
                <div className={s.Content}>
                    <h2 className={s.Title}>{title}</h2>
                    <div className={s.RichText}>
                        <Richtext text={text} />
                    </div>
                    <a
                        className={s.Button}
                        href="/cookie-accept"
                        onClick={onDismiss}>
                        {buttonText}
                    </a>
                </div>
            </VelocityComponent>
        </div>
    );
};

Popup.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
};

Popup.defaultProps = {
    title: '',
    text: '',
    buttonText: '',
};

export default Popup;
