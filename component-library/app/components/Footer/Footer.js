import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import Follow from 'Components/Follow';
import Image from 'Components/Image';
import Nav from 'Components/Nav';
import Logo from 'Assets/img/logo--white.svg';
import s from './Footer.module.scss';

const Footer = ({
    follow = {},
    primary = {},
    secondary = {},
    tertiary = {},
    service = {},
}) => {
    const { t } = useTranslation();

    const logoSizes = ['(min-width: 768px) 129px', '112px'];

    const serviceItems = service?.items || [];
    const serviceMenu = {
        ...service,
        items: [...serviceItems],
    };

    return (
        <div className={s.Root}>
            <div className={s.Wrap}>
                <div className={s.Columns}>
                    <div className={s.Column}>
                        <a className={s.LogoLink} href="/">
                            <Image
                                {...Logo}
                                useCover={false}
                                useCaption={false}
                                useLazyLoad={false}
                                sizes={logoSizes}
                                alt={t('footer.toStartPage')}
                            />
                        </a>

                        <div className={s.Follow}>
                            <Follow {...follow} />
                        </div>
                    </div>

                    <NavColumn
                        {...primary}
                        id="footer-primary"
                        label={t('footer.primary')}
                    />
                    <NavColumn
                        {...secondary}
                        id="footer-secondary"
                        label={t('footer.secondary')}
                    />
                    <NavColumn
                        {...tertiary}
                        id="footer-tertiary"
                        label={t('footer.tertiary')}
                    />
                </div>
                <div className={s.Footer}>
                    <h2 className="sr-only">{serviceMenu?.title}</h2>
                    <Nav
                        {...serviceMenu}
                        className={s.NavService}
                        id="footer-service"
                        label={t('footer.service')}
                        listClassName={s.NavServiceList}
                        itemClassName={s.NavServiceItem}
                        linkClassName={s.NavServiceLink}
                    />
                </div>
            </div>
        </div>
    );
};

Footer.propTypes = {
    follow: PropTypes.object,
    primary: PropTypes.object,
    secondary: PropTypes.object,
    tertiary: PropTypes.object,
    service: PropTypes.object,
};

const NavColumn = ({ title = '', items = [], id = '', label = '' }) => {
    return (
        <div className={s.Column}>
            <h2 className={s.Title}>{title}</h2>
            <Nav
                className={s.Nav}
                id={id}
                label={label}
                items={items}
                orientation="Vertical"
                listClassName={s.NavList}
                itemClassName={s.NavItem}
                linkClassName={s.NavLink}
            />
        </div>
    );
};

NavColumn.propTypes = {
    title: PropTypes.string,
    items: PropTypes.array,
};

export default Footer;
