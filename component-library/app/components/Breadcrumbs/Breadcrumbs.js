import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Icon from 'Components/Icon';
import s from './Breadcrumbs.module.scss';

const Breadcrumbs = ({ items = [] }) => {
    const { t } = useTranslation();

    if (items.length < 2) {
        return null;
    }

    return (
        <div className={s.Root}>
            <div className={s.Wrap}>
                <nav className={s.Nav} aria-label={t('breadcrumbs.label')}>
                    <ol className={s.List}>
                        {items.map((item, index) => (
                            <li className={s.Item} key={index}>
                                {index > 0 && (
                                    <Icon name="Chevron" asBg={true} />
                                )}
                                <Link
                                    {...item}
                                    isStart={index === 0}
                                    isCurrent={index + 1 === items.length}
                                />
                            </li>
                        ))}
                    </ol>
                </nav>
            </div>
        </div>
    );
};

Breadcrumbs.propTypes = {
    items: PropTypes.array,
};

const Link = ({ title = '', url = '', isStart = false, isCurrent = false }) => {
    const { t } = useTranslation();

    const displayTitle = isStart ? t('breadcrumbs.start') : title;

    return (
        <a
            className={s.Link}
            href={url}
            aria-current={isCurrent ? 'page' : null}
            dangerouslySetInnerHTML={{ __html: displayTitle }}
        />
    );
};

Link.propTypes = {
    title: PropTypes.string,
    url: PropTypes.string,
    isStart: PropTypes.bool,
    isCurrent: PropTypes.bool,
};

export default Breadcrumbs;
