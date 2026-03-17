'use client';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Image from '../Image';
import s from './Card.module.scss';

const Card = ({ title = '', url = '', text = '', image = {}, size = '' }) => {
    const hasImage = !!image?.src;

    const imageSizes = [
        ...[
            size === 'Full' && [
                '(min-width: 1680px) 724px',
                '(min-width: 1440px) 644px',
            ],
        ],
        ...[
            size === 'Half' && [
                '(min-width: 1680px) 702px',
                '(min-width: 1440px) 628px',
            ],
        ],
        ...[
            size === 'Third' && [
                '(min-width: 1680px) 464px',
                '(min-width: 1440px) 411px',
                '(min-width: 1024px) 33vw',
            ],
        ],
        ...[
            size === 'Fourth' && [
                '(min-width: 1680px) 342px',
                '(min-width: 1440px) 302px',
                '(min-width: 1280px) 25vw',
                '(min-width: 1024px) 33vw',
            ],
        ],
        '(min-width: 768px) 50vw',
        '100vw',
    ];

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
                    <Image
                        {...image}
                        sizes={imageSizes}
                        useCover={true}
                        useCaption={false}
                    />
                </div>
            )}

            <div className={s.Content}>
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
            </div>
        </article>
    );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    text: PropTypes.string,
    image: PropTypes.object,
    size: PropTypes.string,
};

export default Card;
