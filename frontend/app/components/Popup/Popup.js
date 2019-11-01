import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ls from 'local-storage';
import { VelocityComponent } from 'velocity-react';

import RawHtml from 'Components/RawHtml';

import s from './Popup.scss';

const Popup = ({ title, richtext, buttonText }) => {
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

    const baseUrl = window.location.origin;

    return (
        <div className={s.Root}>
            <VelocityComponent animation={visible ? 'slideDown' : 'slideUp'}>
                <div className={s.Content}>
                    <h2 className={s.Title}>{title}</h2>
                    <div className={s.RichText}>
                        <RawHtml html={richtext} />
                    </div>
                    <a
                        className={s.Button}
                        href={`${baseUrl}/cookie-accept`}
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
    richtext: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
};

Popup.defaultProps = {
    title: '',
    richtext: '',
    buttonText: '',
};

export default Popup;
