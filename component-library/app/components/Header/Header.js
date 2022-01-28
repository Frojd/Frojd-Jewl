import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {useTranslation} from 'react-i18next';
import _ from 'lodash';
import Logo from 'assets/img/logo.png';
import Search from 'svg/search.svg';
import Nav from 'Components/Nav';
import s from './Header.module.scss';

const Header = ({main, currentId}) => {
    const {t} = useTranslation();

    const mainMenuItems = _.get({...main}, 'items', []);

    const mainMenu = {
        ...main,
        items: [
            ...mainMenuItems,
            {
                title: (
                    <>
                        <Search />
                        <span className="sr-only">{t('header.search')}</span>
                    </>
                ),
                id: 'main-search',
                url: '/search',
                modifier: 'Search',
            },
        ],
    };

    const searchClasses = classNames(
        s.Item,
        [s['Item--Search']],
    );

    return (
        <div className={s.Root}>
            <div className={s.Wrap}>
                <a className={s.LogoLink} href="/">
                    <img
                        className={s.Logo}
                        src={Logo}
                        alt="Logo example in img"
                        width="98"
                        height="40"
                    />
                </a>

                <div className={s.Menu}>
                    <Nav
                        {...mainMenu}
                        orientation="Horizontal"
                        modifier="Main"
                    />
                </div>
            </div>
        </div>
    );
};

Header.propTypes = {
    main: PropTypes.object,
};

Header.defaultProps = {
    main: {},
};

export default Header;
