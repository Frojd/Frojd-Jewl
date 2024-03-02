import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import Image from 'Components/Image';
import s from './Card.module.scss';

const Card = ({
    title = '',
    url = '',
    label = '',
    text = '',
    image = {},
    dateString = '',
    dateFormatted = '',
    size = '',
}) => {
    const { t } = useTranslation();

    const hasImage = !!image?.src;

    const classes = classNames(s.Root, { [s[`Root--${size}`]]: size });

    return (
        <article className={classes}>
            <a className={s.Link} href={url}>
                <span
                    className="sr-only"
                    dangerouslySetInnerHTML={{ __html: title }}
                />
            </a>

            {hasImage && (
                <div className={s.ImageContainer}>
                    <Image {...image} className={s.Image} />
                </div>
            )}

            <div className={s.Content}>
                {label && (
                    <div
                        className={s.Label}
                        dangerouslySetInnerHTML={{ __html: label }}
                    />
                )}

                <h3
                    className={s.Title}
                    dangerouslySetInnerHTML={{ __html: title }}
                />

                {text && (
                    <p
                        className={s.Text}
                        dangerouslySetInnerHTML={{ __html: text }}
                    />
                )}

                {dateString && dateFormatted && (
                    <div className={s.Meta}>
                        <span className="sr-only">{t('card.date')}: </span>
                        <time className={s.Date} dateTime={dateString}>
                            {dateFormatted}
                        </time>
                    </div>
                )}
            </div>
        </article>
    );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    label: PropTypes.string,
    text: PropTypes.string,
    image: PropTypes.object,
    dateString: PropTypes.string,
    dateFormatted: PropTypes.string,
    size: PropTypes.string,
};

export default Card;
