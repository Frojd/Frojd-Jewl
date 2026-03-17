'use client';

import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Follow from '../Follow';
import Icon from '../Icon';
import Nav from '../Nav';
import Richtext from '../Richtext';
import s from './Footer.module.scss';

const Footer = ({ follow = {}, columns = [], service = {} }) => {
    const { t } = useTranslation();

    const logoSizes = ['(min-width: 768px) 129px', '112px'];

    const serviceItems = service?.items || [];
    const serviceMenu = {
        ...service,
        items: [...serviceItems],
    };

    console.log(columns);

    return (
        <div className={s.Root}>
            <div className={s.Wrap}>
                <div className={s.Columns}>
                    <div className={s.Column}>
                        <a className={s.LogoLink} href="/">
                            <Icon
                                name="LogoWhite"
                                asImg={true}
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

                    {columns.map((column, index) => (
                        <NavColumn {...column} key={index} index={index} />
                    ))}
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
    columns: PropTypes.array,
    service: PropTypes.object,
};

const NavColumn = ({ index = 0, title = '', items = [], richtext = '' }) => {
    const id = `footer-nav-${index}`;
    console.log('col', index, title, items, richtext);
    return (
        <div className={s.Column}>
            <h2 className={s.Title}>{title}</h2>
            {richtext && <Richtext {...richtext} className={s.Richtext} />}
            {items && (
                <Nav
                    className={s.Nav}
                    id={id}
                    label={title}
                    items={items}
                    orientation="Vertical"
                    listClassName={s.NavList}
                    itemClassName={s.NavItem}
                    linkClassName={s.NavLink}
                />
            )}
        </div>
    );
};

NavColumn.propTypes = {
    index: PropTypes.number,
    title: PropTypes.string,
    items: PropTypes.array,
    richtext: PropTypes.string,
};

export default Footer;
