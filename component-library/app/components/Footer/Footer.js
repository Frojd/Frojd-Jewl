import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import Follow from 'Components/Follow';
import Image from 'Components/Image';
import Nav from 'Components/Nav';
import Logo from 'Assets/img/logo--white.svg';
import Pin from 'SVG/pin.svg';
import Mail from 'SVG/mail.svg';
import Phone from 'SVG/phone.svg';
import s from './Footer.module.scss';

const Footer = ({
    follow = {},
    primary = {},
    secondary = {},
    tertiary = {},
    service = {},
}) => {
    const { t } = useTranslation();

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
                                useLazyLoad={false}
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
                        className={s.Service}
                        id="footer-service"
                        label={t('footer.service')}
                        modifier="Footer"
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
    const icons = {
        Address: Pin,
        Phone: Phone,
        Email: Mail,
    };

    const navItems = items.map(({ icon, title, ...item }) => {
        const Icon = icons[icon];
        return {
            ...item,
            modifier: Icon ? 'HasIcon' : null,
            title: (
                <>
                    {Icon && <Icon className={s.NavIcon} />}
                    <span dangerouslySetInnerHTML={{ __html: title }} />
                </>
            ),
        };
    });

    return (
        <div className={s.Column}>
            <h2 className={s.Title}>{title}</h2>
            <Nav
                className={s.Nav}
                id={id}
                label={label}
                items={navItems}
                orientation="Vertical"
                modifier="Footer"
            />
        </div>
    );
};

NavColumn.propTypes = {
    title: PropTypes.string,
    items: PropTypes.array,
};

export default Footer;
