import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ls from 'local-storage';
import { VelocityComponent } from 'velocity-react';

import RawHtml from 'Components/RawHtml';

import './Popup.scss';

// title
// text
// animation
// ondismiss
// local storage
// get site root for accept link

const Popup = ({ title, richtext }) => {
    const [visible, setVisible] = useState(false);

    // const mountedRef = useRef(false);

    // useEffect(() => {
    //     mountedRef.current = true;
    //     return () => (mountedRef.current = false);
    // }, []);

    useEffect(() => {
        //if (ls.get('cookiePopupDismissed')) return
        setVisible(true);
    }, []);

    const onDismiss = (e) => {
        e.preventDefault();

        ls.set('cookiePopupDismissed', true);
        setVisible(false);
    };

    return (
        <div>
            <VelocityComponent animation={visible ? 'slideDown' : 'slideUp'}>
                <div className="Popup">
                    <h2>{title}</h2>
                    <div className="Popup__Text">{richtext}</div>
                    <a href="cookie-accept" onClick={onDismiss}>{`Accept`}</a>
                </div>
            </VelocityComponent>
        </div>
    );
};

Popup.propTypes = {
    title: PropTypes.string.isRequired,
    richtext: PropTypes.string.isRequired,
};

Popup.defaultProps = {
    title: '',
    richtext: '',
};

export default Popup;
