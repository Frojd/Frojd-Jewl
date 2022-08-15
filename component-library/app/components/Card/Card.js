import React from 'react';
import PropTypes from 'prop-types';
import {useTranslation} from 'react-i18next';
import Image from 'Components/Image';
import s from './Card.module.scss';

const Card = ({ title, url, image, label, text, dateString, dateFormatted}) => {
    const {t} = useTranslation();

    const hasImage = !!image?.src;

    return (
        <article className={s.Root}>
            <a className={s.Link} href={url}>
                <span className="sr-only">{title}</span>
            </a>

            {hasImage &&
                <div className={s.ImageContainer}>
                    <Image
                        {...image}
                        className={s.Image}
                    />
                </div>
            }

            <div className={s.Content}>
                {label &&
                    <div className={s.Label}>{label}</div>
                }

                <h2 className={s.Title}>{title}</h2>

                {text &&
                    <p className={s.Text}>{text}</p>
                }

                {dateString && dateFormatted &&
                    <aside className={s.Meta}>
                        <span className="sr-only">{t('card.date')}: </span>
                        <time
                            className={s.Date}
                            dateTime={dateString}
                        >{dateFormatted}</time>
                    </aside>
                }
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

Card.defaultProps = {
    title: '',
    url: '',
    label: '',
    text: '',
    image: {},
    dateString: '',
    dateFormatted: '',
};

export default Card;
