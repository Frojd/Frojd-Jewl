import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {useTranslation} from 'react-i18next';
import _ from 'lodash';
import Logo from 'Assets/img/logo.png';
import Search from 'SVG/search.svg';
import Nav from 'Components/Nav';
import NavigationDrawer from 'Components/NavigationDrawer';
import s from './Header.module.scss';

const Header = ({main}) => {
    const {t} = useTranslation();

    const mainMenuItems = _.get({...main}, 'items', []);

    const mainMenu = {
        ...main,
        items: [
            ...mainMenuItems,
            {
                title: (
                    <Fragment>
                        <Search />
                        <span className="sr-only">{t('header.search')}</span>
                    </Fragment>
                ),
                id: 'main-search',
                url: '/search',
                modifier: 'Search',
            },
        ],
    };

    return (
        <header className={s.Root}>
            <div className={s.Wrap}>
                <a className={s.LogoLink} href="/">
                    <img
                        className={s.Logo}
                        src={Logo}
                        alt={t('header.toStartPage')}
                        width="98"
                        height="40"
                    />
                </a>

                <div className={s.Menu}>
                    <Nav
                        {...mainMenu}
                        label={t('header.mainMenu')}
                        orientation="Horizontal"
                        modifier="Main"
                    />
                </div>

                <div className={s.NavigationDrawer}>
                    <NavigationDrawer>
                        <Nav
                            {...mainMenu}
                            label={t('header.mobileMenu')}
                            orientation="Vertical"
                            modifier="Mobile"
                        />
                    </NavigationDrawer>
                </div>
            </div>
        </header>
    );
};

Header.propTypes = {
    main: PropTypes.object,
};

Header.defaultProps = {
    main: {},
};

export default Header;
