import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {useTranslation} from 'react-i18next';
import s from './Header.module.scss';
import Logo from 'assets/img/logo.png';
import Search from 'svg/search.svg';

const Header = ({menu, currentId}) => {
    const {t} = useTranslation();
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
                    <nav className={s.Nav} role="navigation">
                        {menu.map((item, index) => (
                            <Item
                                key={index}
                                {...item}
                                isCurrent={item.id === currentId}
                            />
                        ))}
                        <a
                            className={searchClasses}
                            href="/search"
                        >
                            <Search />
                            <span>{t('header.search')}</span>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    );
};

Header.propTypes = {
    menu: PropTypes.array,
    currentId: PropTypes.number,
};

Header.defaultProps = {
    menu: [],
    currentId: 0,
};

const Item = ({title, url, isCurrent}) => {
    const classes = classNames(
        s.Item,
        {[s['Item--Current']] : isCurrent},
    );
    return (
        <a
            className={classes}
            href={url}
        >{title}</a>
    );
};

Item.propTypes = {
    title: PropTypes.string,
    url: PropTypes.string,
    isCurrent: PropTypes.bool,
};

Item.defaultProps = {
    title: '',
    url: '',
    isCurrent: false,
};

export default Header;
