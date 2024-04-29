import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { AnimateInOut } from 'Components/Animate';
import Icon from 'Components/Icon';
import Nav from 'Components/Nav';
import NavigationDrawer from 'Components/NavigationDrawer';
import SearchForm from 'Components/SearchForm';
import SkipToContent from 'Components/SkipToContent';
import s from './Header.module.scss';

const Header = ({ main = {}, service = {} }) => {
    const { t } = useTranslation();

    const [isSearchVisible, setIsSearchVisible] = useState(false);

    const logoSizes = ['(min-width: 768px) 129px', '112px'];

    const mainItems = main?.items || [];
    const serviceItems = service?.items || [];

    const mainMenu = {
        ...main,
        items: [...mainItems],
    };
    const serviceMenu = {
        ...service,
        items: [...serviceItems],
    };

    return (
        <header className={s.Root}>
            <div className={s.SkipToContent}>
                <SkipToContent skipTo="#main-content" />
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
                        >
                            {t('header.search')}
                            <Icon name="Search" asBg={true} />
                        </button>
                        <AnimateInOut
                            className={s.SearchForm}
                            isVisible={isSearchVisible}
                            id="header-search"
                            aria-hidden={!isSearchVisible}
                        >
                            <SearchForm
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
                            id="service-menu-desktop"
                            className={s.NavServiceMenu}
                            listClassName={s.NavServiceMenuList}
                            linkClassName={s.NavServiceMenuLink}
                            linkIconClassName={s.NavServiceMenuLinkIcon}
                        />
                    </div>
                </div>
            </div>

            <div className={s.Main}>
                <div className={s.Wrap}>
                    <a className={s.LogoLink} href="/">
                        <Icon
                            name="Logo"
                            asImg={true}
                            useCover={false}
                            useCaption={false}
                            useLazyLoad={false}
                            sizes={logoSizes}
                            alt={t('header.toStartPage')}
                        />
                    </a>

                    <div className={s.MainMenu}>
                        <Nav
                            {...mainMenu}
                            label={t('header.mainMenu')}
                            orientation="Horizontal"
                            id="main-menu-desktop"
                            className={s.NavMainMenu}
                            listClassName={s.NavMainMenuList}
                            itemActiveClassName={s['NavMainMenuItem--Active']}
                            linkClassName={s.NavMainMenuLink}
                            linkIconClassName={s.NavMainMenuLinkIcon}
                        />
                    </div>

                    <div className={s.NavigationDrawer}>
                        <NavigationDrawer>
                            <Nav
                                {...mainMenu}
                                label={t('header.mobileMenu')}
                                orientation="Vertical"
                                id="main-menu-mobile"
                                className={s.NavMobileMain}
                                listClassName={s.NavMobileMainList}
                                linkClassName={s.NavMobileMainLink}
                                linkIconClassName={s.NavMobileMainLinkIcon}
                            />
                            <Nav
                                {...serviceMenu}
                                label={t('header.serviceMenu')}
                                orientation="Vertical"
                                id="service-menu-mobile"
                                className={s.NavMobileService}
                                listClassName={s.NavMobileServiceList}
                                itemClassName={s.NavMobileServiceItem}
                                linkClassName={s.NavMobileServiceLink}
                                linkIconClassName={s.NavMobileServiceLinkIcon}
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

export default Header;
