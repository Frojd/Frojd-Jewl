import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { AnimateUpDown } from 'Components/Animate';
import Icon from 'Components/Icon';
import Nav from 'Components/Nav';
import s from './Submenu.module.scss';

const Submenu = ({ id = 'submenu', title = '', nav = {} }) => {
    const { t } = useTranslation();

    const [isExpanded, setIsExpanded] = useState(false);

    const classes = classNames(s.Root, { [s['Root--Expanded']]: isExpanded });

    return (
        <div className={classes}>
            <h2 className={s.Title}>{t('submenu.label')}</h2>

            <button
                className={s.Button}
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                aria-expanded={isExpanded}
                aria-controls={id}
            >
                <span className={s.Text}>
                    <span className={s.Label}>{t('submenu.label')}</span>
                    {title}
                </span>
                <Icon name="Chevron" asBg={true} />
            </button>

            <AnimateUpDown
                isVisible={isExpanded}
                className={s.List}
                aria-hidden={!isExpanded}
                id={id}
            >
                <Nav
                    {...nav}
                    id={`${id}-nav`}
                    label={t('submenu.nav')}
                    orientation="Vertical"
                    className={s.Nav}
                    listClassName={s.NavList}
                    childClassName={s.NavChild}
                    itemClassName={s.NavItem}
                    itemActiveClassName={s['NavItem--Active']}
                    toggleClassName={s.NavToggle}
                    linkClassName={s.NavLink}
                />
            </AnimateUpDown>
        </div>
    );
};

Submenu.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    nav: PropTypes.object.isRequired,
};

export default Submenu;
