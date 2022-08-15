import React from 'react';
import PropTypes from 'prop-types';
import {useTranslation} from 'react-i18next';
import s from './Breadcrumbs.module.scss';

const Breadcrumbs = ({items}) => {
    const {t} = useTranslation();

    return (
        <div className={s.Root}>
            <nav className={s.Nav} aria-label={t('breadcrumbs.label')}>
                <ol className={s.List}>
                    {items.map((item, index) => (
                        <li className={s.Item} key={index}>
                            <Link
                                {...item}
                                isStart={index === 0}
                                isCurrent={(index + 1 === items.length)}
                            />
                        </li>
                    ))}
                </ol>
            </nav>
        </div>
    );
};

Breadcrumbs.propTypes = {
    items: PropTypes.array,
};

Breadcrumbs.defaultProps = {
    items: [],
};

const Link = ({title, url, isStart, isCurrent}) => {
    const {t} = useTranslation();

    const displayTitle = isStart ? t('breadcrumbs.start') : title;

    return (
        <a
            className={s.Link}
            href={url}
            aria-current={isCurrent ? 'page' : null}
        >{displayTitle}</a>
    );
};

Link.propTypes = {
    title: PropTypes.string,
    url: PropTypes.string,
    isStart: PropTypes.bool,
    isCurrent: PropTypes.bool,
};

Link.defaultProps = {
    title: '',
    url: '',
    isStart: false,
    isCurrent: false,
};

export default Breadcrumbs;
