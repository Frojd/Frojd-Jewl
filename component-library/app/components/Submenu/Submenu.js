import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useTranslation} from 'react-i18next';
import classNames from 'classnames';
import { AnimateUpDown } from 'Components/Animate';
import Nav from 'Components/Nav';
import s from './Submenu.module.scss';

const Submenu = ({id, title, nav}) => {
    const {t} = useTranslation();

    const [isExpanded, setIsExpanded] = useState(false);

    const classes = classNames(
        s.Root,
        {[s['Root--Expanded']]: isExpanded},
    );

    return (
        <div className={classes}>
            <button
                className={s.Button}
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                aria-expanded={isExpanded}
                aria-controls={id}
            >
                {title}
                <span className={s.Arrow} />
            </button>
            <AnimateUpDown isExpanded={isExpanded}>
                <div
                    className={s.List}
                    aria-hidden={!isExpanded}
                    id={id}
                >
                    <Nav
                        {...nav}
                        id={`${id}-nav`}
                        label={t('submenu.label')}
                        orientation="Vertical"
                        modifier="Submenu"
                    />
                </div>
            </AnimateUpDown>
        </div>
    );
};

Submenu.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    nav: PropTypes.object.isRequired,
};

Submenu.defaultProps = {
    id: 'submenu',
    title: '',
    nav: {},
};

export default Submenu;
