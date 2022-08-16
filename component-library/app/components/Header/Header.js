import React from 'react';
import PropTypes from 'prop-types';
import {useTranslation} from 'react-i18next';
import Logo from 'Assets/img/logo.png';
// import Search from 'SVG/search.svg';
import Nav from 'Components/Nav';
import NavigationDrawer from 'Components/NavigationDrawer';
import s from './Header.module.scss';

const Header = ({main, service}) => {
    const {t} = useTranslation();

    const mainItems = main?.items || [];

    const mainMenu = {
        ...main,
        items: [
            ...mainItems,
            // {
            //     title: (
            //         <Fragment>
            //             <Search />
            //             <span className="sr-only">{t('header.search')}</span>
            //         </Fragment>
            //     ),
            //     id: 'main-search',
            //     url: '/search',
            //     modifier: 'Search',
            // },
        ],
    };

    return (
        <header className={s.Root}>
            <div className={s.ServiceBg}>
                <div className={s.Wrap}>
                    <div className={s.Service}>
                        <Nav
                            {...service}
                            label={t('header.serviceMenu')}
                            orientation="Horizontal"
                            modifier="Service"
                        />
                    </div>
                </div>
            </div>

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
    service: PropTypes.object,
};

Header.defaultProps = {
    main: {},
    service: {},
};

export default Header;
