import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import {useTranslation} from 'react-i18next';
import Logo from 'Assets/img/logo.svg';
import {AnimateInOut} from 'Components/Animate';
import Nav from 'Components/Nav';
import SearchBar from 'Components/SearchBar';
import NavigationDrawer from 'Components/NavigationDrawer';
import SkipToContent from 'Components/SkipToContent';
import s from './Header.module.scss';

const Header = ({main, service}) => {
    const {t} = useTranslation();

    const [isSearchVisible, setIsSearchVisible] = useState(false);

    const mainItems = main?.items || [];
    const serviceItems = service?.items || [];

    const mainMenu = {
        ...main,
        items: [
            ...mainItems,
        ],
    };
    const serviceMenu = {
        ...service,
        items: [
            ...serviceItems,
        ]
    };
    const serviceMenuWithSearch = {
        ...service,
        items: [
            {
                title: (
                    <Fragment>
                        <SearchBar />
                    </Fragment>
                ),
                id: 'main-search',
                url: '#',
                modifier: 'Search',
            },
            ...serviceItems,
        ]
    };

    return (
        <header className={s.Root}>
            <div className={s.SkipToContent}>
                <SkipToContent
                    skipTo="main-content"
                    title={t('header.skipToContent')}
                />
            </div>
            <div className={s.Service}>
                <div className={s.Wrap}>
                    <div className={s.Search}>
                        <button
                            className={s.SearchButton}
                            type="button"
                            aria-controls="header-search"
                            aria-expanded={isSearchVisible}
                            onClick={() => setIsSearchVisible(!isSearchVisible)}
                        >{t('header.search')}</button>
                        <AnimateInOut
                            className={s.SearchBar}
                            isVisible={isSearchVisible}
                            id="header-search"
                            aria-hidden={!isSearchVisible}
                        >
                            <SearchBar
                                id="header-search-input"
                                modifier="Header"
                                triggerFocus={isSearchVisible}
                            />
                        </AnimateInOut>
                    </div>
                    <div className={s.ServiceMenu}>
                        <Nav
                            {...serviceMenu}
                            label={t('header.serviceMenu')}
                            orientation="Horizontal"
                            modifier="Service"
                            id="service-menu-desktop"
                        />
                    </div>
                </div>
            </div>

            <div className={s.Main}>
                <div className={s.Wrap}>
                    <a className={s.LogoLink} href="/">
                        <img
                            className={s.Logo}
                            src={Logo.src}
                            alt={t('header.toStartPage')}
                            width={Logo.width}
                            height={Logo.height}
                        />
                    </a>

                    <div className={s.MainMenu}>
                        <Nav
                            {...mainMenu}
                            label={t('header.mainMenu')}
                            orientation="Horizontal"
                            modifier="Main"
                            id="main-menu-desktop"
                        />
                    </div>

                    <div className={s.NavigationDrawer}>
                        <NavigationDrawer>
                            <Nav
                                {...mainMenu}
                                label={t('header.mobileMenu')}
                                orientation="Vertical"
                                modifier="MobileMain"
                                id="main-menu-mobile"
                            />
                            <Nav
                                {...serviceMenu}
                                label={t('header.serviceMenu')}
                                orientation="Vertical"
                                modifier="MobileService"
                                id="service-menu-mobile"
                            />
                        </NavigationDrawer>
                    </div>
                </div>
            </div>
        </header>
    );
};

Header.propTypes = {
    main: PropTypes.object,
    service: PropTypes.object,
};

Header.defaultProps = {
    main: {},
    service: {},
};

export default Header;
