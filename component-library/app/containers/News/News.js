import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Base from '../../layouts/Base';
import Image from '../../components/Image';
import Richtext from '../../components/Richtext';
import s from './News.module.scss';

const News = ({
    title = '',
    label = '',
    dateString = '',
    dateFormatted = '',
    image = {},
    content = {},
}) => {
    const { t } = useTranslation();
    const hasFeatured = !!image;
    const imageSizes = [
        '(min-width: 1680px) 1440px',
        '(min-width: 1440px) 1280px',
        '100vw',
    ];

    return (
        <article className={s.Root}>
            <div className={s.Wrap}>
                <div className={s.HeaderWrap}>
                    <div className={s.Header}>
                        {label && (
                            <div
                                className={s.Label}
                                dangerouslySetInnerHTML={{ __html: label }}
                            />
                        )}
                        <h1
                            className={s.Title}
                            dangerouslySetInnerHTML={{ __html: title }}
                        />
                        {dateString && dateFormatted && (
                            <div className={s.Meta}>
                                <span className="sr-only">
                                    {t('news.date')}:{' '}
                                </span>
                                <time className={s.Date} dateTime={dateString}>
                                    {dateFormatted}
                                </time>
                            </div>
                        )}
                    </div>
                </div>

                {hasFeatured && (
                    <div className={s.Featured}>
                        <Image {...image} sizes={imageSizes} useCover={false} />
                    </div>
                )}

                <div className={s.Layout}>
                    <div className={s.Content}>
                        <Richtext {...content} />
                    </div>
                </div>
            </div>
        </article>
    );
};

News.propTypes = {
    title: PropTypes.string,
    label: PropTypes.string,
    dateString: PropTypes.string,
    dateFormatted: PropTypes.string,
    content: PropTypes.object,
};

export default Base(News);
