import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {useTranslation} from 'react-i18next';
import Logo from 'Assets/img/logo.png';
import Nav from 'Components/Nav';
import SearchBar from 'Components/SearchBar';
import NavigationDrawer from 'Components/NavigationDrawer';
import s from './Header.module.scss';
import SkipToContent from '../SkipToContent/SkipToContent';

const Header = ({main, service}) => {
    const {t} = useTranslation();

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
                    mainId={'mainContent'}
                    title={t('Skip to main content')}
                />
            </div>
            <div className={s.ServiceBg}>
                <div className={s.Wrap}>
                    <div className={s.Service}>
                        <Nav
                            {...serviceMenu}
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
