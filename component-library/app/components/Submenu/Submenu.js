import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useTranslation} from 'react-i18next';
import classNames from 'classnames';
import { VelocityComponent } from 'velocity-react';
import Nav from 'Components/Nav';
import s from './Submenu.module.scss';

const Submenu = ({id, nav}) => {
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
                onClick={() => setIsExpanded(!isExpanded)}
                aria-expanded={isExpanded}
                aria-controls={id}
            >
                <span className={s.Hamburger} />
                {t('submenu.showMenu')}
                <span className={s.Arrow} />
            </button>
            <VelocityComponent
                animation={isExpanded ? 'slideDown' : 'slideUp'}
            >
                <div
                    className={s.Nav}
                    aria-hidden={!isExpanded}
                    id={id}
                >
                    <Nav
                        {...nav}
                        label={t('submenu.label')}
                        orientation="Vertical"
                        modifier="Submenu"
                    />
                </div>
            </VelocityComponent>
        </div>
    );
};

Submenu.propTypes = {
    id: PropTypes.string.isRequired,
    nav: PropTypes.object.isRequired,
};

Submenu.defaultProps = {
    id: '',
    nav: {},
};

export default Submenu;
