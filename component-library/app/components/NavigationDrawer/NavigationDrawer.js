import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { AnimateLeftRight } from 'Components/Animate';
import {useTranslation} from 'react-i18next';
import s from './NavigationDrawer.module.scss';

const NavigationDrawer = ({ children, open, id }) => {
    const {t} = useTranslation();

    const [isExpanded, setIsExpanded] = useState(open);

    const clickHandler = () => setIsExpanded(!isExpanded);

    const classes = classNames(
        s.Root,
        { [s.RootExpanded] : isExpanded },
    );

    const buttonId = `${id}-button`;

    return (
        <div className={classes}>
            <button
                className={s.Button}
                type="button"
                onClick={() => clickHandler()}
                aria-expanded={isExpanded}
                aria-controls={id}
                id={buttonId}
                aria-label={t('menu.button')}
            />
            <AnimateLeftRight
                className={s.Navigation}
                isVisible={isExpanded}
            >
                <div
                    className={s.Content}
                    aria-hidden={!isExpanded}
                    aria-describedby={buttonId}
                    id={id}
                >
                    <button
                        className={s.ButtonClose}
                        type="button"
                        onClick={() => clickHandler()}
                        aria-controls={id}
                        aria-label={t('menu.closeButton')}
                    />
                    {children}
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
