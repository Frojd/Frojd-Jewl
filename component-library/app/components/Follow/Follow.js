import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import Facebook from 'SVG/facebook.svg';
import Instagram from 'SVG/instagram.svg';
import LinkedIn from 'SVG/linkedin.svg';
import s from './Follow.module.scss';

const Follow = ({ id = 'follow', title = '', items = [] }) => {
    const { t } = useTranslation();

    const displayTitle = title || t('follow.title');

    return (
        <div className={s.Follow}>
            <h2 className="sr-only" id={id}>{displayTitle}</h2>
            <nav className={s.Nav} aria-labelledby={id}>
                {items.map((item, index) => (
                    <Item {...item} key={index} />
                ))}
            </nav>
        </div>
    );
};

Follow.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    items: PropTypes.array,
};

const Item = ({ href = '', type = '' }) => {
    const { t } = useTranslation();

    const icons = {
        Facebook: Facebook,
        Instagram: Instagram,
        LinkedIn: LinkedIn,
    };
    const Icon = icons[type];

    const classes = classNames(s.Item, [s[`Item--${type}`]]);
    return (
        <a className={s.Link} href={href} target="_blank">
            <span className="sr-only">{t('follow.goTo', { name: type })}</span>
            {Icon && <Icon className={s.Icon} />}
        </a>
    );
};

Follow.propTypes = {
    href: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};

export default Follow;
