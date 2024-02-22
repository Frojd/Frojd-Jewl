import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
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
}) => {
    const { t } = useTranslation();

    const hasImage = !!image?.src;

    return (
        <article className={s.Root}>
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
                    <aside className={s.Meta}>
                        <span className="sr-only">{t('card.date')}: </span>
                        <time className={s.Date} dateTime={dateString}>
                            {dateFormatted}
                        </time>
                    </aside>
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
};

export default Card;
