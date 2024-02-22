import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { AnimateLeftRight } from 'Components/Animate';
import { useTranslation } from 'react-i18next';
import Hamburger from 'SVG/hamburger.svg';
import Close from 'SVG/close.svg';
import s from './NavigationDrawer.module.scss';

const NavigationDrawer = ({ children, open, id }) => {
    const { t } = useTranslation();

    const [isExpanded, setIsExpanded] = useState(open);

    const clickHandler = () => setIsExpanded(!isExpanded);

    const buttonId = `${id}-button`;
    const buttonLabel = isExpanded ? t('menu.button') : t('menu.closeButton');

    const classes = classNames(
        s.Root,
        { [s['Root--Closed']]: !isExpanded },
        { [s['Root--Open']]: isExpanded }
    );

    return (
        <div className={classes}>
            <button
                className={s.Button}
                type="button"
                onClick={() => clickHandler()}
                aria-expanded={isExpanded}
                aria-controls={id}
                id={buttonId}
                aria-label={buttonLabel}
            >
                <Hamburger className={s.Hamburger} />
                <Close className={s.Close} />
            </button>
            <AnimateLeftRight className={s.Navigation} isVisible={isExpanded}>
                <div
                    className={s.Content}
                    aria-hidden={!isExpanded}
                    aria-describedby={buttonId}
                    id={id}
                >
                    <div className={s.Wrap}>{children}</div>
                </div>
            </AnimateLeftRight>
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
