import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { VelocityComponent, velocityHelpers } from 'velocity-react';
import {useTranslation} from 'react-i18next';

// These must be imported globally
// import 'velocity-animate';
// import 'velocity-animate/velocity.ui';
import s from './NavigationDrawer.module.scss';

const NavigationDrawer = ({ children, open, id }) => {
    const {t} = useTranslation();

    const [expanded, setExpanded] = useState(open);

    const clickHandler = () => setExpanded(!expanded);

    const classes = classNames(
        s.Root,
        { [s.RootExpanded] : expanded }
    );

    const buttonId = `${id}-button`;
    const buttonText =  t('menu.button');
    const buttonTextClose =  t('menu.closeButton');

    const animation = {
        slideIn: velocityHelpers.registerEffect('slideIn', {
            defaultDuration: 500,
            calls: [
                [{ right: '0px' }],
            ],
        }),
        slideOut: velocityHelpers.registerEffect('slideOut', {
            defaultDuration: 500,
            calls: [
                [{ right: '-300px' }],
            ],
        }),
    };

    return (
        <div className={classes}>
            <button
                className={s.Button}
                type="button"
                onClick={clickHandler}
                aria-expanded={expanded}
                aria-controls={id}
                id={buttonId}
            >
                <span className="sr-only">{buttonText}</span>
            </button>
            <VelocityComponent
                className={s.Navigation}
                animation={expanded ? animation.slideIn : animation.slideOut}
            >
                <div
                    className={s.Content}
                    aria-hidden={!expanded}
                    aria-describedby={buttonId}
                    id={id}
                >
                    <button
                        className={s.ButtonClose}
                        type="button"
                        onClick={clickHandler}
                        aria-controls={id}
                    >
                        <span className="sr-only">{buttonTextClose}</span>
                    </button>
                    
                    {children}
                </div>
            </VelocityComponent>
        </div>
    );
};

NavigationDrawer.propTypes = {
    children: PropTypes.node.isRequired,
    open: PropTypes.bool,
    id: PropTypes.string,
};

NavigationDrawer.defaultProps = {
    children: '',
    open: false,
    id: 'navigation-drawer',
};

export default NavigationDrawer;
